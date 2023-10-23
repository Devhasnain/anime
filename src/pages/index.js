import { Inter } from 'next/font/google'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=' '>
      <div className='container h-screen'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='text-4xl my-8'>Anime Eleven</h1>
        </div>
      </div>
    </div>
  )
}
