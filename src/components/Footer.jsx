import React from 'react'
import Github from '../svgs/Github'
import Twitter from '../svgs/Twitter'
import Discord from '../svgs/Discord'

const Footer = () => {
  return (
    <>
    <div className="mt-7 bg-blackStandard py-2 text-white  mx-auto px-4 flex justify-between items-center font-poppins sm:px-8">
            <div className='text-sm '>
            Made with 🤍 by PARAM 
            </div>
            <div className='flex gap-3'>
            <a href="https://github.com/SAXENA-PARAM"><Github></Github></a>
                <Twitter></Twitter>
                <Discord></Discord>
            </div>
    </div>
        
    </>
  )
}

export default Footer