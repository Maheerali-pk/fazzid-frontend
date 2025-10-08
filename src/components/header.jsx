import React from 'react'
import Image from 'next/image'
export default function header() {
  return (
    <div>
        {/* <h1>Header</h1> */}
        <div className="flex justify-between items-center">
            <div>
                <Image className='w-23 h-14' src="/images/fazit_logo.png" alt="Logo" width={100} height={100} />
            </div>
            <div className=''>
    <div className='flex py-4 px-9 rounded-4xl gap-x-3' style={{ background: "var(--card-bg-color)" }}>
        <Image src="/listIcon.svg" alt="list" width={15} height={15} className='w-6 h-6'/>
        <Image src="/windowIcon.svg" alt="list" width={15} height={15} className='w-6 h-6'/>
        <Image src="/spreadIcon.svg" alt="list" width={15} height={15} className='w-6 h-6'/>
    </div>
    
            </div>

        </div>
    </div>
  )
}
