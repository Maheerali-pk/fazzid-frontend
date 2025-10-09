'use client'

import React from 'react'
import { useGlobalContext } from '@/contexts/GlobalContext'
import classNames from 'classnames'

export default function SearchSidebar() {
	const [state] = useGlobalContext()
	const { isSidebarOpen } = state


	return (
		<div className={classNames(" rounded-[2rem] h-full bg-inner-background transition-all duration-200 ease-in", { "min-w-[0px] w-0": !isSidebarOpen, "w-[600px] min-w-[600px]": isSidebarOpen })}>
			{/* Empty sidebar */}
		</div>
	)
}

