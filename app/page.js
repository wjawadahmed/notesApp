"use client"

import Main from '@/Components/Main'
import Nav from '@/Components/Nav'
import React from 'react'

const page = () => {
  return (
   <>
   <main>
    <div className='bg-slate-100 p-4'>
    <Nav/>
    <Main/>
    </div>
   </main>
   </>
  )
}

export default page