'use client'

import React from "react";
import Image from "next/image";
import { useGlobalContext } from "@/contexts/GlobalContext";
import classNames from "classnames";
import { allNewsItems, allVideoItems } from "@/helpers/data";

// Interface for video data
interface VideoData {
   id: number;
   source: string;
   title: string;
   description: string;
   views: string;
   postedTime: string;
   date: string;
   duration: string;
   videoId: string;
   youtubeUrl: string;
   channelLogoUrl: string;
}

// Helper function to get YouTube thumbnail URL from video ID
const getYouTubeThumbnail = (videoId: string) => {
   // Use the high quality thumbnail with a fallback to the default one
   return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

export default function Videos() {
   const [state] = useGlobalContext();
   const { itemsView, sidebarStatus } = state;

   // Define the videos data array with YouTube video IDs

   const filteredVideos = allVideoItems.filter((video) => {
      return video.title.toLowerCase().includes(state.searchKeyword.toLowerCase()) || video.description.toLowerCase().includes(state.searchKeyword.toLowerCase()) || video.source.toLowerCase().includes(state.searchKeyword.toLowerCase())
   })

   return (
      <div className="overflow-auto">
         <div className={classNames(
            "w-full transition-all duration-300",
            {

            }
         )}>
            {filteredVideos.length === 0 ? (
               <div className="flex flex-col items-center justify-center py-20">
                  <div className="text-foreground text-2xl font-semibold mb-2">No Results Found</div>
                  <p className="text-gray-400 text-center max-w-md">
                     We couldn't find any videos matching your search criteria. Try adjusting your filters or search terms.
                  </p>
               </div>
            ) : (
               <div className={classNames(
                  "grid w-full pt-4 gap-4 transition-all duration-300 ",
                  {
                     "grid-cols-4": itemsView === 'grid' && sidebarStatus === "closed",
                     "grid-cols-3": itemsView === 'grid' && sidebarStatus === "semi-opened",
                     "grid-cols-1 space-y-4": itemsView === "list"
                  }
               )}>
                  {filteredVideos.map((video) => (
                     <div
                        key={video.id}
                        className={classNames(
                           "overflow-hidden flex flex-col rounded-3xl transition-all duration-300 w-full", // common classes
                           {
                              // Grid view responsive classes
                              "p-2.5 w-full": itemsView === 'grid',
                              "p-0 w-full mb-4 flex-col": itemsView === 'list'
                           }!
                        )}
                        style={{ background: itemsView === 'grid' ? "var(--card-bg-color)" : "transparent" }}
                     >
                        {itemsView === 'grid' ? (
                           // GRID VIEW
                           <>
                              {/* Video Thumbnail with Duration - Clickable */}
                              <a
                                 href={video.youtubeUrl}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="block relative p-3 h-52  rounded-t-4xl"
                              >
                                 <Image
                                    src={getYouTubeThumbnail(video.videoId)}
                                    alt={video.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    style={{ objectFit: 'cover' }}
                                    className="rounded-t-2xl"
                                    unoptimized
                                    onError={(e) => {
                                       const imgElement = e.currentTarget as HTMLImageElement;
                                       const videoId = video.videoId;
                                       imgElement.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                                    }}
                                 />
                                 {/* Duration Badge */}
                                 <div className="absolute bottom-2 right-2 bg-[#252525] bg-opacity-70 text-white px-1 py-0.5 text-xs rounded">
                                    {video.duration}
                                 </div>
                                 {/* Play Button Overlay */}
                                 {/* <div className="absolute  flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-20 rounded">
                              <div className="w-16 h-16 bg-black bg-opacity-60 rounded-full flex items-center justify-center">
                                 <div style={{ width: 0, height: 0, borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '12px solid white', marginLeft: '2px' }}></div>
                              </div>
                           </div> */}
                              </a>

                              {/* Video Info */}
                              <div className="flex items-start gap-2">
                                 <div className="flex-1 flex-col h-full">
                                    {/* Video Title - Clickable */}
                                    <a
                                       href={video.youtubeUrl}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="block"
                                    >
                                       <h3
                                          className="font-medium py-2  text-foreground text-normal hover:text-blue-500 transition-colors"
                                       >
                                          {video.title}
                                       </h3>
                                    </a>

                                    {/* Channel Name and Stats */}
                                    <div className="flex items-center text-xs gap-1" style={{ color: "var(--card-meta-text)" }}>
                                       <span className="opacity-70">{video.views} views</span>
                                       <span className="opacity-70">.</span>
                                       <span className="opacity-70">{video.postedTime}</span>
                                    </div>
                                 </div>
                              </div>
                           </>
                        ) : (
                           // LIST VIEW
                           <div className="flex w-full  rounded-xl bg-card-bg-color p-3 mx-auto max-w-full">
                              {/* Left Side - Thumbnail */}
                              <div className="relative w-[200px] h-[110px] mr-4 flex-shrink-0">
                                 <a
                                    href={video.youtubeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block relative w-full h-full"
                                 >
                                    <Image
                                       src={getYouTubeThumbnail(video.videoId)}
                                       alt={video.title}
                                       fill
                                       sizes="220px"
                                       style={{ objectFit: 'cover' }}
                                       className="rounded-lg"
                                       unoptimized
                                       onError={(e) => {
                                          const imgElement = e.currentTarget as HTMLImageElement;
                                          const videoId = video.videoId;
                                          imgElement.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                                       }}
                                    />
                                    {/* Duration Badge */}
                                    <div className="absolute bottom-1 right-1 bg-[#252525] bg-opacity-70 text-foreground px-1 py-0.5 text-xs rounded">
                                       {video.duration}
                                    </div>
                                 </a>
                              </div>

                              {/* Right Side - Content */}
                              <div className="flex flex-col flex-1 justify-between">
                                 {/* Top Section - Title */}
                                 <div className="flex justify-between">
                                    <div>

                                       <a
                                          href={video.youtubeUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                       >
                                          <h3 className="font-medium text-foreground text-xl">
                                             {video.title}
                                          </h3>

                                       </a>
                                    </div>
                                    <div className="text-sm">
                                       {video.date}
                                    </div>
                                 </div>
                                 <p className="text-card-description-text text-sm">
                                    {video.description}
                                 </p>

                                 {/* Bottom Section - Channel + Stats */}
                                 <div className="flex items-center">
                                    <div className="flex items-center">
                                       {/* <div className="flex items-center mr-3 bg-red-600 px-2 py-0.5 rounded">
                                    <span className="text-foreground text-xs">{video.source}</span>
                                    
                                 </div> */}
                                       <div className="flex items-center text-xs text-card-date-text">
                                          <span>{video.views} views</span>
                                          <span className="mx-1">•</span>
                                          <span>{video.postedTime}</span>
                                       </div>
                                    </div>
                                    <div className="ml-auto text-gray-300 text-xs">
                                       {/* {video.date} */}
                                    </div>

                                 </div>
                                 <div className="mt-2">
                                    <div className="inline items-center px-2 pb-1 rounded-full border-1 border-foreground">
                                       <span className="text-foreground text-xs">{video.source}</span>

                                    </div>
                                 </div>
                              </div>

                           </div>
                        )}
                     </div>
                  ))}
               </div>
            )}
         </div>
      </div>
   );
}
