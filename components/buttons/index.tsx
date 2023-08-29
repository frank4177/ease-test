import React from 'react'

interface IButtonProps {
  color?: string
  title?: string
}

const Button = (props: IButtonProps) => {
  const {title} = props
  return (
    <button className='flex flex-row items-center h-[45px] max-w-[160px] w-full p-2 border-[1px] border-[white] justify-center'>
        <p>title</p>
    </button>
  )
}

export default Button