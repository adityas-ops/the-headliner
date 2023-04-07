import React from "react";
import { Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

function Cards({index,content,description,image,title,url}) {
  return (
    <>
      <div 
       key={index}>
      <Link
            href={url}
            target="_blank"
            >
        <Card maxW="lg" h={{
          base: "200px",
          md: "auto",
          lg: "300px",
          xl: "300px",
        }} margin="10px"
        >
          <CardBody
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius:'10px'

            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Stack mt="6" spacing="3" color="white" bg="blackAlpha.700">
              <Heading padding="10px" size="md">{title}</Heading>
            </Stack>
          </CardBody>
        </Card>
        </Link>
      </div>
    </>
  );
}

export default Cards;
