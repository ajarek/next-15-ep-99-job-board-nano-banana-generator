"use server";
import {google} from '@ai-sdk/google'
import { generateText } from 'ai';
import fs from 'node:fs';

export async function generateImage(prompt: string) {
    const result = await generateText({
        model: google('gemini-2.5-flash-image-preview'),
        prompt
    });

    let fileName = '';

    // Save generated images
    for (const file of result.files) {
        if (file.mediaType.startsWith('image/')) {
            const timestamp = Date.now();
            fileName = `generated-${timestamp}.png`;

            await fs.promises.writeFile(`public/${fileName}`, file.uint8Array);
        }
    }

    return `/${fileName}`
}