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
export function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [error, setError] = useState({});

  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
   
  };

  return (
    <>
      <Button
        _hover={{ bg: "white" }}
        fontWeight="400"
        marginBottom="2"
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
                    onChange={(event) =>
                      setValues((prev) => ({
                        ...prev,
                        name: event.target.value,
                      }))
                    }
                  />
                  <FormLabel marginTop="5">Email address</FormLabel>
                  <Input
                    variant="flushed"
                    required
                    // label="Email"
                    placeholder="Enter email address"
                    onChange={(event) =>
                      setValues((prev) => ({
                        ...prev,
                        email: event.target.value,
                      }))
                    }
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
                    onChange={(event) =>
                      setValues((prev) => ({
                        ...prev,
                        pass: event.target.value,
                      }))
                    }
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
                    onClick={handleSubmission}
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
