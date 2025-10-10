'use client'

import React from "react";
import Image from "next/image";
import { useGlobalContext } from "@/contexts/GlobalContext";
import classNames from "classnames";
import { truncateText } from "@/helpers/utils";

export default function NewsCards() {
   const [state] = useGlobalContext()
   const { itemsView, isSidebarOpen } = state
   // Define the news data array
   const newsData = [
      {
         id: 1,
         source: "www.techcrunch.com",
         categories: ["technology", "ai"],
         date: "Oct, 8, 2025",
         title: "AI Breakthrough: New Model Achieves Human-Level Understanding",
         description:
            "Researchers have unveiled a groundbreaking AI system that demonstrates unprecedented comprehension abilities.",
         imageUrl: "https://picsum.photos/seed/tech1/400/300",
      },
      {
         id: 2,
         source: "www.bbc.com",
         categories: ["environment", "climate"],
         date: "Oct, 9, 2025",
         title: "Global Leaders Commit to Net-Zero Emissions by 2040",
         description:
            "In a historic summit, world leaders from over 150 countries have pledged ambitious climate action plans. The comprehensive agreement includes massive investments in renewable energy, carbon capture technology, and sustainable infrastructure development across all continents.",
         imageUrl: "https://picsum.photos/seed/climate2/400/300",
      },
      {
         id: 3,
         source: "www.forbes.com",
         categories: ["business", "finance"],
         date: "Oct, 7, 2025",
         title: "Stock Markets Hit Record Highs",
         description:
            "Markets surge on positive economic indicators and strong corporate earnings reports.",
         imageUrl: "https://picsum.photos/seed/finance3/400/300",
      },
      {
         id: 4,
         source: "www.espn.com",
         categories: ["sports", "football"],
         date: "Oct, 10, 2025",
         title: "Underdog Team Wins Championship in Stunning Upset",
         description:
            "In what many are calling the greatest sports story of the decade, a team that was predicted to finish last in their division has won the championship title. The victory came after an intense final match that went into overtime, with the winning goal scored in the last seconds of play. Fans around the world celebrated this incredible achievement.",
         imageUrl: "https://picsum.photos/seed/sports4/400/300",
      },
      {
         id: 5,
         source: "www.nature.com",
         categories: ["science", "medicine"],
         date: "Oct, 6, 2025",
         title: "New Cancer Treatment Shows Promising Results in Clinical Trials",
         description:
            "Medical researchers announce breakthrough therapy with 85% success rate in early trials.",
         imageUrl: "https://picsum.photos/seed/medical5/400/300",
      },
      {
         id: 6,
         source: "www.space.com",
         categories: ["space", "exploration"],
         date: "Oct, 5, 2025",
         title: "Mars Colony Establishes First Permanent Settlement",
         description:
            "SpaceX and NASA collaborate to create humanity's first sustainable off-world habitat. The colony, named New Horizon, now houses 50 astronauts and scientists who will conduct long-term research on the Red Planet. Advanced life support systems and local resource utilization technologies enable the settlement to be largely self-sufficient.",
         imageUrl: "https://picsum.photos/seed/space6/400/300",
      },
      {
         id: 7,
         source: "www.foodnetwork.com",
         categories: ["lifestyle", "food"],
         date: "Oct, 4, 2025",
         title: "Plant-Based Cuisine Revolution Transforms Restaurant Industry",
         description:
            "The culinary world is experiencing a major shift as innovative chefs develop plant-based dishes that rival traditional cuisine in taste and presentation. Major restaurant chains are expanding their vegan offerings, while new plant-based eateries are opening at record rates. Food critics praise the creativity and sustainability of this movement, which combines cutting-edge food science with traditional cooking techniques to create extraordinary dining experiences. Consumer demand continues to drive this transformation across the global food industry.",
         imageUrl: "https://picsum.photos/seed/food7/400/300",
      },
      {
         id: 8,
         source: "www.theguardian.com",
         categories: ["politics", "international"],
         date: "Oct, 3, 2025",
         title: "Historic Peace Agreement Signed in Middle East",
         description:
            "Diplomatic breakthrough brings hope for lasting stability in the region after decades of conflict.",
         imageUrl: "https://picsum.photos/seed/peace8/400/300",
      },
      {
         id: 9,
         source: "www.wired.com",
         categories: ["technology", "gadgets"],
         date: "Oct, 2, 2025",
         title: "Revolutionary Smartphone Battery Lasts for One Week",
         description:
            "Tech company unveils new battery technology that could change mobile device usage forever. The innovation uses advanced graphene-based materials and smart power management to extend battery life dramatically.",
         imageUrl: "https://picsum.photos/seed/gadget9/400/300",
      },
      {
         id: 10,
         source: "www.rollingstone.com",
         categories: ["entertainment", "music"],
         date: "Oct, 1, 2025",
         title: "Legendary Band Announces Surprise Reunion Tour",
         description:
            "Fans rejoice as iconic rock group reunites after 20-year hiatus.",
         imageUrl: "https://picsum.photos/seed/music10/400/300",
      },
      {
         id: 11,
         source: "www.nationalgeographic.com",
         categories: ["nature", "wildlife"],
         date: "Sep, 30, 2025",
         title: "Rare Species Discovered in Amazon Rainforest",
         description:
            "Scientists discover new primate species during expedition deep in the Amazon. The newly identified species, which has been named the Golden Cascade Monkey, displays unique social behaviors and communication patterns. Researchers emphasize the importance of protecting this pristine habitat to preserve biodiversity.",
         imageUrl: "https://picsum.photos/seed/nature11/400/300",
      },
      {
         id: 12,
         source: "www.cnn.com",
         categories: ["education", "innovation"],
         date: "Sep, 29, 2025",
         title: "Virtual Reality Transforms Classroom Learning",
         description:
            "Educational institutions worldwide are adopting immersive VR technology to enhance student engagement and understanding. Studies show significant improvements in retention and comprehension.",
         imageUrl: "https://picsum.photos/seed/education12/400/300",
      },
      {
         id: 13,
         source: "www.autoblog.com",
         categories: ["automotive", "electric-vehicles"],
         date: "Sep, 28, 2025",
         title: "Electric Vehicle Sales Surpass Traditional Cars for First Time",
         description:
            "Historic milestone reached as EVs dominate the automotive market. Major manufacturers report record sales figures as charging infrastructure expands and battery costs decrease. Industry analysts predict this trend will accelerate in coming years, fundamentally transforming transportation worldwide.",
         imageUrl: "https://picsum.photos/seed/auto13/400/300",
      },
      {
         id: 14,
         source: "www.architecturaldigest.com",
         categories: ["design", "architecture"],
         date: "Sep, 27, 2025",
         title: "Sustainable Skyscraper Generates More Energy Than It Consumes",
         description:
            "Innovative building design sets new standard for urban sustainability with integrated solar panels and wind turbines.",
         imageUrl: "https://picsum.photos/seed/arch14/400/300",
      },
      {
         id: 15,
         source: "www.economist.com",
         categories: ["economics", "global-markets"],
         date: "Sep, 26, 2025",
         title: "Cryptocurrency Becomes Legal Tender in Three More Nations",
         description:
            "Digital currencies gain mainstream acceptance as governments embrace blockchain technology for financial systems.",
         imageUrl: "https://picsum.photos/seed/crypto15/400/300",
      },
   ];

   return (
      <div className="">
         <div className={classNames("grid  gap-4", {
            "grid-cols-3": itemsView === 'grid' && !isSidebarOpen,
            "grid-cols-2": itemsView === 'grid' && isSidebarOpen,
            "grid-cols-1": itemsView === 'list'
         })}>
            {newsData.map((news) => (
               <div
                  key={news.id}
                  className={classNames(`rounded-4xl overflow-hidden p-4 h-full`, {
                     "p-4": itemsView === 'grid',
                     "p-2": itemsView === 'list'
                  })}
                  style={{ background: "var(--card-bg-color)" }}
               >
                  {/* Card Header */}
                  <div className={classNames("flex justify-between items-center font-sf", {
                     "mb-3": itemsView === 'grid',
                     "mb-2": itemsView === 'list'
                  })}>
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
      </div >
   );
}
