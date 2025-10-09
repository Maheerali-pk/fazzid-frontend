'use client'

import React from "react";
import Image from "next/image";
import { useGlobalContext } from "@/contexts/GlobalContext";

export default function NewsCards() {
   const [state] = useGlobalContext()
   const { itemsView } = state
   // Define the news data array
   const newsData = [
      {
         id: 1,
         source: "www.nation.com.pk",
         categories: ["politics", "pakistan-russia"],
         date: "May, 15, 2023",
         title: "Pakistan, Russia agree to establish new steel mill in Karachi",
         description:
            "Pakistan and Russia on Tuesday agreed to establish new steel mill in Karachi. In a significant meeting, Denis United Nations Nazarouf, a representative of Russia, met with Haroon Akhtar Khan, Special Assistant to...",
         imageUrl: "/images/cardImg.png",
      },
      {
         id: 2,
         source: "www.nation.com.pk",
         categories: ["politics", "pakistan-russia"],
         date: "May, 15, 2023",
         title: "Pakistan, Russia agree to establish new steel mill in Karachi",
         description:
            "Pakistan and Russia on Tuesday agreed to establish new steel mill in Karachi. In a significant meeting, Denis United Nations Nazarouf, a representative of Russia, met with Haroon Akhtar Khan, Special Assistant to...",
         imageUrl: "/images/cardImg.png",
      },
      {
         id: 3,
         source: "www.nation.com.pk",
         categories: ["politics", "pakistan-russia"],
         date: "May, 15, 2023",
         title: "Pakistan, Russia agree to establish new steel mill in Karachi",
         description:
            "Pakistan and Russia on Tuesday agreed to establish new steel mill in Karachi. In a significant meeting, Denis United Nations Nazarouf, a representative of Russia, met with Haroon Akhtar Khan, Special Assistant to...",
         imageUrl: "/images/cardImg.png",
      },
      {
         id: 4,
         source: "www.nation.com.pk",
         categories: ["politics", "pakistan-russia"],
         date: "May, 15, 2023",
         title: "Pakistan, Russia agree to establish new steel mill in Karachi",
         description:
            "Pakistan and Russia on Tuesday agreed to establish new steel mill in Karachi. In a significant meeting, Denis United Nations Nazarouf, a representative of Russia, met with Haroon Akhtar Khan, Special Assistant to...",
         imageUrl: "/images/cardImg.png",
      },
      {
         id: 5,
         source: "www.nation.com.pk",
         categories: ["politics", "pakistan-russia"],
         date: "May, 15, 2023",
         title: "Pakistan, Russia agree to establish new steel mill in Karachi",
         description:
            "Pakistan and Russia on Tuesday agreed to establish new steel mill in Karachi. In a significant meeting, Denis United Nations Nazarouf, a representative of Russia, met with Haroon Akhtar Khan, Special Assistant to...",
         imageUrl: "/images/cardImg.png",
      },
      {
         id: 6,
         source: "www.nation.com.pk",
         categories: ["politics", "pakistan-russia"],
         date: "May, 15, 2023",
         title: "Pakistan, Russia agree to establish new steel mill in Karachi",
         description:
            "Pakistan and Russia on Tuesday agreed to establish new steel mill in Karachi. In a significant meeting, Denis United Nations Nazarouf, a representative of Russia, met with Haroon Akhtar Khan, Special Assistant to...",
         imageUrl: "/images/cardImg.png",
      },
      {
         id: 7,
         source: "www.nation.com.pk",
         categories: ["politics", "pakistan-russia"],
         date: "May, 15, 2023",
         title: "Pakistan, Russia agree to establish new steel mill in Karachi",
         description:
            "Pakistan and Russia on Tuesday agreed to establish new steel mill in Karachi. In a significant meeting, Denis United Nations Nazarouf, a representative of Russia, met with Haroon Akhtar Khan, Special Assistant to...",
         imageUrl: "/images/cardImg.png",
      },
      {
         id: 8,
         source: "www.nation.com.pk",
         categories: ["politics", "pakistan-russia"],
         date: "May, 15, 2023",
         title: "Pakistan, Russia agree to establish new steel mill in Karachi",
         description:
            "Pakistan and Russia on Tuesday agreed to establish new steel mill in Karachi. In a significant meeting, Denis United Nations Nazarouf, a representative of Russia, met with Haroon Akhtar Khan, Special Assistant to...",
         imageUrl: "/images/cardImg.png",
      },
      {
         id: 9,
         source: "www.nation.com.pk",
         categories: ["politics", "pakistan-russia"],
         date: "May, 15, 2023",
         title: "Pakistan, Russia agree to establish new steel mill in Karachi",
         description:
            "Pakistan and Russia on Tuesday agreed to establish new steel mill in Karachi. In a significant meeting, Denis United Nations Nazarouf, a representative of Russia, met with Haroon Akhtar Khan, Special Assistant to...",
         imageUrl: "/images/cardImg.png",
      },
      {
         id: 9,
         source: "www.nation.com.pk",
         categories: ["politics", "pakistan-russia"],
         date: "May, 15, 2023",
         title: "Pakistan, Russia agree to establish new steel mill in Karachi",
         description:
            "Pakistan and Russia on Tuesday agreed to establish new steel mill in Karachi. In a significant meeting, Denis United Nations Nazarouf, a representative of Russia, met with Haroon Akhtar Khan, Special Assistant to...",
         imageUrl: "/images/cardImg.png",
      },
      {
         id: 9,
         source: "www.nation.com.pk",
         categories: ["politics", "pakistan-russia"],
         date: "May, 15, 2023",
         title: "Pakistan, Russia agree to establish new steel mill in Karachi",
         description:
            "Pakistan and Russia on Tuesday agreed to establish new steel mill in Karachi. In a significant meeting, Denis United Nations Nazarouf, a representative of Russia, met with Haroon Akhtar Khan, Special Assistant to...",
         imageUrl: "/images/cardImg.png",
      },
      {
         id: 9,
         source: "www.nation.com.pk",
         categories: ["politics", "pakistan-russia"],
         date: "May, 15, 2023",
         title: "Pakistan, Russia agree to establish new steel mill in Karachi",
         description:
            "Pakistan and Russia on Tuesday agreed to establish new steel mill in Karachi. In a significant meeting, Denis United Nations Nazarouf, a representative of Russia, met with Haroon Akhtar Khan, Special Assistant to...",
         imageUrl: "/images/cardImg.png",
      },
      {
         id: 9,
         source: "www.nation.com.pk",
         categories: ["politics", "pakistan-russia"],
         date: "May, 15, 2023",
         title: "Pakistan, Russia agree to establish new steel mill in Karachi",
         description:
            "Pakistan and Russia on Tuesday agreed to establish new steel mill in Karachi. In a significant meeting, Denis United Nations Nazarouf, a representative of Russia, met with Haroon Akhtar Khan, Special Assistant to...",
         imageUrl: "/images/cardImg.png",
      },
      {
         id: 9,
         source: "www.nation.com.pk",
         categories: ["politics", "pakistan-russia"],
         date: "May, 15, 2023",
         title: "Pakistan, Russia agree to establish new steel mill in Karachi",
         description:
            "Pakistan and Russia on Tuesday agreed to establish new steel mill in Karachi. In a significant meeting, Denis United Nations Nazarouf, a representative of Russia, met with Haroon Akhtar Khan, Special Assistant to...",
         imageUrl: "/images/cardImg.png",
      },
      {
         id: 9,
         source: "www.nation.com.pk",
         categories: ["politics", "pakistan-russia"],
         date: "May, 15, 2023",
         title: "Pakistan, Russia agree to establish new steel mill in Karachi",
         description:
            "Pakistan and Russia on Tuesday agreed to establish new steel mill in Karachi. In a significant meeting, Denis United Nations Nazarouf, a representative of Russia, met with Haroon Akhtar Khan, Special Assistant to...",
         imageUrl: "/images/cardImg.png",
      },
   ];

   return (
      <div className="">
         <div className={`flex flex-wrap gap-4 ${itemsView === 'grid' ? 'justify-between' : 'flex-col'}`}>
            {newsData.map((news) => (
               <div
                  key={news.id}
                  className={`rounded-4xl overflow-hidden p-4 ${itemsView === 'grid'
                     ? 'w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-16px)]'
                     : 'w-full'
                     }`}
                  style={{ background: "var(--card-bg-color)" }}
               >
                  {/* Card Header */}
                  <div className="flex justify-between items-center mb-3 font-sf">
                     <div
                        className="opacity-70 text-sm flex items-center font-sf gap-1 font-normal"
                        style={{ color: "var(--card-meta-text)" }}
                     >
                        <span>
                           <Image
                              className="w-3 h-3"
                              src="/webIcon.svg"
                              width={0}
                              height={0}
                              alt="web"
                           />
                        </span>{" "}
                        {news.source + " > "} {news.categories.join(" > ")}
                     </div>
                     <div className="text-white opacity-70 text-xs font-sf">
                        {news.date}
                     </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex w-full pt-4">
                     {/* Image Column */}
                     <div className={`relative mr-5 ${itemsView === 'grid' ? 'min-w-[150px]' : 'min-w-[200px]'}`}>
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
                           className={`font-medium mb-2 leading-tight text-card-title-text ${itemsView === 'grid' ? 'text-[22px]' : 'text-[24px]'
                              }`}
                        //  style={{ color: 'var(--card-title-text)' }}
                        >
                           {news.title}
                        </h3>

                        {/* Description Row */}
                        <p
                           className={`opacity-90 ${itemsView === 'grid' ? 'text-[16px]' : 'text-[18px]'}`}
                           style={{ color: "var(--card-desc-text)" }}
                        >
                           {news.description}
                        </p>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}
