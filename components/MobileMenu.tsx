import React from 'react'

interface MobileMenuInterface {
    visible? : boolean
}

const MobileMenu:React.FC<MobileMenuInterface> = ({ visible }) => {

    if (!visible) {
        return null
    }

  return (
    <div className='w-48 bg-black absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex'>
        <div className='flex flex-col gap-4'>
            <div className='px-3 text-sm text-center text-white hover:underline'>Home</div>
            <div className='px-3 text-sm text-center text-white hover:underline'>Series</div>
            <div className='px-3 text-sm text-center text-white hover:underline'>Films</div>
            <div className='px-3 text-sm text-center text-white hover:underline'>New & Popular</div>
            <div className='px-3 text-sm text-center text-white hover:underline'>My List</div>
            <div className='px-3 text-sm text-center text-white hover:underline'>Browse by language</div>
        </div>
    </div>
  )
}

export default MobileMenu