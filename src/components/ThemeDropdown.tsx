'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import classNames from 'classnames'

export default function ThemeDropdown() {
	const [isOpen, setIsOpen] = useState(false)
	const { theme, setTheme } = useTheme()
	const dropdownRef = useRef<HTMLDivElement>(null)

	// Close dropdown when clicking outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const handleThemeChange = (newTheme: 'light' | 'dark') => {
		setTheme(newTheme)
		setIsOpen(false)
	}

	return (
		<div className="relative" ref={dropdownRef}>
			<div
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center gap-2 p-4 bg-card-bg-color rounded-full cursor-pointer hover:text-primary transition-colors"
			>
				{/* Theme Icon */}
				{theme === 'light' ? (
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				) : (
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				)}
			</div>

			{/* Dropdown Menu */}
			{isOpen && (
				<div className="absolute right-0 mt-2 w-48 bg-card-bg-color rounded-2xl shadow-lg z-50 overflow-hidden">
					<div
						onClick={() => handleThemeChange('light')}
						className={classNames(
							"flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-inner-background transition-colors",
							{ "bg-inner-background": theme === 'light' }
						)}
					>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						<span className="text-foreground font-medium">Light</span>
					</div>
					<div
						onClick={() => handleThemeChange('dark')}
						className={classNames(
							"flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-inner-background transition-colors",
							{ "bg-inner-background": theme === 'dark' }
						)}
					>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						<span className="text-foreground font-medium">Dark</span>
					</div>
				</div>
			)}
		</div>
	)
}

