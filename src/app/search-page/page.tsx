"use client"
import Header from "@/components/Header";
import SearchSidebar from "@/components/SearchSidebar";
import Videos from "@/components/Videos";
import { useGlobalContext } from "@/contexts/GlobalContext";
import classNames from "classnames";
import React from "react";

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
         <div className="w-full h-full flex  flex-col gap-4 rounded-4xl p-2.5 bg-inner-background overflow-auto no-scrollbar">
            <Header />
            <div className="w-full max-w-[2500px]">
               <Videos />
            </div>
         </div>
         <SearchSidebar />
      </div>
   );
}
