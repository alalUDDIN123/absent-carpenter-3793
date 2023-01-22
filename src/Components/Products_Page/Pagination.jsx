import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Pagination = ({ data, page, setPage }) => {
  // const [total, setTotal] = useState(data.length-1);
  const  totalpage=Math.ceil((data.length-1 )/ 5)
  // console.log(total)
  // useEffect(() => {
  //   setTotal(data.length);
  // }, []);

  return (
    <ButtonGroup>
      <Button onClick={() => setPage(1)}>First</Button>
      <Button
        disabled={page == 1 ? true : false}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </Button>
      <Button  colorScheme="green" w="40px" h="40px"  >{page}</Button>
      <Button disabled={page== totalpage ? true : false}
        onClick={() => setPage(page + 1)}
      >
        Next
      </Button>
      <Button onClick={() => setPage(totalpage)}>Last</Button>
    </ButtonGroup>
  );
};

export default Pagination;
