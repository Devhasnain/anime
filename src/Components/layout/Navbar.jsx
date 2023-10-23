import React from 'react'
import {
  Bars3Icon,
  MagnifyingGlassCircleIcon,
  MoonIcon,
  UserCircleIcon,
} from '@heroicons/react/24/solid'
import classNames from 'classnames'

const Navbar = (props) => {
  return (
    <nav
      className={classNames({
        'bg-white text-zinc-500': true,
        'flex items-center': true,
        'w-screen md:w-full sticky z-10 px-4 shadow-sm h-[50px] top-0': true,
      })}
    >
      <div className='font-bold text-lg'>Admin Panel</div>
      <div className='flex-grow' />

      <div className='relative mx-4 w-48'>
        <input
          type='text'
          placeholder='Search...'
          className='border border-gray-400 rounded-full py-1 px-4 w-full focus:outline-none focus:border-blue-500'
        />
        <div className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500'>
          <MagnifyingGlassCircleIcon className='w-5 h-5' />
        </div>
      </div>

      <button className='text-xl text-gray-500 mx-2'>
        <MoonIcon className='w-6 h-6' />
      </button>

      <div className='flex space-x-4'>
        <button className='text-gray-500 hover:text-blue-500'>
          <UserCircleIcon className='w-5 h-5 inline-block' />
          Register
        </button>
        <button className='text-gray-500 hover:text-blue-500'>
          <UserCircleIcon className='w-5 h-5 inline-block' />
          Login
        </button>
      </div>

      <button className='md:hidden' onClick={props.onMenuButtonClick}>
        <Bars3Icon className='w-6 h-6' />
      </button>
    </nav>
  )
}

export default Navbar
