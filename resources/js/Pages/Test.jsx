import { Head } from '@inertiajs/react'
import React from 'react'

function Test() {
  return (
    <>
    <Head title='Welcome' />
      <div className='flex min-h-screen justify-center items-center bg-gradient-to-r from-cyan-100 to-blue-600'>
        <h1 className='text-4xl text-blue-600'>Logatama</h1>
      </div>
    </>
  )
}

export default Test