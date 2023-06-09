import {
  Button,
  Box,
  InputGroup,
  Input,
  InputRightElement,
  Icon,
  Text,
  Stack,
  SimpleGrid,
  Container,
  FormControl,
} from "@chakra-ui/react";
import { Search2Icon, BellIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import Head from "next/head";
import Latest from "@/components/Latest";
import Link from "next/link";
import { useState, useEffect } from "react";
import Cards1 from "@/components/Cards1";
import Slider from "react-slick";
import axios from "axios";
// import Link from "next/link";
export default function Home({ news }) {
  const but = [
    "World",
    "India",
    "Healthy",
    "Technology",
    "Finance",
    "Art",
    "Sports",
    "India",
    "World",
    "Uk",
    "America",
  ];

  const [butname, setButname] = useState("health");
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://gnews.io/api/v4/search?q=%22${butname}%22&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      setCategory(result.data.articles);
    };

    fetchData();
  }, [butname]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };

  const handleSearch = () => {
    // console.log(search);
    // convert search into utf-18
    const searchUtf = encodeURIComponent(search);
    // redirect to search page using link
    // console.log("utf", searchUtf);
    setSearch(searchUtf);
  };

  return (
    <>
      <Head>
        <title>The Headliner</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main 
        style={{
         overflow:"hidden"
        }}

      >
      <>
          <Box
          margin={{
            base: "5px",
            md: "0 auto",
            lg: "0 auto",
            xl: "20px",
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <form onSubmit={handleSearch}
          style={{
            width:"100%"
          }}
          >
            <Input
              bg="gray.100"
              borderRadius="20px"
              type="text"
              placeholder="Doge coin to Moon.."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </form>
          <Link href={search}>
            <Button
              variant="outline"
              borderRadius="20px"
              fontSize="15px"
              fontWeight="bold"
              color="var(--button-color)"
              bg="white"
              _focus={{
                bg: "var(--button-color)",
                color: "white",
              }}
              _hover={{
                bg: "var(--button-color)",
                color: "white",
              }}
              marginLeft="10px"
              onClick={handleSearch}
            >
              Search
            </Button>
          </Link>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            w={{
              base: "80%",
              md: "90%",
              lg: "90%",
              xl: "80%",
            }}
            display="flex"
            justifyContent="space-between"
          >
            <Text
              fontSize={{
                base: "20px",
                md: "30px",
                lg: "30px",
                xl: "30px",
              }}
              fontWeight="bold"
              display="flex"
              justifyContent="space-between"
            >
              Latest News
            </Text>
            <Link href="/lstnews">
              <Text
                fontSize={{
                  base: "20px",
                  md: "20px",
                  lg: "20px",
                  xl: "20px",
                }}
                color="blue"
              >
                See All
                <ArrowForwardIcon />
              </Text>
            </Link>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box
            w={{
              base: "100%",
              md: "90%",
              lg: "90%",
              xl: "90%",
            }}
          >
            <Latest news={news} />
          </Box>
        </Box>
        <Box
          marginTop={{
            base: "10px",
            xl: "20px",
          }}
        >
          <Slider {...settings}>
            {but.map((item) => (
              <div>
                <Button
                  key={item}
                  variant="outline"
                  borderRadius="20px"
                  fontSize="15px"
                  fontWeight="bold"
                  color="var(--button-color)"
                  bg="white"
                  _focus={{
                    bg: "var(--button-color)",
                    color: "white",
                  }}
                  _hover={{
                    bg: "var(--button-color)",
                    color: "white",
                  }}
                  onClick={() => setButname(item)}
                  margin="10px"
                >
                  {item}
                </Button>
              </div>
            ))}
          </Slider>
        </Box>
        <Box>
          <Container maxW="container.xl" mt="20px">
            <Text
              fontSize={{
                base: "1.5rem",
                md: "2rem",
                lg: "2rem",
                xl: "2rem",
              }}
              fontWeight="bold"
              color="var(--primary-color)"
              mb="10px"
            >
              {butname}
            </Text>
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
              {category.map((item, index) => (
                <Cards1
                  key={index}
                  title={item.title}
                  image={item.image}
                  url={item.url}
                />
              ))}
            </SimpleGrid>
          </Container>
        </Box>
        </>
      </main>

    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://gnews.io/api/v4/search?q=%22latest%20news%22&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const data = await res.json();
  return {
    props: {
      news: data,
    },
  };
}
