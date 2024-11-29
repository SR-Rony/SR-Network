import React from 'react'
import Paragraph from './paragraph'
import Container from './container'
import { MdOutlineSettingsPhone } from "react-icons/md";


const Header = () => {
  return (
    <header className='py-1 bg-primary fixed top-0 left-0 w-full text-white z-50'>
        <Container className='flex justify-start md:justify-end gap-4'>
            <Paragraph text='srnetworks@gmail.com'/>
            <div className='flex gap-1 items-center'>
                <MdOutlineSettingsPhone/>
                <Paragraph text='01743493707'/>
            </div>
        </Container>
    </header>
  )
}

export default Header