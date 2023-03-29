import React from 'react'
import {Text,Box} from "@chakra-ui/react"
import { useRouter } from 'next/router'

function Banner() {
    const router = useRouter()
  return (
    <>
        <Box style={{
            width:'100%',
            backgroundColor:'#F5F5F5',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        }}  >
            <Text fontSize={{
                base:'2rem',
                md:'2rem',
                lg:'3rem',
                xl:'3rem',

            }} fontWeight="bold" color="var(--primary-color)" className='banner'
            onClick={{
                base:()=>router.push('/'),
                md:()=>router.push('/'),
                lg:()=>router.push('/'),
                xl:()=>router.push('/'),
            }}
            >
             <span className='second'>THE </span>HEADLINER
            </Text>

        </Box>
    </>
  )
}

export default Banner