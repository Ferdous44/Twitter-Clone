import Image from 'next/image'
import React from 'react'

const TrendingList = () => {
    return (
        <div className='mt-4 flex items-center'>
            <div>
                <p className='text-gray-500 text-[14px] mb-1'>Entertainment Â· LIVE</p>
                <h1 className='font-medium pr-2'>Why Messi is not in twitter</h1>
            </div>

            <div>
                <Image className='rounded-[20px]' src="/trending-1.jfif" height="120" width="120" />
            </div>
        </div>
    )
}

export default TrendingList