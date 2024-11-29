"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from '@/public/banner.jpg'
import banner1 from '@/public/banner1.jpg'
import banner2 from '@/public/banner2.jpg'
import banner3 from '@/public/banner3.jpg'
import banner4 from '@/public/banner4.jpg'
import { useState } from "react";
import Image from "next/image";
const banerImage = [banner,banner1,banner2,banner3,banner4,]

const Banner = () => {
  let [banner, setBanner] = useState(banerImage);
  let [dotActive, setDotActive] = useState(0);
    let settings = {
        dots: true,
        beforeChange: (prev, next) => {
          setDotActive(next);
        },
        arrows:false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              dots:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              dots:false
            }
          }
        ],
        appendDots: dots => (
          <div
            style={{
              position: 'absolute',
              bottom: '7%',
              left: '50%',
              fontSize:'0px',
              transform: 'translateX(-50%)',
              color:'green'
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
          style={
              i === dotActive 
              ? {
                width: "0px",
                padding:"7px",
                borderRadius:'50%',
                background:'red',
                boxShadow:'5px 0px 5px #222'
            } 
            : {
              width: "0px",
              padding:"7px",
              borderRadius:'50%',
              background:'#fff',
              boxShadow:'5px 0px 5px #222'
            }}
          >
          </div>
        ),
       
      };
  return (
    <div>
        <Slider {...settings}>
          {banner.map((item,index)=>(
            <div key={index}>
            <Image
                className="w-full h-[80vh] object-cover "
                src={item}
                alt="image"
                />
            </div>
          ))}
        </Slider>
    </div>
  )
}

export default Banner