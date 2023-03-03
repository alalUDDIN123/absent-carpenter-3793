import React, { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Signup } from "../Pages/Authentication/Signup";
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
import { useNavigate } from "react-router-dom";
import logoPic from "./Masai-Kart.png"


const initiaState = {
  password: "",
  email: ""
}

const Links = ["Login", "Become A Seller", "More"];
const NavLink = ({ children }) => (
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, setState] = useState(initiaState)
  const user = useSelector(store => store.userReducer.users)
  const navigate = useNavigate();
  const [adminAccess,setAdminAccess]=useState(false)
  const dispatch = useDispatch()
  // const [change, setChange]  =  useState(true);

  
  const [loginUserName, setLoginUserName] = useState("")
  
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
            <Box display={{ base: "none", md: "none", lg: "block" }}>
              <InputGroup boxShadow={"md"} backgroundColor="white">
                <InputRightElement
                  pointerEvents="none"
                  children={<SearchIcon color="blue.500" />}
                />
                <Input
                  borderRadius={0}
                  borderColor="gray.300"
                  w="500px"
                  type="search"
                  placeholder="Search Here ..."
                />
              </InputGroup>
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

                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}