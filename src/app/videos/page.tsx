"use client"
import Header from "@/components/Header";
import SearchSidebar from "@/components/SearchSidebar";
import Videos from "@/components/Videos";
import { useGlobalContext } from "@/contexts/GlobalContext";
import classNames from "classnames";
import React from "react";

export default function page() {
   const [state] = useGlobalContext()
   const { sidebarStatus } = state
   return (
      <div
         className={classNames("flex p-2.5 h-screen overflow-auto", {
            "gap-0": sidebarStatus === "closed" || sidebarStatus === "full",
            "gap-4": sidebarStatus === "semi-opened",
            // "gap-0": sidebarStatus === "closed" || sidebarStatus === "full",
            // "gap-4": sidebarStatus === "semi-opened",
            // "gap-0": sidebarStatus === "full",
         })}
      >
         <div className={classNames("h-full flex  overflow-auto flex-col gap-4 rounded-4xl  bg-inner-background transition-all duration-300 ease-in", {
            "w-0 overflow-hidden p-0": sidebarStatus === "full",
            "w-full p-2.5": sidebarStatus === "closed" || sidebarStatus === "semi-opened",
         })}>
            <Header />
            <div className="w-full max-w-[2500px] overflow-auto">
               <Videos />
            </div>
         </div>
         <SearchSidebar />
      </div >
   )
}
