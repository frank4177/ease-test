import Button from '@/components/buttons'
import Logo from '@/components/shared/Logo'
import React from 'react'

const Navbar = () => {
  return (
    <section className='bg-darkblueBg h-[80px] flex-col'>
        <div className='flex flex-row justify-between h-full items-center px-9 self-center max-w-[12000px] w-full'>
            <div className='flex flex-row items-center gap-5'>
            <Logo/>

            <ul className='flex flex-row items-center gap-3'>
                <li>
                    Products
                </li>
                <li>
                    Solutions
                </li>
                <li>
                    Resources
                </li>
                <li>
                    Company
                </li>
            </ul>
            </div>
            
           <Button title="Contact Us"/>

        </div>
    </section>
  )
}

export default Navbar