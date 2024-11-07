"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from '@/public/banner.jpg'
import { useState } from "react";
import Image from "next/image";
const banerImage = [banner,banner,banner,banner,banner,]

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
      <div className="container mx-auto">
        <Slider {...settings}>
          {banner.map((item,index)=>(
            <div key={index}>
            <Image
                className="w-full h-[400px] object-cover "
                src={item}
                alt="image"
                />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Banner