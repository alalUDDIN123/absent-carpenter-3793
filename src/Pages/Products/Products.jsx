import { Box, Center, Heading, SimpleGrid, Skeleton, Stack } from "@chakra-ui/react";
import React from "react";
import ProductCard from "../../Components/Products_Page/ProductCard";
import { ProductFilter } from "../../Components/Products_Page/ProductFilter";
import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getProductData } from "../../api";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsSuccessAction } from "../../redux/ProductsReducer/action";
import Pagination from "../../Components/Products_Page/Pagination";

function Products() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [page, setPage] = useState(1);
  const data = useSelector((store) => store.ProductsManager.products);
  const isLoading = useSelector((store) => store.ProductsManager.isLoading);
  

  const data1 = data?.filter(
    (ele, i) => (page - 1) * 5 <= i && i < page * 5 && i < data.length - 1
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsObject = {};
  for (let [key, value] of searchParams.entries()) {
    if (searchParamsObject[key]) {
      searchParamsObject[key].push(value);
    } else {
      searchParamsObject[key] = [value];
    }
  }
  const [searchObject, setSearchObject] = useState(searchParamsObject || {});

  useEffect(() => {
    const route = location.pathname.replace("/products", "");
    dispatch(getProductData(route, searchObject)).then((res) =>
      dispatch(getProductsSuccessAction(res))
    );
    setSearchParams({ ...searchObject });
  }, [
    location.search,
    searchObject,
    dispatch,
    location.pathname,
    setSearchParams,
  ]);
  console.log(data);
  if (isLoading) {
    return (
        <>
        
            <Stack>
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
                <Skeleton height='20px' />
            </Stack>
        </>
    )
}
  return (
    <Box>
      {data && (
        <SimpleGrid templateColumns="20% 80%">
          <ProductFilter {...{ searchObject, setSearchObject, data }} />
          {data.length > 1 ? (
            <Box>
              {data1?.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
              <Center>
                <Pagination {...{ data, page, setPage }} />
              </Center>
            </Box>
          ) : (
            <Heading color={"tomato"} p="50px"><Center>Product Not Available</Center></Heading>
          )}
        </SimpleGrid>
      )}
    </Box>
  );
}

export default Products;
