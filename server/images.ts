'use server'
import { google } from '@ai-sdk/google'
import { generateText } from 'ai'
import fs from 'node:fs'

export async function generateImage(prompt: string) {
  try {
    const result = await generateText({
      model: google('gemini-2.5-flash-image-preview'),
      prompt,
    })
    if (!result.files || result.files.length === 0) {
      throw new Error('No files generated')
    }
    let fileName = ''

    // Save generated images
    for (const file of result.files) {
      if (file.mediaType.startsWith('image/')) {
        const timestamp = Date.now()
        fileName = `generated-${timestamp}.png`

        await fs.promises.writeFile(`public/${fileName}`, file.uint8Array)
      }
    }

    return `/${fileName}`
  } catch (error) {
    console.error('Error generating image:', error)
    throw error
  }
}
