
import React, {useEffect, useState } from "react";
import {
  Box,
  HStack,
  Heading,
  Text,
  VStack,
  Flex,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Select,
  Checkbox,
} from "@chakra-ui/react";
import { AiOutlineCaretDown, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
let first = 0;

export const ProductFilter = ({ searchObject, setSearchObject, data }) => {
  // const { allProductsData, currentRoute } = useSelector(
  //   (store) => store.ProductsManager
  // );
  const [priceSlider, setPriceSlider] = useState([]);
  const [filterKeys, setfilterKeys] = useState({});
  const [show, setShow] = useState(null);

  const min = 0;
  const max = 30000;
  const findFilterData = () => {
    const filterDataKey = { ...filterKeys };

    if (JSON.stringify(filterKeys) !== "{}") {
      let firstProduct = data[0];
      Object.keys(filterKeys).forEach((key) => {
        Object.keys(filterDataKey[key]).forEach((nestedKey) => {
          filterDataKey[key][nestedKey] = 0;
        });
      });
      console.log(filterDataKey);
    }

    const countNum = (key) => (key == undefined ? (key = 1) : (key += 1));

    data.forEach((product,i) =>{
    if(i<data.length-1)
      Object.keys(product).forEach((key) => {
       if(key=="_battery_capacity"){
        product[key]=product[key].split("mAh")[0]+" mAh"
       }
        if (key[0] == "_" && product[key] != null) {
          if (filterDataKey[key] == undefined) {
            filterDataKey[key] = {};
            if (product[key]) {
              if (typeof product[key] == "object" && product[key][1]) {
                filterDataKey[key][product[key][0]] = 1;

                filterDataKey[key][product[key][1]] = 1;
              } else {
                filterDataKey[key][product[key]] = 1;
              }
            }
          } else {
            if (typeof product[key] == "object" && product[key][1]) {
              for (let i = 0; i < product[key].length; i++) {
                filterDataKey[key][product[key][i]] = countNum(
                  filterDataKey[key][product[key][i]]
                );
              }
            } else {
              filterDataKey[key][product[key]] = countNum(
                filterDataKey[key][product[key]]
              );
            }
          }
        }
      })
    
  });
    console.log(filterDataKey);
    setfilterKeys(filterDataKey);
  };

  const handleChange = (filterKey, name) => {
    const newSearchObj = { ...searchObject };
    if (newSearchObj[filterKey] == undefined) {
      newSearchObj[filterKey] = [name];
    } else {
      const checkPresence = newSearchObj[filterKey].includes(name);
      if (checkPresence) {
        newSearchObj[filterKey].splice(
          newSearchObj[filterKey].indexOf(name),
          1
        );
      } else {
        newSearchObj[filterKey].push(name);
      }
    }
    setSearchObject(newSearchObj);
  };

  const handleShow = (id) => {
    first = 20;
    show === id ? setShow(null) : setShow(id);
  };

  useEffect(() => {
    findFilterData();
  }, [data]);

  return (
    <Box p="5px">
      <Heading size="md">Filters</Heading>
      <Box></Box>
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
          onChangeEnd={(val) => setPriceSlider(val)}
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
        <VStack align="stretch">
          {Object.keys(filterKeys)?.map((filterKey, i) => (
            <Box key={400 + i} w="full">
              <Flex
                justifyContent="space-between"
                onClick={() => handleShow(filterKey)}
                cursor="pointer"
                p="10px "
              >
                <Heading size="xs">
                  {filterKey.replace(/_/g, " ").toUpperCase()}
                </Heading>
                <Box color="gray" fontWeight="500">
                  {show === filterKey|| searchObject[filterKey] || i == first ? (
                    <AiOutlineUp size="16px" />
                  ) : (
                    <AiOutlineDown size="16px" />
                  )}
                </Box>
              </Flex>
              {(show === filterKey || searchObject[filterKey] || i == first) && (
                <VStack p="10px" alignItems="stretch">
                  {Object.keys(filterKeys[filterKey]).map((name, i) => (
                    <Flex
                      justifyContent="space-between"
                      onChange={() => handleChange(filterKey, name)}
                      key={300 + i}
                    >
                      <Checkbox
                        size="md"
                        value={name}
                        isChecked={searchObject[filterKey]?.includes(name)}
                      >
                        {name}
                      </Checkbox>
                      <Text color="gray" alignItems="end" pr={7}>
                        ( {filterKeys[filterKey][name]} )
                      </Text>
                    </Flex>
                  ))}
                </VStack>
              )}
              <Box border=".5px solid gray" />
            </Box>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

