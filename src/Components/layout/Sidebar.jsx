import React, { useRef } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import Image from 'next/image'
import { defaultNavItems } from './defaultNavItems'
import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
} from '@heroicons/react/24/solid'

const Sidebar = ({
  collapsed,
  navItems = defaultNavItems,
  shown,
  setCollapsed,
}) => {
  const Icon = collapsed ? Bars3BottomLeftIcon : Bars3BottomRightIcon

  return (
    <div
      className={classNames({
        'bg-black text-zinc-50 fixed md:static md:translate-x-0 z-20': true,
        'transition-all duration-300 ease-in-out': true,
        'w-[240px]': !collapsed,
        'w-16': collapsed,
        '-translate-x-full': !shown,
      })}
    >
      <div
        className={classNames({
          'flex flex-col justify-between h-screen sticky inset-0 w-full': true,
        })}
      >
        <div
          className={classNames({
            'flex items-center  transition-none': true,
            'p-3 justify-between': !collapsed,
            'py-3 justify-center': collapsed,
          })}
        >
          {!collapsed && (
            <span className='whitespace-nowrap'>Anime Eleven</span>
          )}
          <button
            className='grid place-content-center hover-bg-indigo-800 w-10 h-10 rounded-full opacity-100 md-opacity-100'
            onClick={() => setCollapsed(!collapsed)}
          >
            <Icon className='w-5 h-5' />
          </button>
        </div>
        <nav className='flex-grow'>
          <ul
            className={classNames({
              'my-2 flex flex-col gap-2 items-stretch': true,
            })}
          >
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={classNames({
                    'text-indigo-100 hover-bg-indigo-900 flex': true,
                    'transition-colors duration-300': true,
                    'rounded-md p-2 mx-3 gap-4': !collapsed,
                    'rounded-full p-2 mx-3 w-10 h-10': collapsed,
                  })}
                >
                  <Link href={item.href} className='flex gap-2'>
                    {item.icon} <span>{!collapsed && item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
