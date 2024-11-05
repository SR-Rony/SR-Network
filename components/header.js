import React from 'react'
import Paragraph from './paragraph'
import Container from './container'

const Header = () => {
  return (
    <header className='py-1 bg-primary fixed top-0 left-0 w-full'>
        <Container className='flex justify-start md:justify-end'>
            <Paragraph className='text-white' text='srnetworks@gmail.com'/>
        </Container>
    </header>
  )
}

export default Header