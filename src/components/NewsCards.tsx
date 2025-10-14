'use client'

import React from "react";
import Image from "next/image";
import { useGlobalContext } from "@/contexts/GlobalContext";
import classNames from "classnames";
import { truncateText } from "@/helpers/utils";
import { allNewsItems } from "@/helpers/data";
import { webIcon } from "@/helpers/icons";

export default function NewsCards() {
   const [state] = useGlobalContext()
   const { itemsView, sidebarStatus } = state
   const filteredNewsItems = allNewsItems.filter((news) => {
      return news.title.toLowerCase().includes(state.searchKeyword.toLowerCase()) || news.description.toLowerCase().includes(state.searchKeyword.toLowerCase()) || news.categories.some((category) => category.toLowerCase().includes(state.searchKeyword.toLowerCase())) || news.source.toLowerCase().includes(state.searchKeyword.toLowerCase())
   })


   return (
      <div className="min-w-full">
         {filteredNewsItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
               <div className="text-foreground text-2xl font-semibold mb-2">No Results Found</div>
               <p className="text-gray-400 text-center max-w-md">
                  We couldn't find any news articles matching your search criteria. Try adjusting your filters or search terms.
               </p>
            </div>
         ) : (
            <div className={classNames("grid  gap-4 min-w-full", {
               "grid-cols-3": itemsView === 'grid' && sidebarStatus === "closed",
               "grid-cols-2": itemsView === 'grid' && sidebarStatus === "semi-opened",
               "grid-cols-1": itemsView === 'list'
            })}>
               {filteredNewsItems.map((news) => (
                  <div
                     key={news.id + news.title}
                     className={classNames(`rounded-4xl bg-glass overflow-hidden p-4 h-full w-full bg-main-card-bg-color`, {

                        "p-4": itemsView === 'grid',
                        "p-2": itemsView === 'list'
                     })}
                  >
                     {/* Card Header */}
                     <div className={classNames("flex justify-between items-center font-sf", {
                        "mb-3": itemsView === 'grid',
                        "mb-2": itemsView === 'list'
                     })}>
                        <div
                           className="text-sm flex items-center font-sf gap-1 font-normal"
                           style={{ color: "var(--card-meta-text)" }}
                        >
                           <span className="text-card-meta-text">
                              {webIcon}
                           </span>{" "}
                           {news.source + " > "} {news.categories.join(" > ")}
                        </div>
                        <div className="text-card-date-text opacity-70 text-xs font-sf">
                           {news.date}
                        </div>
                     </div>

                     {/* Card Content */}
                     <div className={classNames("flex w-full", {
                        "pt-4 h-full": itemsView === 'grid',
                        "pt-2": itemsView === 'list'
                     })}>
                        {/* Image Column */}
                        <div className={classNames("relative mr-5", {
                           "min-w-[10rem] h-[calc(100%-2rem)]": itemsView === 'grid',
                           "min-w-[10rem] min-h-[5rem]": itemsView === 'list'
                        })}>
                           <Image
                              src={news.imageUrl}
                              alt={news.title}
                              layout="fill"
                              objectFit="cover"
                              className="rounded"
                           />
                        </div>

                        {/* Content Column */}
                        <div className="flex flex-col flex-1">
                           {/* Title Row */}
                           <h3
                              className={classNames("font-medium mb-2 leading-tight text-card-title-text ", {
                                 "text-22px": itemsView === 'grid',
                                 "text-2xl": itemsView === 'list'
                              })}>

                              {news.title}
                           </h3>

                           {/* Description Row */}
                           <p
                              className="text-base text-card-description-text"
                           >
                              {truncateText(news.description, itemsView === 'grid' ? 150 : 200)}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         )}
      </div >
   );
}
