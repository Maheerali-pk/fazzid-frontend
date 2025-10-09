import Header from '@/components/Header'
import Videos from '@/components/Videos'
import React from 'react'

export default function page() {
  return (
    <div className="w-full h-full flex  flex-col gap-4 rounded-4xl p-2.5 bg-inner-background overflow-auto no-scrollbar">
        <Header/>
        <div className="w-full max-w-[2500px]">
            <Videos/>
        </div>
    </div>
  )
}
