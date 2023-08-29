
import React from 'react'
import logo from "../../../public/assets/images/logo.png"
import Image from 'next/image'

const Logo = () => {
  return (
    <>
    <div>
        <Image src={logo} height={100} width={60} alt='logo'/>
    </div>
    </>
  )
}

export default Logo