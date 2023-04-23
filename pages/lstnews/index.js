import {  SimpleGrid, Container, Text } from "@chakra-ui/react";
import Cards1 from "@/components/Cards1";


export default function lastestNews({latest}){
    const news = latest.articles;
    // console.log("news", news);
    return(
        <>
        <Container maxW="container.xl" mt="20px">
        <Text 
        fontSize={{
            base: "1.5rem",
            md: "2rem",
            lg: "3rem",
            xl: "3rem",
            }}
            fontWeight="bold"
            color="var(--primary-color)"
            mb="10px"
        >
            Latest News
        </Text>
           <SimpleGrid columns={{
                base: 1,
                md: 2,
                lg: 3,
                xl: 4,
           }} spacingX='40px' spacingY='20px'>
                {news.map((item, index) => (
                    <Cards1 key={index} 
                    title={item.title}
                    image={item.image}
                    url={item.url}

                     />
                ))}
</SimpleGrid>
        </Container>
        </>
    )

}


export async function getServerSideProps() {
    const res = await fetch(`https://gnews.io/api/v4/search?q=%22latest%20news%22&apikey=${process.env.API_KEY}`);
    const data = await res.json();
    return {
      props: {
        latest: data,
      },
    };
  }