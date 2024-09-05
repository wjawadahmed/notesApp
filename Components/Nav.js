"use client"
import { RiMenu5Line } from '@remixicon/react'
import React from 'react'

const Nav = () => {
  return (
    <>
    <div className='  nav flex bg-zinc-800 text-white justify-between  pl-3 pr-3 w-full'>
      <div className='menu flex justify-center align-center'>
        <RiMenu5Line
       style={{ marginTop: '20px',marginLeft:"10px" }}
        />

      </div>
    <div className='flex gap-x-4  p-5  text-whiteb cursor-pointer'>
      <h1>Home</h1>
      <h1>About</h1>
      <h1>Contact Us</h1>
      <h1>Books</h1>
    </div>
    </div>
    </>
  )
}

export default Nav