'use client'

import React from 'react'
import classNames from 'classnames'

export interface TabOption<T = string> {
	value: T
	label: string
}

export type TabSize = 'small' | 'large'

export interface TabsProps<T = string> {
	options: TabOption<T>[]
	activeTab: T
	onTabChange: (value: T) => void
	size?: TabSize
	className?: string
}

export default function Tabs<T = string>({
	options,
	activeTab,
	onTabChange,
	size = 'large',
	className = ''
}: TabsProps<T>) {
	return (
		<div className={classNames("flex overflow-x-auto", className)}>
			<div className={classNames(
				"bg-[#0D99FF33] rounded-full flex",
				{

					"p-1": size === 'large',
					"p-2.5": size === 'small',
					"gap-3": size === 'large',
					"gap-1.5": size === 'small'
				}
			)}>
				{options.map((option) => (
					<button
						key={String(option.value)}
						onClick={() => onTabChange(option.value)}
						className={classNames(
							"rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer",
							{
								// Small size styles
								"px-3 py-2 text-sm font-semibold": size === 'large',
								"p-2.5  text-sm font-bold": size === 'small',
								// Large size styles

								// Active state
								"bg-primary text-tabs-selected-foreground font-medium": activeTab === option.value,

								"bg-transparent text-tabs-unselected-foreground": activeTab !== option.value
							}
						)}
					>
						{option.label}
					</button>
				))}
			</div>
		</div>
	)
}

