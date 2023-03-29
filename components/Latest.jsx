
import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import Cards from './Cards'
import Slider from "react-slick";
function Latest({news}) {
    const ne =  news.articles
    const settings = {
      dots:false,
      infinite: true,
      speed: 100,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    };
    
  return (
    
    <>
        <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
       <Slider {...settings}>
    {
        ne.map((item, index) => {
            return (
                <>
                <Cards
                    key={index}
                    index={index}
                    content={item.content}
                    description={item.description}
                    image={item.image}
                    title={item.title}
                    url={item.url}

                 />
                </>
            )
        })
    }
    </Slider>
    </>
  )
}

export default Latest


