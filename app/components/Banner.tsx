"use client"

import Image from 'next/image'
import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronRight } from 'react-icons/fa';

import shoe5 from '../assets/images/shoe5.png'
import shoe6 from '../assets/images/shoe8.png'


const Banner = () => {


  const CustomNextArrow = (props: React.JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) => (
    <div {...props} className="absolute top-1/2 right-4 transform -translate-y-1/2">
      <FaChevronRight className="text-3xl text-blue-600" />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />, // Use your custom next arrow component
  };


  return <>
    <section className="mb-8 my-20 px-10 container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Slider {...settings}>
            <div className="flex justify-center items-center bg-gradient-to-b from-red-100 to-teal-100">
              <Image
                alt=" Image"
                className="w-full object-cover object-center rounded-lg"
                height="600"
                src={shoe5}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
            <div className="flex justify-center items-center bg-gradient-to-t from-gray-100 to-teal-100">
              <Image
                alt=" Image"
                className="w-full object-cover object-center rounded-lg"
                height="600"
                src={shoe6}
                style={{
                  aspectRatio: "600/400",
                  objectFit: "cover",
                }}
                width="600"
              />
            </div>
          </Slider>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-2xl font-bold mb-2 font-satoshi">The Most <span className="text-blue-600">Latest Nike</span> Shoes</h1>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-lg">
            Discover top-quality products designed to enhance your athletic performance and style. Shop the latest collections and enjoy unbeatable comfort and style. Join the Nike community today.
          </p>
          <div className="my-4">
            <button type="button" className="inline-flex items-center gap-1.5 rounded-lg border border-slate-500 bg-slate-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-slate-700 hover:bg-slate-700 focus:ring focus:ring-slate-200 disabled:cursor-not-allowed disabled:border-slate-300 disabled:bg-slate-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>

              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section >
  </>
}

export default Banner