import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = (props) => {
  const [collapsed, setSidebarCollapsed] = useState(false)
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <div
      className={
        'grid bg-zinc-100 min-h-screen ' +
        (collapsed ? 'grid-cols-sidebar-collapsed' : 'grid-cols-sidebar') +
        ' transition-[grid-template-columns] duration-300 ease-in-out'
      }
    >
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setSidebarCollapsed}
        shown={showSidebar}
      />
      <div>
        <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
        {props.children}
      </div>
    </div>
  )
}

export default Layout
