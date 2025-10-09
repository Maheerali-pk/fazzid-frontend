import React from "react";
import NewsCards from "@/components/NewsCards";
import Header from "@/components/Header";

export default function page() {
   return (
      <div className="h-full flex  flex-col gap-4 rounded-4xl p-2.5 bg-inner-background">
         <Header />
         <div className="overflow-auto no-scrollbar">
            <NewsCards />
         </div>
      </div>
   );
}
