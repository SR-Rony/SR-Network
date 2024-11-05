import React from 'react'
import Container from './container'

const Nevbar = () => {
  return (
    <nav className='py-2 fixed top-8 left-0 w-full bg-white shadow-lg'>
        <Container>
            <div className='grid grid-cols-12'>
                <div className='col-span-3 flex gap-1 items-center text-primary'>
                    <h1 className='font-bold text-3xl'>SR</h1>
                    <span>Network</span>
                </div>
                <div className='col-span-6'></div>
                <div className='col-span-3'></div>
            </div>
        </Container>
    </nav>
  )
}

export default Nevbar