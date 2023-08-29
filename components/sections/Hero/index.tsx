"use client"

import React from 'react'
import { HeroText1 } from './index.styles'
import SubscriptionBox from '@/components/shared/SusbcriptionBox'

const Hero = () => {
  return (
    <section className='h-[400px] bg-darkblueBg '>
        <div>
            <div className='flex flex-col items-center gap-5'>
                <HeroText1>Open Payments at the <br/> Speed of Light</HeroText1>
                <p>Unlock Groundbreaking New Payment Experiences</p>
                <SubscriptionBox/>
            </div>
        </div>
    </section>
  )
}

export default Hero