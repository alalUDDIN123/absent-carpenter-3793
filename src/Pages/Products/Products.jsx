import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProductCard from "../../Components/Products_Page/ProductCard";
import { ProductFilter } from "../../Components/Products_Page/ProductFilter";
import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import {  getProductData } from "../../api";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsSuccessAction } from "../../redux/ProductsReducer/action";

function Products() {
  const dispatch=useDispatch()
  const location = useLocation();
  const data=useSelector((store)=>store.ProductsManager.products)
  // const data=data1?.filter((ele,i)=>i<20)
  // console.log(data)
  const [searchParams, setSearchParams] = useSearchParams();
  
const searchParamsObject = {};
for (let [key, value] of searchParams.entries()) {
  if(searchParamsObject[key]){
    searchParamsObject[key].push(value);
  }else{
    searchParamsObject[key] = [value];
  }
}
  const [searchObject, setSearchObject] = useState(searchParamsObject||{});

  useEffect(()=>{
    const route=location.pathname.replace('/products','')
   dispatch(getProductData(route,searchObject)).then(res =>dispatch( getProductsSuccessAction(res)))
    setSearchParams({...searchObject});
    
  },[location.search,searchObject])

  return (
    <Box>
      {data && (
        <SimpleGrid templateColumns="20% 80%">
      <ProductFilter   {...{searchObject,setSearchObject,data}}/>
          <Box>
            {data.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </Box>
        </SimpleGrid>
      )}
    </Box>
  );
}

export default Products;
