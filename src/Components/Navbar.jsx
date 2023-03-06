import React, { useContext, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Signup } from "../Pages/Authentication/Signup";
import { IoSearchSharp } from "react-icons/io5";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  InputGroup,
  InputRightElement,
  Input,
  Text,
  FormControl,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from "../redux/AppReducer/action";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logoPic from "./Masai-Kart.png"
import { ReactSearchAutocomplete } from "react-search-autocomplete";


const initiaState = {
  password: "",
  email: ""
}

const Links = ["Login", "Become A Seller", "More"];
const NavLinks = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const {singleProduct,isLoading,isError}=useSelector((store)=>store.ProductsManager)

  // const {
  //     id,
   
  //   } = singleProduct;
  //   const location = useLocation();

  //   const route = location.pathname.replace("/products", "");


  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, setState] = useState(initiaState)
  const user = useSelector(store => store.userReducer.users)
  const navigate = useNavigate();
  const [adminAccess,setAdminAccess]=useState(false)
  const dispatch = useDispatch()
  // const [change, setChange]  =  useState(true);
  const [data, setData] = useState([])
  const [searchVal, setSearchVal] = useState("");
  const [loginUserName, setLoginUserName] = useState("")
  const btnRef = React.useRef();
  const ref = useRef(null)
  const [hiddenDiv, setHiddenDiv] = useState(false)


  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value })
  }


  const handleSubmit = () => {

    const payload = {
      email: state.email,
      password: state.password
    }

    let filter = user.filter((el) => el.password === payload.password && el.email === payload.email)
    if (filter.length > 0) {
      const adminKeys = filter.map(user => user.isAdmin);
      if(adminKeys[0]===true){
        setAdminAccess(prev=>!prev)
      
      };
      setLoginUserName(filter[0].fullname)
      toast("Login Successful")
    } else {
      toast("Account not found")
    }
     // console.log("username",filter[0].fullname);
    onClose()
  }

  useEffect(() => {
    if (user.length === 0) {
      dispatch(getUser())
    }
  }, [user.length])

  // console.log(user)
  // console.log(adminAccess)
  const url = `https://dbserver-one.vercel.app/phones`
  
  useEffect(()=>{
    fetchData(searchVal)
  },[searchVal])
  

  const fetchData=(searchVal)=>{
    fetch(`${url}?_limit=5&q=${searchVal}`)
    .then((res)=>res.json())
    .then((res)=>{
      // setData(res)
      setData(res)
      console.log(res, " search input data after fetched ");
    })
  }

  const debounce = (fn, timeout)=>{
    let timerid;
    return ()=>{
      clearTimeout(timerid)
      timerid = setTimeout(() => {
        fn()
      }, timeout);
    }
  }
  const handleinput = debounce(()=>{
    const val = ref.current.value
    console.log(" event val check in debounce ", val);
    setHiddenDiv(true)
    setSearchVal(val)
  }, 500)

  window.addEventListener("click",(e)=>{
    console.log(e.target.id, " check window ");
    if(e.target.id!=="inputBox"){
      setHiddenDiv(false)
    }
  })




  return (
    <>
      <Box
        bg={useColorModeValue("#2874f0", "gray.900")}
        px={{ base: 0, sm: 3, md: 5, lg: 24 }}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <HStack display={"flex"} py="2">
              <Text fontSize="25px" color="white" fontWeight="bold" fontFamily="cursive" cursor="pointer"
                onClick={() => navigate("/")} >Masai-Kart</Text>
              <Image
                w="30px"
                h="30px"
                src={logoPic}
                alt="kart"
              />
            </HStack>
            <ToastContainer />
        
              <Box w="270px" pos={'relative'}>
              <InputGroup>
                <Input
                  placeholder="Search for products,brands and more"
                  bg="white"
                  w="100%"
                  borderRadius="2px"
                  h="36px"
                  fontSize="14px"
                  ref={ref}
                  // value={}
                  onInput={handleinput}
                  id='inputBox'
                />
                <InputRightElement
                pos='absolute' zIndex='10'
                  children={
                    <IoSearchSharp
                      color="#2874f0"
                      cursor="pointer"
                      fontSize="23px"
                      fontWeight="bold"
                    />
                  }
                />
              </InputGroup>
              <Box
                display={hiddenDiv?"":"none"}
                pos={'absolute'} zIndex={'10'}
                maxH='320px' overflowY={'auto'}
                borderRadius='0 0 2px 2px'
                borderTop={'1px solid #e0e0e0'}
                w='100%'
                bg='#fff'
                boxShadow={'2px 3px 5px -1px rgb(0 0 0 / 50%)'}
              >
                {
                  data.map((item, index)=>(
                    <Box key={index}>
                      <NavLink to={`/products/phones/${item.id}`}>
                        <Flex gap={2} p='10px 25px' m='10px 0'
                        align={'center'}
                        cursor='pointer'
                        _hover={{bg:"#F5F8FF"}}
                        // onClick={()=>handleSetQuaryUrl(item.query_url)}
                        >
                          <Box maxH='32px' w='32px'>
                            <Image maxH='30px' maxW='32px' src=
                            {item.image1}
                            // {item.thumbnail}
                            />
                          </Box>
                          <Box color={'#212121'}
                          >
                            {item.name}
                            {/* {item.name} */}
                          </Box>
                        </Flex>
                      </NavLink>
                    </Box>
                  ))
                }
              </Box>
            </Box>









            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}
            >
              <Text cursor={'pointer'} color={'white'} onClick={onOpen} >{loginUserName?`Hi-${loginUserName}`:"Login"}</Text>
              <Text cursor={'pointer'} color={'white'} >Become A Seller</Text>
              <Text cursor={'pointer'} color={'white'} >More</Text>
              {adminAccess && <Button onClick={()=>navigate("/admin/dashboard")} >Admin Panel</Button>}
              
            </HStack>
          </HStack>


          <Modal isOpen={isOpen} onClose={onClose} size="2xl" padding="0px">
            <ModalOverlay />

            <ModalContent>
              <ModalBody padding="-1.5">
                <ToastContainer />
                <ModalCloseButton
                  size="lg"
                  color="white"
                  marginRight="-3.5rem"
                  marginTop="-4"
                />
                <div style={{ display: "flex" }}>
                  <Box height="32rem" bg="#2874f0" width="16rem" padding="35px">
                    <Text fontWeight="600" color="white" fontSize="2xl">
                      Welcome back
                    </Text>
                    <Text
                      fontWeight="600"
                      marginTop="15px"
                      color="#Dbdbdb"
                      fontSize="1xl"
                    >
                      Login with email and password

                    </Text>
                    <Image
                      marginTop="10rem"
                      src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                      alt="image"
                    />
                  </Box>
                  <Box height="32rem" padding="35" width="24rem" color="#878787">
                    <FormControl>

                      <FormLabel marginTop="5">Email address</FormLabel>
                      <Input
                        variant="flushed"
                        required
                        // label="Email"
                        placeholder="Enter email address"
                        value={state.email}
                        name="email"
                        onChange={handleChange}
                      />
                      <Text color="red" fontSize="xs">

                      </Text>
                      <FormLabel marginTop="5">Password</FormLabel>
                      <Input
                        // color="black"

                        variant="flushed"
                        required
                        // label="Password"
                        placeholder="Enter password"
                        value={state.password}
                        name="password"
                        onChange={handleChange}

                      />
                      <Text color="red" fontSize="xs">

                      </Text>

                      <Button
                        borderRadius="0.5"
                        marginTop="4"
                        padding="6"
                        color="white"
                        bg="#fb641b"
                        width="19.7rem"
                        onClick={handleSubmit}
                      >
                        CONTINUE

                      </Button>
                      <Button
                        marginTop="4"
                        boxShadow="md"
                        p="6"
                        rounded="md"
                        borderRadius="0.5"
                        padding="6"
                        color="#2f74f0"
                        bg="#fff"
                        width="19.7rem"
                        _hover={"#fff"}
                      >
                        Do not have an account ? <Signup onClose={onClose} />
                      </Button>
                    </FormControl>
                  </Box>
                </div>
              </ModalBody>
            </ModalContent>
          </Modal>





          <Flex alignItems={"center"}>
            
                <Box><HiOutlineShoppingCart  onClick={() => navigate("/cart")} size='2.2rem' color='white' /></Box>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>

              {Links.map((link) => (

                <NavLinks key={link}>{link}</NavLinks>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}