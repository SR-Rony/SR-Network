import React from 'react'
import Container from './container'
import Heading from './heading'
import { RiHomeWifiFill } from "react-icons/ri";
import { MdBusinessCenter } from "react-icons/md";
import { FaVideo } from "react-icons/fa6";
import Paragraph from './paragraph';

const Services = () => {
  return (
    <section className='my-16'>
        <Container>
            <div className='text-center'>
                <Heading className='text-5xl mb-10 border-b-2 border-primary pb-3 inline-block' text='আমাদের সেবা'/>
            </div>
            <div className='grid grid-cols-12 gap-5 '>
                <div className='col-span-4 p-5 text-center ring ring-offset-cyan-500 rounded hover:ring-primary duration-100'>
                    <RiHomeWifiFill className='text-5xl mx-auto'/>
                    <Heading className='text-2xl font-bold mt-5 mb-3' text='হোম ইন্টারনেট'/>
                    <Paragraph className='text-base' text='আমাদের উচ্চগতির কানেক্টিভিটি দিয়ে আপনার সর্বোচ্চ ইন্টারনেট এক্সপেরিয়েন্স উপভোগ করুন'/>
                </div>
                <div className='col-span-4 p-5 text-center ring ring-offset-cyan-500 rounded hover:ring-primary duration-100'>
                    <MdBusinessCenter className='text-5xl mx-auto'/>
                    <Heading className='text-2xl font-bold mt-5 mb-3' text='কর্পোরেট ইন্টারনেট'/>
                    <Paragraph className='text-base' text='আমাদের কর্পোরেট ইন্টারনেটের মাধ্যমে আপনার ব্যবসা বিস্তৃত করুন। উচ্চগতি, সাইবার নিরাপত্তা, এবং নির্ভরতাই আমাদের দৃঢ় লক্ষ্য'/>
                </div>
                <div className='col-span-4 p-5 text-center ring ring-offset-cyan-500 rounded hover:ring-primary duration-100'>
                    <FaVideo className='text-5xl mx-auto'/>
                    <Heading className='text-2xl font-bold mt-5 mb-3' text='সিসিটিভি সিস্টেম'/>
                    <Paragraph className='text-base' text='আপনার বাসা, অফিস, গ্যারেজ অথবা যে কোন জায়গার জন্য আমাদের উন্নত প্রযুক্তির সিসিটিভি সমাধান'/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Services