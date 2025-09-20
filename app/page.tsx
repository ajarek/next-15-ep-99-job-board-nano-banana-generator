import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='min-h-[calc(100vh-64px)] flex flex-col items-center justify-start sm:px-16 px-4  py-4'>
      <div className='relative w-full h-[500px] max-w-5xl rounded-lg overflow-hidden shadow-lg'>
        <Image
          src='/nano-banana.png'
          alt='nano banana'
          fill
          className='object-cover '
          sizes='(max-width: 768px) 100vw, 33vw'
        />
        <h1 className='absolute top-10 left-1/2 transform -translate-x-1/2 text-xl sm:text-3xl text-white text-center font-bold'>
          Generate Nano Banana
        </h1>
        <Button
          asChild
          variant={'success'}
          className='absolute top-35 left-1/2 transform -translate-x-1/2 shadow-xl'
        >
          <Link href='/dashboard'>Get Started</Link>
        </Button>
      </div>
    </main>
  )
}
