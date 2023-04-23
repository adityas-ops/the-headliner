import React from "react";
import { SimpleGrid, Container, Text, Box, Button } from "@chakra-ui/react";
import Cards1 from "@/components/Cards1";
import { useRouter } from "next/router";


export default function Search({ search1 }) {
  const news = search1.articles;
    const router = useRouter();
    // const { search1 } = router.query;
    // above method don't work 
    const { search } = router.query;
  return (
    <>
      <Container maxW="container.xl" mt="20px">
      <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb="10px"
            >

        <Text
          fontSize={{
            base: "1.5rem",
            md: "1.5rem",
            lg: "2rem",
            xl: "2rem",
          }}
          fontWeight="bold"
          color="var(--primary-color)"
        >
            Search Results for {search}
        </Text>
        <Button
            ml="10px"
            colorScheme="white"
            variant="outline"
            onClick={() => router.push("/")}
            _hover={{
            bg: "var(--primary-color)",
            color: "white",
            }}
            >
            Back
            </Button>
        </Box>
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
            xl: 4,
          }}
          spacingX="40px"
          spacingY="20px"
        >
          {news.map((item, index) => (
            <Cards1
              key={index}
              title={item.title}
              image={item.image}
              url={item.url}
            />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { search } = query;

  //called api
  const res = await fetch(
    `https://gnews.io/api/v4/search?q=%22${search}%22&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await res.json();
  // console.log(data);

  return {
    props: {
      search1: data,
    },
  };
}
