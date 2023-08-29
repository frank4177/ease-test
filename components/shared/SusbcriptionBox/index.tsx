import Button from '@/components/buttons'
import React from 'react'

const SubscriptionBox = () => {
  return (
    <>
    <form className='flex flex-row items-center h-[45px] justify-between gap-5 max-w-[400px] w-full '>
        <input type="text" placeholder='Enter your email' className='h-full'/>

        <button className='flex flex-row items-center h-[45px] max-w-[160px] w-full p-2  justify-center bg-[#310E93]'>
            <p>Join our waitlist</p>
        </button>
    </form>
    </>
  )
}

export default SubscriptionBox