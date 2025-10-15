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
import {
	allChannels,
	countries,
	countryData,
	IChannel,
	ICountry,
	IState,
	states,
} from "@/helpers/data";
import CountryItem from "./CountryItem";
import ThemeDropdown from "./ThemeDropdown";
import { getFlagUrl, getCountryIconPath } from "@/helpers/utils";
import { useTheme } from "@/contexts/ThemeContext";
import PageTabs from "./PageTabs";
import SwiperWrapper from "./SwipableWrapper";
import { SwiperSlide } from "swiper/react";

// Flag API information for display
const flagApiInfo = {
	countriesCount: countryData.length,
	format: "https://flagsapi.com/:country_code/:style/:size.png",
	styles: ["flat", "shiny", "square"],
	sizes: [16, 24, 32, 48, 64],
};

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
		{ name: "Pages", icon: layers, count: 5250 },
		{ name: "Images", icon: images, count: 33 },
		{ name: "Headlines", icon: headlines, count: 421 },
		{ name: "Images", icon: images, count: 33 },
		{ name: "Videos", icon: videos, count: 431 },
		{ name: "Sites", icon: sites, count: 621 },
		{ name: "Pages", icon: layers, count: 5250 },
		{ name: "Images", icon: images, count: 33 },
		{ name: "Headlines", icon: headlines, count: 421 },
		{ name: "Images", icon: images, count: 33 },
		{ name: "Videos", icon: videos, count: 431 },
		{ name: "Sites", icon: sites, count: 621 },
		{ name: "Pages", icon: layers, count: 5250 },
		{ name: "Images", icon: images, count: 33 },
		{ name: "Headlines", icon: headlines, count: 421 },
		{ name: "Images", icon: images, count: 33 },
		{ name: "Videos", icon: videos, count: 431 },
		{ name: "Sites", icon: sites, count: 621 },
	];
	const { theme } = useTheme();

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

	// Example showing how we're now using the Flags API for all 50 countries
	const flagApiInfo = {
		format: "https://flagsapi.com/:country_code/:style/:size.png",
		countriesCount: countryData.length,
		styles: ["flat", "shiny", "square"],
		sizes: [16, 24, 32, 48, 64, 128],
	};
	const handleChannelSelection = (channel: IChannel) => {
		const existingChannel = channelsSelected.find(
			(channelId) => channelId === channel.id
		);
		if (existingChannel) {
			dispatch({
				setState: {
					channelsSelected: channelsSelected.filter(
						(channelId) => channelId !== channel.id
					),
				},
			});
		} else {
			dispatch({
				setState: { channelsSelected: [...channelsSelected, channel.id] },
			});
		}
	};
	const renderCountryTabItems = () => {
		if (selectedCountry) {
			// Check if there are states available for the selected country
			if (statesList.length === 0) {
				return (
					<div className="flex items-center justify-center w-full py-8">
						<span className="text-foreground text-sm opacity-70">
							No states available
						</span>
					</div>
				);
			}

			return statesList.map((state) => (
				<SwiperSlide className="!w-fit" key={state.id + state.name}>
					<CountryItem
						country={state}
						type="state"
					/>
				</SwiperSlide>
			));
		}
		return countries.map((country) => (
			<SwiperSlide className="!w-fit" key={country.id + country.name}>
				<CountryItem
					country={country}
					type="country"
				/>
			</SwiperSlide>
		));
	};
	return (
		<div
			className={classNames(
				"rounded-[2rem] h-full overflow-hidden transition-all duration-300 ease-in flex flex-col bg-glass  bg-inner-background",
				{
					"min-w-[0px] w-0 overflow-hidden": sidebarStatus === "closed",
					"w-[600px] min-w-[600px]": sidebarStatus === "semi-opened",
					"w-screen float-end": sidebarStatus === "full",
				}
			)}
		>
			<div className="px-4 py-2.5 flex flex-col h-full overflow-auto no-scrollbar">
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
							"flex cursor-pointer text-icons items-center gap-2 py-4 px-8 bg-card-bg-color bg-glass2 rounded-full hover:text-primary ",
							{ "text-primary": sidebarStatus === "full" }
						)}
					>
						{toggleSidebarIcon}
					</div>
					<ThemeDropdown />
				</div>

				<div className="bg-card-bg-color flex flex-col gap-4 p-4 rounded-4xl mb-4 bg-glass2">
					<PageTabs
						items={state.allPages}
						selectedId={state.selectedPageId}
						onSelect={(id) =>
							dispatch({ setState: { selectedPageId: id } })
						}
						onAddNew={() => { }}
					></PageTabs>

					<Tabs
						className={classNames("", {
							"bg-purple-light": state.diveType === "diving-deeper",
						})}
						selectedTabClassName={classNames("", {
							"bg-purple-main": state.diveType === "diving-deeper",
						})}
						tabClassName={classNames("", {
							"bg-purple-light": state.diveType === "diving-deeper",
						})}
						options={diveModeOptions}
						activeTab={state.diveType}
						applyGlass={false}
						onTabChange={(value) =>
							dispatch({ setState: { diveType: value as DiveType } })
						}
						size="large"
					/>

					<div className="relative mb-4 items-center  rounded-4xl bg-glass2  ">
						<input
							value={state.searchKeyword}
							onChange={(e) =>
								dispatch({
									setState: { searchKeyword: e.target.value },
								})
							}
							type="text"
							placeholder="enter your keyword here"
							className={classNames(
								"w-full text-foreground bg-normal-input-bg-color p-6  rounded-4xl placeholder:text-foreground text-lg",

								{
									"bg-purple-input-bg-color border-purple-main border text-purple-main placeholder:text-purple-main active:border-purple-main":
										state.diveType === "diving-deeper",
									"border-primary border bg-primary/10 text-primary placeholder:text-primary":
										state.diveType === "dive-deeper" &&
										theme === "glass",
								}
							)}
						/>
						<div className="absolute inset-y-0 right-0 flex items-center gap-2 mr-4">
							<div className="flex items-center">
								<button className="text-foreground p-2 cursor-pointer">
									{micIcon}
								</button>
							</div>
							<div className="bg-foreground w-[1px] h-5 -translate-x-full ">
							</div>
							<div className="flex items-center">
								<button className="text-foreground p-2 cursor-pointer">
									{searchIcon}
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-card-bg-color bg-glass2 p-4 rounded-4xl mb-4">
					<Tabs
						options={tabOptions}
						activeTab={state.searchType}
						onTabChange={(value) =>
							dispatch({ setState: { searchType: value as SearchType } })
						}
						size="small"
						className="mb-4"
					/>

					<div className="flex flex-col">
						{state.searchType === "categories" && (
							<>
								<div className="bg-card-bg-color-dark p-7.5 rounded-4xl bg-glass3">
									<div className="">
										<div
											className="flex justify-between items-center  rounded-md cursor-pointer"
											onClick={() =>
												setCountryDropdownOpen(!countryDropdownOpen)
											}
										>
											<span className="text-foreground">
												Countries
											</span>
											<div className="p-1 bg-card-bg-color rounded-full">
												<svg
													width="16"
													height="16"
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
																	getCountryIconPath(selectedCountry.name) as string

																}
																className="object-contain"
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
												<div
													className={classNames(
														"flex no-scrollbar  ",
														{}
													)}
												>
													<SwiperWrapper gap={14}>
														{renderCountryTabItems()}
													</SwiperWrapper>
												</div>
											</div>
										)}
									</div>
								</div>

								{/* United States Section */}
								<div className="bg-card-bg-color-dark p-7.5 rounded-4xl mt-5 bg-glass3 ">
									<div className="">
										<div
											className="flex justify-between items-center  rounded-md cursor-pointer mb-6"
											onClick={() =>
												setStatesDropdownOpen(!statesDropdownOpen)
											}
										>
											<span className="text-foreground">
												United States
											</span>
											<div className="p-1 bg-card-bg-color rounded-full">
												<svg
													width="16"
													height="16"
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
											<div className="">
												<div
													className={classNames(
														"flex gap-7 space-between space-between no-scrollbar",
														{
															"flex-wrap":
																sidebarStatus === "full",
														}
													)}
												>
													<SwiperWrapper gap={14} >
														{contentTypes.map((type, i) => (
															<SwiperSlide className="!w-fit select-none">
																<div
																	key={type.name + i}
																	className="flex flex-col items-center cursor-pointer"
																>
																	<div className="w-16 h-16 rounded-3xl bg-[#0D99FF33] bg-glass2 flex items-center justify-center overflow-hidden py-4 px-3.5">
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
															</SwiperSlide>
														))}
													</SwiperWrapper>
												</div>
											</div>
										)}
									</div>
								</div>
							</>
						)}

						{state.searchType === "website" && (
							<div className="bg-card-bg-color-dark p-7.5 rounded-4xl bg-glass3">
								<div className="flex justify-between items-center mb-4 cursor-pointer">
									<span className="text-foreground font-medium">
										Countries
									</span>
								</div>
								<div
									className={classNames(
										"grid grid-cols-2 gap-4 cursor-pointer",
										{ "grid-cols-4": sidebarStatus === "full" }
									)}
								>
									{[
										{
											name: "CNN",
											logo: "/images/websites/cnn.svg",
											rank: "(1)",
											visitors: "1432",
											articles: "2344",
										},
										{
											name: "AlJazeera",
											logo: "/images/websites/aljazera.svg",
											rank: "(1)",
											visitors: "1432",
											articles: "2344",
										},
										{
											name: "Fox",
											logo: "/images/websites/foxnews.svg",
											rank: "(1)",
											visitors: "1432",
											articles: "2344",
										},
										{
											name: "BBC",
											logo: "/images/websites/bbc.svg",
											rank: "(1)",
											visitors: "1432",
											articles: "2344",
										},
										{
											name: "Geo",
											logo: "/images/websites/geo.svg",
											rank: "(1)",
											visitors: "1432",
											articles: "2344",
										},
										{
											name: "CBS",
											logo: "/images/websites/cbs.svg",
											rank: "(1)",
											visitors: "1432",
											articles: "2344",
										},
									].map((site, index) => (
										<div
											key={index}
											className={classNames(
												"bg-card-bg-color p-4 rounded-4xl flex items-center gap-3.5 bg-glass3 ",
												{ "!bg-black/20": theme === "glass" }
											)}
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
													<span className="text-foreground text-[10px]">
														Overall Rank {site.rank}
													</span>
												</div>
												<div className=" items-center text-xs text-foreground">
													<div className="flex items-center gap-1 ">
														<span>{bookIcon}</span>
														<div></div>
														<span className="text-[10px]">{site.visitors}</span>
													</div>
													<div className="flex items-center gap-1">
														<span>{cameraIcon}</span>
														<div></div>
														<span className="text-[10px]">{site.articles}</span>
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
							<div className="bg-card-bg-color-dark p-7.5 rounded-4xl bg-glass3">
								<div className="flex justify-between items-center mb-4">
									<span className="text-foreground font-medium">
										News Channels
									</span>
								</div>
								<div
									className={classNames("grid grid-cols-2 gap-4", {
										"grid-cols-4": sidebarStatus === "full",
									})}
								>
									{allChannels.map((channel, index) => (
										<div
											key={index}
											className={classNames(
												"bg-card-bg-color p-2.5 rounded-4xl flex items-center gap-3.5 cursor-pointer  bg-glass3",
												{ "!bg-black/20": theme === "glass" }
											)}
											onClick={() => handleChannelSelection(channel)}
										>
											<div className="flex flex-col items-center justify-center overflow-hidden">
												<Image
													className="p-2 bg-inner-background rounded-2xl mb-1"
													src={channel.logo}
													alt={channel.name}
													width={49}
													height={49}
												/>
												<span className="text-foreground font-bold text-[10px]">
													{channel.name}
												</span>
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
							<div className="bg-card-bg-color-dark p-7.5 rounded-4xl bg-glass3">
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
											className="bg-card-bg-color bg-glass px-4 py-2 rounded-full text-sm text-foreground"
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
