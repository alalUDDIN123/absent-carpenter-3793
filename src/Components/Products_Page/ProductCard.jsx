import React from "react";
import {
  Box,
  HStack,
  Image,
  Heading,
  Badge,
  UnorderedList,
  ListItem,
  Text,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
const ProductCard = (product) => {
  const {
    id,
    image1,
    name,
    brand,
    rating,
    ratedCount,
    review,
    basicSpecification,
    _customer_ratings,
    internal_storage,
    display,
    screen_size,
    camera,
    primary_camera,
    secondary_camera,
    _battery_capacity,
    processorSpecification,
    processor_brand,
    speciality,
    network_type,
    sim_type,
    purchasePrice,
    discountPrice,
    sellPrice,
    _discount,
    _diliveryMethod,
    assured,
    offer1,
    offer2,
    waranty,
    diliveryBy,
    topDiscount,
    including,
    dealers,
    postedQuantity,
    remainQuantity,
    profit,
  } = product;

 // console.log(product);
  return (
    <Box p="20px">
      <Grid
        fontSize="sm"
        templateColumns="repeat(6,1fr)"
        justify="space-between"
      >
        <GridItem p="10px 30px" colSpan={1}>
          <Image src={image1} alt={id} />
        </GridItem>
        <GridItem colSpan={3}>
          <Heading size="md">{name}</Heading>
          <HStack>
            <Badge
              borderRadius="5px"
              variant="solid"
              colorScheme="green"
              fontSize="12px"
            >
              <HStack align="center" p="2px 3px" spacing="px">
                <Text>{_customer_ratings}</Text>
                <AiFillStar />
              </HStack>
            </Badge>
            <Text as="b" color="gray">
              {ratedCount} & {review}
            </Text>
          </HStack>
          {/* <VStack>

            </VStack> */}
          <UnorderedList>
            <ListItem>{basicSpecification}</ListItem>
            <ListItem>{display}</ListItem>
            <ListItem>{camera}</ListItem>
            <ListItem>{_battery_capacity}</ListItem>
            <ListItem>{processorSpecification}</ListItem>
            {waranty&&<ListItem>{waranty}</ListItem>}
          </UnorderedList>
        </GridItem>

        <GridItem colSpan={2}>
          <Flex>
            <Box>
              <Heading size="md"> ₹ {discountPrice}</Heading>
              <HStack>
                <Text as="del">₹ {sellPrice}</Text>
                <Text color="green">{_discount}% off</Text>
              </HStack>
              {diliveryBy && (
                <HStack>
                  <Text>Dilivery by</Text>
                  <Text as="b"> {diliveryBy}</Text>
                </HStack>
              )}
              {offer1 && (
                <Text as="b" fontSize="sm" color="green">
                  {offer1}
                </Text>
              )}
              {topDiscount && (
                <Box>
                  <span>Upto</span>
                  <b> ₹{topDiscount}</b>
                  <span>{" " + including}</span>
                </Box>
              )}
            </Box>
            {assured && <Image src={assured} alt={id} h="21px" />}
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ProductCard;
