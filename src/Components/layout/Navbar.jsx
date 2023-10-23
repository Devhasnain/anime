import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import classNames from 'classnames'

const Navbar = (props) => {
  return (
    <nav
      className={classNames({
        'bg-white text-zinc-500': true, // colors
        'flex items-center': true, // layout
        'w-screen md:w-full sticky z-10 px-4 shadow-sm h-[73px] top-0': true, // positioning & styling
      })}
    >
      <div className='font-bold text-lg'>Admin Panel</div>
      <div className='flex-grow' />
      <button className='md:hidden' onClick={props.onMenuButtonClick}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </button>
    </nav>
  )
}

export default Navbar
