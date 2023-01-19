import React, { useEffect, useState } from "react";
import {
  Box,
  HStack,
  Image,
  Heading,
  Badge,
  UnorderedList,
  ListItem,
  Text,
  VStack,
  Flex,
  SimpleGrid,
  Grid,
  GridItem,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Select,
} from "@chakra-ui/react";
import { AiOutlineCaretDown } from "react-icons/ai";
export const ProductFilter = ({ data }) => {
  console.log(data);
  const [slider, setSlider] = useState([]);
  const [filterKeys, setfilterKeys] = useState({});
  const min = 0;
  const max = 30000;
  console.log(slider);


  const findFilterData = () => {
    const filterDataKey = {};
     data.forEach((product) =>
      Object.keys(product).forEach((key) => {
        if (key[0] == "_") {
          if (filterDataKey[key] == undefined) {
            filterDataKey[key] = {};
            if (product[key]) {
              filterDataKey[key][product[key]] = 1;
            }
          } else {
            if (filterDataKey[key][product[key]] == undefined) {
              if (product[key]) {
                filterDataKey[key][product[key]] = 1;
              }
            } else {
              filterDataKey[key][product[key]]++;
            }
          }
        }
      })
    );
    let newObj = {};
    Object.keys(filterDataKey).forEach((key) => {
      let newKey = key.replace(/_/g, " ").toUpperCase();
      newObj[newKey] = filterDataKey[key];
    });
    setfilterKeys(newObj);
  };

  console.log(filterKeys)
  useEffect(() => {
    findFilterData();
  }, []);
  return (
    <Box p="16px">
      <Heading size="md">Filters</Heading>

      <Box>
        <Heading size="xs"> CATEGORIES</Heading>
        <Heading size="sm" color="gray">
          Mobile & Accessories
        </Heading>
      </Box>
      <Box>
        <Heading size="xs"> PRICE</Heading>
        <RangeSlider
          defaultValue={[min, max]}
          min={min}
          max={max}
          step={30}
          onChangeEnd={(val) => setSlider(val)}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={0} />
          <RangeSliderThumb index={1} />
        </RangeSlider>
        <HStack>
          <Select size="xs" icon={<AiOutlineCaretDown fontSize="15px" />}>
            <option value="option1"> Min</option>
            <option value="option2">₹ 10000</option>
            <option value="option3">₹ 20000</option>
            <option value="option4">₹ 30000</option>
          </Select>
          <Box>to</Box>
          <Select
            size="xs"
            value={"option4"}
            icon={<AiOutlineCaretDown fontSize="15px" />}
          >
            <option value="option1">₹ 10000</option>
            <option value="option2">₹ 20000</option>
            <option value="option3">₹ 30000</option>
            <option value="option4">₹ 30000 +</option>
          </Select>
        </HStack>
      </Box>
    </Box>
  );
};
