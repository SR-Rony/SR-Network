"use client"
import React, { useState } from 'react'
import Container from './container'
import List from './list'
import ListItem from './listItem'
import { MdOutlineSettingsPhone } from "react-icons/md";
import Paragraph from './paragraph';
import { useParams, useRouter } from 'next/navigation'

const Nevbar = () => {
    const [menu,setMenu]=useState(['হোম','সম্পর্কিত','প্যাকেজ','কভারেজ','অফার','বিল পরিশোধ','যোগাযোগ',])
    const [url,seturl]=useState('/about')


    let params = useParams()
    let router = useRouter()

    console.log(params);

    const handleClick =(item)=>{
        
        if(item == 'হোম'){
            router.push('/')
        }else if(item =='সম্পর্কিত'){
            router.push('/about')
        }
        
    }
    


  return (
    <nav className='py-2 fixed top-8 left-0 w-full bg-white shadow-lg z-50'>
        <Container>
            <div className='grid grid-cols-12 items-center'>
                <div className='col-span-3 flex gap-1 items-center text-primary'>
                    <h1 className='font-bold text-3xl'>SR</h1>
                    <span>Network</span>
                </div>
                <div className='col-span-6'>
                    <List className='flex justify-between items-center'>
                        {menu.map((item,index)=>(
                            <ListItem onClick={()=>handleClick(item)} text={item} className={`${url=='/' || url =='about'&&'after:w-full'} cursor-pointer relative after:absolute after:-bottom-2 after:left-0 after:w-0 hover:after:w-full after:h-1 after:bg-primary px-2 after:duration-500`}/>

                        ))}
                    </List>
                </div>
                <div className='col-span-3 flex justify-end'>
                    <div className='flex items-center gap-1 px-4 py-2 text-white bg-primary rounded-full cursor-pointer'>
                        <MdOutlineSettingsPhone/>
                        <Paragraph text='সাপোর্ট'/>
                    </div>
                </div>
            </div>
        </Container>
    </nav>
  )
}

export default Nevbar