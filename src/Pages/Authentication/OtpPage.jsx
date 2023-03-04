import { CheckCircleIcon, InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  HStack,
  PinInput,
  PinInputField,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function OtpPgae() {
  const [realOtp, setRealOtp] = useState("");
  const [state, setState] = useState(0);
  const navigate = useNavigate();

  const toast = useToast();

  let value = Math.floor(Math.random() * 10 + 1000);

  useEffect(() => {
    window.scrollTo(0, 0);

    setState(value);
    toast({
      position: "top",
      render: () => (
        <Box color="white" p={3} bg="blue.500" mt="100px">
          Your OTP is {value}
        </Box>
      ),
    });
  }, []);

  const handelgetOtp = (e) => {
    setRealOtp(realOtp + e.target.value);
  };

  const handelSubmitOtp = () => {
    if (realOtp == state) {
      toast({
        position: "top",
        render: () => (
          <Box
            color="white"
            rounded={"10"}
            p={3}
            bg="green"
            display={"flex"}
            alignItems="center"
          >
            <CheckCircleIcon />
            <Text ml="2" fontWeight={"bold"} color="white">
              Order Placed Successfully !!!
            </Text>
          </Box>
        ),
      });
      navigate("/")
    } else {
      toast({
        position: "top",
        render: () => (
          <Box
            color="white"
            rounded={"10"}
            p={3}
            bg="red"
            display={"flex"}
            alignItems="center"
          >
            <InfoIcon />
            <Text ml="2" fontWeight={"bold"} color="white">
              Enter Correct Otp
            </Text>
          </Box>
        ),
      });
    }
  };

  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems="center"
      w="100%"
      h="100vh"
      bg="#f1f3f6"
    >
      <Box
        h="40vh"
        w="25%"
        bg="white"
        display="grid"
        justifyContent={"center"}
        alignItems="center"
        shadow={"sm"}
        borderRadius={"4"}
      >
        <Heading>ENTER OTP</Heading>
        <HStack mt="-10">
          <PinInput placeholder="-">
            <PinInputField onChange={handelgetOtp} />
            <PinInputField onChange={handelgetOtp} />
            <PinInputField onChange={handelgetOtp} />
            <PinInputField onChange={handelgetOtp} />
          </PinInput>
        </HStack>
        <Button mt="-10" onClick={handelSubmitOtp}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default OtpPgae;
