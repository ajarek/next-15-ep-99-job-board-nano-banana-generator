'use client'
import ModeToggle from "@/components/mode-toggle";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'

const Navbar = () => {
  const { data: session, status } = useSession()
  return (
     <nav className="w-full flex items-center justify-between px-8 py-4 border-b border-b-slate-200 dark:border-b-slate-700">
        <Link href='/'>Home</Link>
        <Link href='/dashboard'>Dashboard</Link>
        <div>
           {session?.user ? (
                <div className='flex items-center gap-2'>
                 
                  <Image
                    src={
                      session?.user?.image ||
                      'https://randomuser.me/api/portraits/men/62.jpg'
                    }
                    alt={session?.user?.name || 'login'}
                    width={30}
                    height={30}
                    className='rounded-full'
                  />
                   <Button
                    onClick={() => signOut()}
                    variant='outline'
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <>
                  <Button
                    asChild
                    variant='outline'
                    size='sm'
                    className=''
                  >
                    <Link href='/login'>
                      <span>Login</span>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size='sm'
                    className=''
                  >
                    <Link href='/register'>
                      <span>Sign Up</span>
                    </Link>
                  </Button>
                  </>
              )}
                 
        </div>
        <ModeToggle />
      </nav>
  )
}

export default Navbar