import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  position,
  Toast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Box,
  Text,
  Image,
  FormControl,
  Input,
  FormLabel,
  Link,
} from "@chakra-ui/react";
import { addUser, getUser } from "../../redux/AppReducer/action";
import { useDispatch } from "react-redux";

const InitialState = {
  fullName: "",
  email: "",
  password: "",
  avator: "",
  phone: +910000000,
};

export function Signup() {
  const navigate = useNavigate();
  const [state, setState] = useState(InitialState);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [error, setError] = useState({});

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    if (state.fullName === "" || state.email === "" || state.password === "") {
      toast("Please Enter all field");
    } else {
      const payload = {
        fullname: state.fullName,
        email: state.email,
        password: state.password,
        phone: 9074967678,
        avator:
          "https://ca.slack-edge.com/T049YSPNG02-U04AXQGCH6G-146f35c95621-512",
        isAdmin: false,
        cart: [],
        purchase: [],
        favorite: [],
      };
      toast("Signup Successfull");
      dispatch(addUser(payload));
      dispatch(getUser());
      onClose();
      window.location.reload("/")
    }
  };

  return (
    <>
      <Button
        _hover={{ bg: "white" }}
        bg="white"
        textAlign="center"
        onClick={onOpen}
      >
        Signup
      </Button>

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
                  Looks like you're new here!
                </Text>
                <Text
                  fontWeight="600"
                  marginTop="15px"
                  color="#Dbdbdb"
                  fontSize="1xl"
                >
                  Sign up with your email
                  <br /> address to get started
                </Text>
                <Image
                  marginTop="10rem"
                  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                  alt="image"
                />
              </Box>
              <Box height="32rem" padding="35" width="24rem" color="#878787">
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input
                    variant="flushed"
                    placeholder="Enter your name"
                    name="fullName"
                    onChange={handleChange}
                    value={state.fullName}
                  />
                  <FormLabel marginTop="5">Email address</FormLabel>
                  <Input
                    variant="flushed"
                    required
                    // label="Email"
                    placeholder="Enter email address"
                    name="email"
                    onChange={handleChange}
                    value={state.email}
                  />
                  <Text color="red" fontSize="xs">
                    {error.email}
                  </Text>
                  <FormLabel marginTop="5">Password</FormLabel>
                  <Input
                    // color="black"

                    variant="flushed"
                    required
                    // label="Password"
                    placeholder="Enter password"
                    name="password"
                    onChange={handleChange}
                    value={state.password}
                  />
                  <Text color="red" fontSize="xs">
                    {error.password}
                  </Text>

                  <Text marginTop="7" fontSize="xs">
                    By continuing, you agree to Flipkart's{" "}
                    <Link color="#2f74f0" href="">
                      Terms of Use{" "}
                    </Link>
                    and{" "}
                    <Link color="#2f74f0" href="">
                      Privacy Policy.
                    </Link>
                  </Text>

                  <Button
                    borderRadius="0.5"
                    marginTop="4"
                    padding="6"
                    color="white"
                    bg="#fb641b"
                    width="19.7rem"
                    onClick={handleSubmit}
                    disabled={submitButtonDisabled}
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
                    Existing User? Login
                  </Button>
                </FormControl>
              </Box>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
