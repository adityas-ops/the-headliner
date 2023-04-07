import { Card, CardBody, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'

function Cards1({image,title,content,url}) {
  return (
   <>
    <Card maxW='sm'
    _hover={{
      transform: 'scale(1.05)',
      transition: 'all 0.3s ease-in-out',
      boxShadow: 'lg',

    }}
    >
  <CardBody>
    <Image
      src={image}
      alt={title}
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
    <Link href={url}
    target="_blank"
    >
      <Heading
        as='h3'
        _hover={{
          color: 'blue.500',
          textDecoration: 'underline',

        }}
       size='md'>{title}</Heading>
      </Link>
      <Text>
        {content}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
</Card>
   </>
  )
}

export default Cards1