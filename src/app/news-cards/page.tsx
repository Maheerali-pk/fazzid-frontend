"use client"
import React from "react";
import NewsCards from "@/components/NewsCards";
import Header from "@/components/Header";
import SearchSidebar from "@/components/SearchSidebar";
import classNames from "classnames";
import { useGlobalContext } from "@/contexts/GlobalContext";

export default function page() {
   const [state] = useGlobalContext()
   const { isSidebarOpen } = state
   return (
      <div
         className={classNames("flex p-2.5 h-screen overflow-auto", {
            "gap-0": !isSidebarOpen,
            "gap-4": isSidebarOpen,
         })}
      >
         <div className="h-full flex  overflow-auto flex-col gap-4 rounded-4xl p-2.5 bg-inner-background">
            <Header />
            <div className="overflow-auto no-scrollbar">
               <NewsCards />
            </div>
         </div>
         <SearchSidebar />
      </div>
   );
}
