'use client'

import React from 'react'
import Image from 'next/image'
import { useGlobalContext } from '@/contexts/GlobalContext'
import { gridIcon, listIcon, toggleSidebarIcon } from '@/helpers/icons'
import classNames from 'classnames'

export default function Header() {
  const [state, dispatch] = useGlobalContext()
  const { itemsView, sidebarStatus } = state

  const handleViewChange = (view: 'grid' | 'list') => {
    dispatch({ setState: { itemsView: view } })
  }

  const toggleSidebar = () => {
    dispatch({ setState: { sidebarStatus: sidebarStatus === "closed" ? "semi-opened" : "closed" } })
  }

  return (
    <div>
      {/* <h1>Header</h1> */}
      <div className="flex justify-between items-center">
        <div>
          <Image className='w-23 h-14' src="/images/fazit_logo.png" alt="Logo" width={100} height={100} />
        </div>
        <div className=''>
          <div className='flex py-4 px-9 rounded-4xl gap-x-3 bg-card-bg-color' >
            <button
              onClick={() => handleViewChange('list')}
              className={classNames("transition-opacity cursor-pointer hover:text-primary", { "text-primary": itemsView === "list" })}
            >
              {listIcon}
            </button>
            <button
              onClick={() => handleViewChange('grid')}
              className={classNames("transition-opacity cursor-pointer hover:text-primary", { "text-primary": itemsView === "grid" })}
            >
              {gridIcon}
            </button>
            <button
              onClick={toggleSidebar}
              className={classNames("transition-opacity cursor-pointer hover:text-primary", { "text-primary": sidebarStatus === "closed" })}
            >
              {toggleSidebarIcon}
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}
