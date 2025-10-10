'use client'

import React, { useState } from 'react'
import { useGlobalContext } from '@/contexts/GlobalContext'
import classNames from 'classnames'
import Image from 'next/image'
import { listIcon, plusIcon, spreadIcon, userIcon, micIcon, searchIcon, worldIcon, layers, images, headlines, videos, sites, toggleSidebarIcon, trippleUpArrows, bookIcon, cameraIcon } from '@/helpers/icons'

export default function SearchSidebar() {
	const [state] = useGlobalContext()
	const { isSidebarOpen } = state
	const [activeTab, setActiveTab] = useState('Categories')
	const [selectedCountries, setSelectedCountries] = useState(['India', 'Pakistan'])
	const [countryDropdownOpen, setCountryDropdownOpen] = useState(true)
	const [statesDropdownOpen, setStatesDropdownOpen] = useState(true)

	// Tabs
	const tabs = ['Categories', 'Website', 'Channel', 'Keywords']

	// Sample data for UI display
	const states = [
		{ name: 'All', isIcon: true, icon: worldIcon, count: 520 },
		{ name: 'United States', flag: '/images/flags/us.svg', count: 720 },
		{ name: 'Pakistan', flag: '/images/flags/Pakistan.svg', count: 120 },
		{ name: 'Germany', flag: '/images/flags/Germany.svg', count: 400 },
		{ name: 'UnitedKingdom', flag: '/images/flags/uk.svg', count: 720 },
		{ name: 'Yemen', flag: '/images/flags/Yemen.svg', count: 720 },
	]

	const contentTypes = [
		{ name: 'Pages', icon: layers, count: 5250 },
		{ name: 'Images', icon: images, count: 33 },
		{ name: 'Headlines', icon: headlines, count: 421 },
		{ name: 'Images', icon: images, count: 33 },
		{ name: 'Videos', icon: videos, count: 431 },
		{ name: 'Sites', icon: sites, count: 621 }
	]

	const handleAddCountry = () => {
		// Functionality to add a country
		console.log('Add country')
	}

	const handleDiveDeeper = () => {
		// Dive deeper functionality
		console.log('Dive deeper')
	}

	const handleDelvingDeeper = () => {
		// Delving deeper functionality
		console.log('Delving deeper')
	}

	return (
		<div className={classNames("rounded-[2rem] h-full bg-inner-background transition-all duration-200 ease-in flex flex-col", {
			"min-w-[0px] w-0 overflow-hidden": !isSidebarOpen,
			"w-[600px] min-w-[600px]": isSidebarOpen
		})}>
			{isSidebarOpen && (
				<div className="px-4 py-2.5 flex flex-col h-full overflow-auto">
					{/* Top Action Icons */}
					<div className="flex items-center justify-between mb-4">
						<div className="flex items-center gap-2 py-4 px-8 bg-card-bg-color rounded-full">
							{toggleSidebarIcon}
						</div>
						<div className="flex items-center gap-2 p-4 bg-card-bg-color rounded-full">
							{userIcon}
						</div>
					</div>

					<div className='bg-card-bg-color p-4 rounded-4xl mb-4'>
						{/* Countries Pills */}
						<div className="flex items-center gap-2 rounded-full p-2 mb-4 bg-inner-background">
							{selectedCountries.map((country) => (
								<div key={country} className="text-foreground px-4 py-2.5 rounded-full bg-card-bg-color font-bold text-sm">
									{country}
								</div>
							))}

							<div className="flex items-center gap-2 p-2.5 bg-card-bg-color rounded-full">
								{plusIcon}
							</div>
						</div>

						{/* Dive Deeper / Delving Deeper */}
						<div className="flex mb-4">
							<div className="rounded-full flex overflow-hidden p-1  bg-[#0D99FF33]">
								<button
									onClick={handleDiveDeeper}
									className="bg-[#0D99FF] text-foreground font-medium text-sm rounded-full px-5 py-4"
								>
									Dive Deeper
								</button>
								<button
									onClick={handleDelvingDeeper}
									className="bg-transparent text-foreground px-3 py-3 font-medium text-sm"
								>
									Delving Deeper
								</button>
							</div>
						</div>

						{/* Search Input */}
						<div className="relative mb-4 items-center ">
							<input
								type="text"
								placeholder="enter your keyword here"
								className="w-full bg-inner-background text-foreground p-6 rounded-4xl placeholder:text-foreground text-lg"
							/>
							<div className="absolute inset-y-0 right-0 flex items-center gap-2 mr-4">
								<div className="flex items-center">
									<button className="text-foreground p-2">
										{micIcon}
									</button>
								</div>
								<div className='text-foreground text-3xl mx-2 mb-2 font-extralight'>|</div>
								<div className="flex items-center">
									<button className="text-foreground p-2">
										{searchIcon}
									</button>
								</div>
							</div>
						</div>
					</div>


					<div className='bg-card-bg-color p-4 rounded-4xl mb-4'>
						{/* Tabs */}
						<div className="flex gap-2 mb-4 overflow-x-auto">
							<div className='py-2 bg-[#0D99FF33] rounded-full px-2.5'>
								{tabs.map((tab) => (
									<button
										key={tab}
										onClick={() => setActiveTab(tab)}
										className={`px-4 py-2 rounded-full whitespace-nowrap text-sm ${activeTab === tab ? 'bg-[#0D99FF] text-foreground font-medium' : 'bg-transparent text-foreground'
											}`}
									>
										{tab}
									</button>
								))}
							</div>
						</div>

						{/* Tab Content */}
						<div className="flex flex-col">
							{/* Categories Tab Content */}
							{activeTab === 'Categories' && (
								<>
									{/* Countries Section */}
									<div className='bg-inner-background p-7.5 rounded-4xl'>
										<div className="">
											<div
												className="flex justify-between items-center bg-inner-background rounded-md cursor-pointer"
												onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
											>
												<span className="text-foreground">Countries</span>
												<div className='p-2 bg-card-bg-color rounded-full'>
													<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform ${countryDropdownOpen ? 'rotate-180' : ''}`}>
														<path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</div>
											</div>

											{countryDropdownOpen && (
												<div className="pt-6">
													<div className="grid grid-cols-6 ">
														{states.map((state) => (
															<div key={state.name} className="flex flex-col items-center">
																<div className="w-16 h-16 rounded-3xl bg-[#0D99FF33] flex items-center justify-center overflow-hidden py-4 px-3.5">
																	{/* Handle both SVG icons and image flags */}
																	{state.isIcon ? (
																		<div className="text-foreground">
																			{state.icon}
																		</div>
																	) : state.flag ? (
																		<Image
																			src={state.flag}
																			alt={`${state.name} flag`}
																			width={49}
																			height={49}
																		/>
																	) : (
																		<p>no image</p>
																	)}
																</div>
																<span className="text-foreground text-xs pt-2.5">{state.name}</span>
																<span className="text-foreground text-xs">{state.count}</span>
															</div>
														))}
													</div>
												</div>
											)}
										</div>
									</div>

									{/* United States Section */}
									<div className='bg-inner-background p-7.5 rounded-4xl mt-5'>
										<div className="">
											<div
												className="flex justify-between items-center bg-inner-background rounded-md cursor-pointer"
												onClick={() => setStatesDropdownOpen(!statesDropdownOpen)}
											>
												<span className="text-foreground">United States</span>
												<div className='p-2 bg-card-bg-color rounded-full'>
													<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform ${statesDropdownOpen ? 'rotate-180' : ''}`}>
														<path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</div>
											</div>

											{statesDropdownOpen && (
												<div className="pt-6">
													<div className="grid grid-cols-6 ">
														{contentTypes.map((type, i) => (
															<div key={type.name + i} className="flex flex-col items-center">
																<div className="w-16 h-16 rounded-3xl bg-[#0D99FF33] flex items-center justify-center overflow-hidden py-4 px-3.5">
																	{/* Display icon based on the type */}
																	<div className="text-foreground">
																		{type.icon || <p>no icon</p>}
																	</div>
																</div>
																<span className="text-foreground text-xs pt-2.5">{type.name}</span>
																<span className="text-foreground text-xs">{type.count}</span>
															</div>
														))}
													</div>
												</div>
											)}
										</div>
									</div>
								</>
							)}

							{/* Website Tab Content */}
							{activeTab === 'Website' && (
								<div className='bg-inner-background p-7.5 rounded-4xl'>
									<div className="flex justify-between items-center mb-4">
										<span className="text-foreground font-medium">Countries</span>
									</div>
									<div className="grid grid-cols-2 gap-4">
										{[
											{ name: 'CNN', logo: '/images/flags/us.svg', rank: '(1)', visitors: '1432', articles: '2344' },
											{ name: 'Al Jazeera', logo: '/images/flags/Yemen.svg', rank: '(1)', visitors: '1432', articles: '2344' },
											{ name: 'Fox News', logo: '/images/flags/us.svg', rank: '(1)', visitors: '1432', articles: '2344' },
											{ name: 'BBC News', logo: '/images/flags/uk.svg', rank: '(1)', visitors: '1432', articles: '2344' },
											{ name: 'Geo News', logo: '/images/flags/Pakistan.svg', rank: '(1)', visitors: '1432', articles: '2344' },
											{ name: 'CBS News', logo: '/images/flags/us.svg', rank: '(1)', visitors: '1432', articles: '2344' }
										].map((site, index) => (
											<div key={index} className="bg-card-bg-color p-4 rounded-4xl flex items-center gap-4">
												<div className="w-15 h-15 rounded-full flex items-center justify-center overflow-hidden">
													<Image src={site.logo} alt={site.name} width={61} height={61} />
												</div>
												<div className=''>
													<div className="flex items-center gap-1">
														<span>{trippleUpArrows}</span>
														<span className="text-foreground text-xs">Overall Rank {site.rank}</span>
													</div>
													<div className=" items-center text-xs text-foreground">
														<div className="flex items-center gap-1 ">
															<span>{bookIcon}</span>
															<div></div>
															<span>{site.visitors}</span>
														</div>
														<div className="flex items-center gap-1">
															<span>{cameraIcon}</span>
															<div></div>
															<span>{site.articles}</span>
														</div>
													</div>
												</div>
											</div>
										))}
									</div>
								</div>
							)}

							{/* Channel Tab Content */}
							{activeTab === 'Channel' && (
								<div className='bg-inner-background p-7.5 rounded-4xl'>
									<div className="flex justify-between items-center mb-4">
										<span className="text-foreground font-medium">News Channels</span>
									</div>
									<div className="grid grid-cols-1 gap-4">
										{[
											{ name: 'CNN International', country: 'United States', type: 'News' },
											{ name: 'BBC World', country: 'United Kingdom', type: 'News & Documentary' },
											{ name: 'Al Jazeera English', country: 'Qatar', type: 'News & Current Affairs' },
											{ name: 'DW News', country: 'Germany', type: 'News & Documentary' },
											{ name: 'France 24', country: 'France', type: 'News' }
										].map((channel, index) => (
											<div key={index} className="bg-card-bg-color p-4 rounded-xl flex justify-between items-center">
												<div>
													<div className="text-foreground font-medium">{channel.name}</div>
													<div className="text-foreground text-sm">{channel.country}</div>
												</div>
												<div className="bg-inner-background px-3 py-1 rounded-full text-sm text-foreground">
													{channel.type}
												</div>
											</div>
										))}
									</div>
								</div>
							)}

							{/* Keywords Tab Content */}
							{activeTab === 'Keywords' && (
								<div className='bg-inner-background p-7.5 rounded-4xl'>
									<div className="flex justify-between items-center mb-4">
										<span className="text-foreground font-medium">Trending Keywords</span>
									</div>
									<div className="flex flex-wrap gap-2">
										{[
											'Climate Change', 'Elections', 'COVID-19', 'Economy',
											'Technology', 'Sports', 'Entertainment', 'Politics',
											'Health', 'Science', 'Education', 'Environment'
										].map((keyword, index) => (
											<div key={index} className="bg-card-bg-color px-4 py-2 rounded-full text-sm text-foreground">
												{keyword}
											</div>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
