"use client";

import React, { useState } from "react";
import {
	DiveType,
	SearchType,
	useGlobalContext,
} from "@/contexts/GlobalContext";
import classNames from "classnames";
import Image from "next/image";
import {
	listIcon,
	plusIcon,
	spreadIcon,
	userIcon,
	micIcon,
	searchIcon,
	worldIcon,
	layers,
	images,
	headlines,
	videos,
	sites,
	toggleSidebarIcon,
	trippleUpArrows,
	bookIcon,
	cameraIcon,
	backIcon,
} from "@/helpers/icons";
import Tabs, { TabOption } from "./Tabs";
import { allChannels, countries, IChannel, ICountry, IState, states } from "@/helpers/data";
import CountryItem from "./CountryItem";
import ThemeDropdown from "./ThemeDropdown";

export default function SearchSidebar() {
	const [state, dispatch] = useGlobalContext();
	const { sidebarStatus, searchType, channelsSelected } = state;

	const [activeTab, setActiveTab] = useState("Categories");
	const [selectedCountries, setSelectedCountries] = useState([
		"India",
		"Pakistan",
	]);
	const [countryDropdownOpen, setCountryDropdownOpen] = useState(true);
	const [statesDropdownOpen, setStatesDropdownOpen] = useState(true);

	// Main Tabs options
	const tabOptions: TabOption<SearchType>[] = [
		{ value: "categories", label: "Categories" },
		{ value: "website", label: "Website" },
		{ value: "channel", label: "Channel" },
		{ value: "keywords", label: "Keywords" },
	];

	// Dive Deeper tabs (small size example)

	const diveModeOptions: TabOption<DiveType>[] = [
		{ value: "dive-deeper", label: "Dive Deeper" },
		{ value: "diving-deeper", label: "Delving Deeper" },
	];

	// Sample data for UI display

	const contentTypes = [
		{ name: 'Pages', icon: layers, count: 5250 },
		{ name: 'Images', icon: images, count: 33 },
		{ name: 'Headlines', icon: headlines, count: 421 },
		{ name: 'Images', icon: images, count: 33 },
		{ name: 'Videos', icon: videos, count: 431 },
		{ name: 'Sites', icon: sites, count: 621 },
		{ name: 'Pages', icon: layers, count: 5250 },
		{ name: 'Images', icon: images, count: 33 },
		{ name: 'Headlines', icon: headlines, count: 421 },
		{ name: 'Images', icon: images, count: 33 },
		{ name: 'Videos', icon: videos, count: 431 },
		{ name: 'Sites', icon: sites, count: 621 },
		{ name: 'Pages', icon: layers, count: 5250 },
		{ name: 'Images', icon: images, count: 33 },
		{ name: 'Headlines', icon: headlines, count: 421 },
		{ name: 'Images', icon: images, count: 33 },
		{ name: 'Videos', icon: videos, count: 431 },
		{ name: 'Sites', icon: sites, count: 621 }
	]

	const handleAddCountry = () => {
		// Functionality to add a country
		console.log("Add country");
	};
	const selectedCountry = countries.find(
		(country) => country.id === state.selectedCountryId
	);
	const statesList: IState[] = selectedCountry
		? states.filter((state) => state.countryId === selectedCountry.id)
		: [];
	const handleChannelSelection = (channel: IChannel) => {
		const existingChannel = channelsSelected.find(channelId => channelId === channel.id);
		if (existingChannel) {
			dispatch({ setState: { channelsSelected: channelsSelected.filter((channelId) => channelId !== channel.id) } });
		} else {
			dispatch({ setState: { channelsSelected: [...channelsSelected, channel.id] } });
		}
	};
	const renderCountryTabItems = () => {
		if (selectedCountry) {

			return statesList.map(state => <CountryItem
				key={state.id + state.name}
				country={state}
				type="state"
			/>)

		}
		return countries.map(country => <CountryItem
			key={country.id + country.name}
			country={country}
			type="country"
		/>)
	}
	return (
		<div
			className={classNames(
				"rounded-[2rem] h-full bg-inner-background transition-all duration-300 ease-in flex flex-col",
				{
					"min-w-[0px] w-0 overflow-hidden": sidebarStatus === "closed",
					"w-[600px] min-w-[600px]": sidebarStatus === "semi-opened",
					"w-screen float-end": sidebarStatus === "full",
				}
			)}
		>
			<div className="px-4 py-2.5 flex flex-col h-full overflow-auto">
				{/* Top Action Icons */}
				<div className="flex items-center justify-between mb-4">
					<div
						onClick={() =>
							dispatch({
								setState: {
									sidebarStatus:
										sidebarStatus === "full" ? "semi-opened" : "full",
								},
							})
						}
						className={classNames(
							"flex cursor-pointer items-center gap-2 py-4 px-8 bg-card-bg-color rounded-full hover:text-primary",
							{ "text-primary": sidebarStatus === "full" }
						)}
					>
						{toggleSidebarIcon}
					</div>
					<ThemeDropdown />
				</div>

				<div className="bg-card-bg-color p-4 rounded-4xl mb-4">
					{/* Countries Pills */}
					<div className="flex items-center gap-2 rounded-full p-2 mb-4 bg-inner-background">
						{selectedCountries.map((country) => (
							<div
								key={country}
								className="text-foreground px-4 py-2.5 rounded-full bg-card-bg-color font-bold text-sm"
							>
								{country}
							</div>
						))}

						<div className="flex items-center gap-2 p-2.5 bg-card-bg-color rounded-full cursor-pointer">
							{plusIcon}
						</div>
					</div>

					{/* Dive Deeper / Delving Deeper - Small Tabs Example */}
					<Tabs
						options={diveModeOptions}
						activeTab={state.diveType}
						onTabChange={(value) =>
							dispatch({ setState: { diveType: value as DiveType } })
						}
						size="large"
						className="mb-4"
					/>

					{/* Search Input */}
					<div className="relative mb-4 items-center ">
						<input
							value={state.searchKeyword}
							onChange={(e) =>
								dispatch({
									setState: { searchKeyword: e.target.value },
								})
							}
							type="text"
							placeholder="enter your keyword here"
							className="w-full bg-inner-background text-foreground p-6 rounded-4xl placeholder:text-foreground text-lg"
						/>
						<div className="absolute inset-y-0 right-0 flex items-center gap-2 mr-4">
							<div className="flex items-center">
								<button className="text-foreground p-2 cursor-pointer">
									{micIcon}
								</button>
							</div>
							<div className="text-foreground text-3xl mx-2 mb-2 font-extralight">
								|
							</div>
							<div className="flex items-center">
								<button className="text-foreground p-2 cursor-pointer">
									{searchIcon}
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-card-bg-color p-4 rounded-4xl mb-4">
					{/* Tabs */}
					<Tabs
						options={tabOptions}
						activeTab={state.searchType}
						onTabChange={(value) =>
							dispatch({ setState: { searchType: value as SearchType } })
						}
						size="small"
						className="mb-4"
					/>

					{/* Tab Content */}
					<div className="flex flex-col">
						{/* Categories Tab Content */}
						{state.searchType === "categories" && (
							<>
								{/* Countries Section */}
								<div className="bg-inner-background p-7.5 rounded-4xl">
									<div className="">
										<div
											className="flex justify-between items-center bg-inner-background rounded-md cursor-pointer"
											onClick={() =>
												setCountryDropdownOpen(!countryDropdownOpen)
											}
										>
											<span className="text-foreground">
												Countries
											</span>
											<div className="p-2 bg-card-bg-color rounded-full">
												<svg
													width="20"
													height="20"
													viewBox="0 0 24 24"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													className={`transition-transform ${countryDropdownOpen
														? "rotate-180"
														: ""
														}`}
												>
													<path
														d="M6 9L12 15L18 9"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</div>
										</div>

										{countryDropdownOpen && (
											<div className="pt-6">
												{selectedCountry && (
													<div className="flex items-center gap-4 mb-6">
														<div
															className="cursor-pointer"
															onClick={() =>
																dispatch({
																	setState: {
																		selectedCountryId: null,
																	},
																})
															}
														>
															{backIcon}
														</div>
														<div className="flex gap-2">
															<Image
																src={
																	selectedCountry.flag as string
																}
																alt={selectedCountry.name}
																width={24}
																height={24}
															></Image>
															<span className="text-foreground text-lg font-semibold">
																{selectedCountry.name}
															</span>
														</div>
													</div>
												)}
												<div className="flex flex-wrap space-between gap-4">
													{renderCountryTabItems()}
												</div>
											</div>
										)}
									</div>
								</div>

								{/* United States Section */}
								<div className="bg-inner-background p-7.5 rounded-4xl mt-5">
									<div className="">
										<div
											className="flex justify-between items-center bg-inner-background rounded-md cursor-pointer"
											onClick={() =>
												setStatesDropdownOpen(!statesDropdownOpen)
											}
										>
											<span className="text-foreground">
												United States
											</span>
											<div className="p-2 bg-card-bg-color rounded-full">
												<svg
													width="20"
													height="20"
													viewBox="0 0 24 24"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
													className={`transition-transform ${statesDropdownOpen ? "rotate-180" : ""
														}`}
												>
													<path
														d="M6 9L12 15L18 9"
														stroke="currentColor"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</div>
										</div>

										{statesDropdownOpen && (
											<div className="pt-6">
												<div className="flex gap-7 space-between overflow-scroll space-between no-scrollbar">
													{contentTypes.map((type, i) => (
														<div
															key={type.name + i}
															className="flex flex-col items-center cursor-pointer"
														>
															<div className="w-16 h-16 rounded-3xl bg-[#0D99FF33] flex items-center justify-center overflow-hidden py-4 px-3.5">
																{/* Display icon based on the type */}
																<div className="text-foreground">
																	{type.icon || <p>no icon</p>}
																</div>
															</div>
															<span className="text-foreground text-xs pt-2.5">
																{type.name}
															</span>
															<span className="text-foreground text-xs">
																{type.count}
															</span>
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
						{state.searchType === "website" && (
							<div className="bg-inner-background p-7.5 rounded-4xl">
								<div className="flex justify-between items-center mb-4 cursor-pointer">
									<span className="text-foreground font-medium">
										Countries
									</span>
								</div>
								<div className="grid grid-cols-2 gap-4 cursor-pointer">
									{[
										{ name: 'CNN', logo: '/images/websites/cnn.svg', rank: '(1)', visitors: '1432', articles: '2344' },
										{ name: 'AlJazeera', logo: '/images/websites/aljazera.svg', rank: '(1)', visitors: '1432', articles: '2344' },
										{ name: 'Fox', logo: '/images/websites/foxnews.svg', rank: '(1)', visitors: '1432', articles: '2344' },
										{ name: 'BBC', logo: '/images/websites/bbc.svg', rank: '(1)', visitors: '1432', articles: '2344' },
										{ name: 'Geo', logo: '/images/websites/geo.svg', rank: '(1)', visitors: '1432', articles: '2344' },
										{ name: 'CBS', logo: '/images/websites/cbs.svg', rank: '(1)', visitors: '1432', articles: '2344' }
									].map((site, index) => (
										<div
											key={index}
											className="bg-card-bg-color p-4 rounded-4xl flex items-center gap-4"
										>
											<div className="w-15 h-15 flex items-center justify-center overflow-hidden">
												<Image
													src={site.logo}
													alt={site.name}
													width={61}
													height={61}
												/>
											</div>
											<div className="">
												<div className="flex items-center gap-1">
													<span>{trippleUpArrows}</span>
													<span className="text-foreground text-xs">
														Overall Rank {site.rank}
													</span>
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
						{state.searchType === "channel" && (
							<div className="bg-inner-background p-7.5 rounded-4xl ">
								<div className="flex justify-between items-center mb-4">
									<span className="text-foreground font-medium">
										News Channels
									</span>
								</div>
								<div className="grid grid-cols-2 gap-4">
									{allChannels.map((channel, index) => (
										<div
											key={index}
											className="bg-card-bg-color p-2 rounded-4xl flex items-center gap-1 cursor-pointer"

											onClick={() =>
												handleChannelSelection(channel)
											}
										>
											<div className="w-25 h-25 rounded-full flex flex-col items-center justify-center overflow-hidden">
												<Image
													src={channel.logo}
													alt={channel.name}
													width={61}
													height={61}
												/>
												{channel.name}
											</div>
											<div className="">
												<div className="flex items-center gap-1">
													<span>{trippleUpArrows}</span>
													<span className="text-foreground text-xs">
														Overall Rank {channel.rank}
													</span>
												</div>
												<div className=" items-center text-xs text-foreground">
													<div className="flex items-center gap-1 ">
														<span>{bookIcon}</span>
														<div></div>
														<span>{channel.visitors}</span>
													</div>
													<div className="flex items-center gap-1">
														<span>{cameraIcon}</span>
														<div></div>
														<span>{channel.articles}</span>
													</div>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						)}

						{/* Keywords Tab Content */}
						{state.searchType === "keywords" && (
							<div className="bg-inner-background p-7.5 rounded-4xl">
								<div className="flex justify-between items-center mb-4">
									<span className="text-foreground font-medium">
										Trending Keywords
									</span>
								</div>
								<div className="flex flex-wrap gap-2">
									{[
										"Climate Change",
										"Elections",
										"COVID-19",
										"Economy",
										"Technology",
										"Sports",
										"Entertainment",
										"Politics",
										"Health",
										"Science",
										"Education",
										"Environment",
									].map((keyword, index) => (
										<div
											key={index}
											className="bg-card-bg-color px-4 py-2 rounded-full text-sm text-foreground"
										>
											{keyword}
										</div>
									))}
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
