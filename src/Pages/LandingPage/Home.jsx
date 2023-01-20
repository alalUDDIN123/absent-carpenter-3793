import { Box, HStack, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Carousel from './Carousel';

const Home = () => {
    const images = [
      {
        image:
          "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/47e5c31ef7dcce1e.png?q=100",
        text: "Top Offers",
      },
      {
        image:
          "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/5f8bd5669e19e724.png?q=100",
        text: "Mobiles & Tablets",
      },
      {
        image:
          "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/361d53b8725c2d2d.png?q=100",
        text: "Electronics",
      },
      {
        image:
          "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/904f3c8e7101408b.png?q=100",
        text: "TVs & Appliances",
      },
      {
        image:
          "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/7f7355480c6adc16.png?q=100",
        text: "Fashion",
      },
      {
        image:
          "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/f97d6138516056bc.png?q=100",
        text: "Beauty",
      },
      {
        image:
          "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/6728ed3cf145562c.png?q=100",
        text: "Home & Furniture",
      },
      {
        image:
          "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/007910082ae6355b.png?q=100",
        text: "Flights",
      },
      {
        image:
          "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/46376ceed3448aff.png?q=100",
        text: "Grocery",
      },
    ];

    const secondbox = [
      {
        image:
          "https://rukminim1.flixcart.com/image/200/200/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
        text: "Apple iPads",
        text2: "Shop Now",
        text3: "Liquid Retina Display",
      },
      {
        image:
          "https://rukminim1.flixcart.com/image/200/200/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
        text: "Apple iPads",
        text2: "Shop Now",
        text3: "Liquid Retina Display",
      },
      {
        image:
          "https://rukminim1.flixcart.com/image/200/200/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
        text: "Apple iPads",
        text2: "Shop Now",
        text3: "Liquid Retina Display",
      },
      {
        image:
          "https://rukminim1.flixcart.com/image/200/200/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
        text: "Apple iPads",
        text2: "Shop Now",
        text3: "Liquid Retina Display",
      }, { image:"https://rukminim1.flixcart.com/image/200/200/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70",
    text:"Apple iPads",
text2:"Shop Now",
text3:"Liquid Retina Display"}
    ];

    const thirdbox = [
      {
        image:
          "https://rukminim1.flixcart.com/flap/1000/1000/image/bf9c7eb4dfe3e778.jpg?q=50",
      },
      {
        image:
          "https://rukminim1.flixcart.com/flap/1000/1000/image/9123cc58a752f8f3.jpg?q=50",
      },
      {
        image:
          "https://rukminim1.flixcart.com/flap/1000/1000/image/89d5eee1f8f1e530.jpeg?q=50",
      },
     
    ];

     const fourthbox = [
       {
         image:
           "https://rukminim1.flixcart.com/image/312/312/kqidx8w0/television/m/1/v/32ha0a00-oneplus-original-imag4gy8yezxdhen.jpeg?q=70",
         text: "Apple iPads",
         text2: "Shop Now",
         text3: "Liquid Retina Display",
       },
       {
         image:
           "https://rukminim1.flixcart.com/image/312/312/kqidx8w0/television/m/1/v/32ha0a00-oneplus-original-imag4gy8yezxdhen.jpeg?q=70",
         text: "Apple iPads",
         text2: "Shop Now",
         text3: "Liquid Retina Display",
       },
       {
         image:
           "https://rukminim1.flixcart.com/image/312/312/kqidx8w0/television/m/1/v/32ha0a00-oneplus-original-imag4gy8yezxdhen.jpeg?q=70",
         text: "Apple iPads",
         text2: "Shop Now",
         text3: "Liquid Retina Display",
       },
       {
         image:
           "https://rukminim1.flixcart.com/image/312/312/kqidx8w0/television/m/1/v/32ha0a00-oneplus-original-imag4gy8yezxdhen.jpeg?q=70",
         text: "Apple iPads",
         text2: "Shop Now",
         text3: "Liquid Retina Display",
       },
       {
         image:
           "https://rukminim1.flixcart.com/image/312/312/kqidx8w0/television/m/1/v/32ha0a00-oneplus-original-imag4gy8yezxdhen.jpeg?q=70",
         text: "Apple iPads",
         text2: "Shop Now",
         text3: "Liquid Retina Display",
       },
       {
         image:
           "https://rukminim1.flixcart.com/image/416/416/l5jxt3k0/power-bank/h/t/m/-original-imagg7nprsfvwttp.jpeg?q=70",
         text: "Ambrane Poerbanks",
         text2: "From 699",
         text3: "Fast Charging High Capacity",
       },
      
     
     
     ];
       const fifth = [
         {
           image:
             "https://rukminim1.flixcart.com/flap/1000/1000/image/5175bb37d0a7b179.jpg?q=50",
         },
         {
           image:
             "https://rukminim1.flixcart.com/flap/1000/1000/image/e776ee5c8ad1a40b.jpg?q=50",
         },
         {
           image:
             "https://rukminim1.flixcart.com/flap/1000/1000/image/c4c5331fefc5675e.jpg?q=50",
         },
       ];
  return (
    <Box px={10}>
      <SimpleGrid boxShadow={"xl"} py={2} w="full" columns={9} spacing={5}>
        {images?.map((el, i) => (
          <VStack w={"full"} key={i}>
            <Image w="80px" src={el.image} alt="err" />
            <Text fontSize={"xs"} fontWeight="bold">
              {el.text}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
      <Carousel />
      <Box mt={12}>
        <Image
          w={"100%"}
          src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/09/fk-iphones.jpg?ssl=1"
          alt="err"
        />
      </Box>
      <HStack mt={5}>
        <Image
          src="https://rukminim1.flixcart.com/flap/4000/576/image/e69d03a985bed59b.jpg"
          alt="err"
        />
      </HStack>
      <SimpleGrid w="full" columns={5} spacing={5}>
        {secondbox?.map((el, i) => (
          <VStack mt={12} w={"full"} key={i}>
            <Image src={el.image} alt="err" />
            <Text fontSize={"sm"} fontWeight="bold">
              {el.text}
            </Text>
            <Text color={"green.400"} fontWeight="semibold" fontSize={"md"}>
              {el.text2}
            </Text>
            <Text color={"gray.500"} fontSize={"sm"}>
              {el.text3}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
      <SimpleGrid w="full" columns={3} spacing={5}>
        {thirdbox?.map((el, i) => (
          <VStack mt={12} w={"full"} key={i}>
            <Image w="100%" src={el.image} alt="err" />
          </VStack>
        ))}
      </SimpleGrid>
      <SimpleGrid w="full" columns={6} spacing={5}>
        {fourthbox?.map((el, i) => (
          <VStack mt={12} w={"full"} key={i}>
            <Image w="100%" src={el.image} alt="err" />
            <Text fontSize={"sm"} fontWeight="bold">
              {el.text}
            </Text>
            <Text color={"green.400"} fontWeight="semibold" fontSize={"md"}>
              {el.text2}
            </Text>
            <Text color={"gray.500"} fontSize={"sm"}>
              {el.text3}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
      <SimpleGrid w="full" columns={3} spacing={5}>
        {fifth?.map((el, i) => (
          <VStack mt={12} w={"full"} key={i}>
            <Image w="100%" src={el.image} alt="err" />
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Home
