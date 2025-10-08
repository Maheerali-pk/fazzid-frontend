import React from 'react'
import NewsCards from '@/components/NewsCards'
import Header from '@/components/header'

export default function page() {
  return (
    <div className='m-[10px] rounded-4xl p-2.5' style={{ background: "var(--inner-background)" }}>
      <Header />
      <NewsCards />
    </div>
  )
}
