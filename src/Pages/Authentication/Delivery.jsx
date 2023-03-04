import { Box, Button, HStack, Image, Input, Spacer, Text, Textarea } from "@chakra-ui/react";
import { CheckIcon, InfoOutlineIcon } from '@chakra-ui/icons'

import { MdSecurity } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";





function Delivery() {
    const navigate = useNavigate();
    const [address, setAddress] = useState({ Name: '', Number: '', Pincode: '', Email: '', Address: '', City: '', State: '' });
    const { Name, Number, Pincode, Email, Address, City, State } = address;
    
    const handelChange= (e)=>{
       
        const {value,  name } = e.target;
    setAddress({...address, [name] : value})
        
    }
    let cart=JSON.parse(localStorage.getItem("cart"))
    const toOtp = (i) => {
        if(address.Name != "" && address.Number != "" && address.Pincode != "" && address.Email != "" && address.Address != "" && address.City != "" && address.State != "" ){
           navigate("/otp")
           cart.splice(i,1)
           localStorage.setItem("cart",JSON.stringify(cart))
        } else {
            toast("Fill all details")
        }
        
    }
 
    return (


        <Box w='100%'  pt='20' bg='#f1f3f6' >

            <HStack
             w="82%"
            //  h='50vh'
            //  bg="pink"
             margin="auto"
             display="flex"
             alignItems="start"
             justifyContent='space-between' 
            >
             {/*LEFT BOX  */}
             <Box 
             w='69%'
            //  h='40vh'
             bg='#f1f3f6'
             >
                 {/* Left top 1 */}
                 <Box 
                 w='100%'
                 h='10vh'
                 bg='white'
                 display='flex'
                 justifyContent='space-between'
                 alignItems='center'
                 shadow='md'
                 >
                    <Box ml='6' display='flex' alignItems='center' >
                        <Box bg='#f1f3f6' pl='2' pr='2' color='blue' mr='4' borderRadius='2' > 1</Box>
                        <Text fontWeight='500' color='grey' >LOGIN</Text> 
                        <CheckIcon ml='3' color='blue.600' />
                    </Box>
                    <Box>
                        <Button mr='6' colorScheme='blue' variant='outline' borderRadius='0' border='1px solid blue' > 
                        CHANGE
                        </Button>
                    </Box>
                    
                 </Box>

                 {/* Top Box 2 */}

                 <Box 
                 w='100%'
                 h='7vh'
                 bg='#2874f0'
                 mt='4'
                 display='flex'

                 >
                    <Box ml='6' display='flex' alignItems='center' >
                        <Box bg='white' pl='2' pr='2' color='blue' mr='4' borderRadius='2'>2</Box>
                        <Text fontWeight='500' color='white' >DELIVERY ADDRESS</Text> 
                    </Box>
                </Box>                 

                {/* Top Box 3 FORM */}


                <Box  
                w='100%'
                h='70vh'
                bg='#f5faff'
                display='block'
                shadow='md'
                pl='10'
                pt='5'
                >
                    <Box display='flex' >
                    <InfoOutlineIcon mr='4' color='blue'  />
                    <Text  color='blue' fontWeight='500' mt='-1' > ADD A NEW ADDRESS </Text>
                    </Box >
                    <Box display='flex' justifyContent='space-evenly' mt='8'w='80%' >
                        <Input value={Name} name="Name" onChange={handelChange}  placeholder='Name' w='45%' border='1px solid blue ' bg='white' p='6' />
                        <Input value={Number}  onChange={handelChange}  type="number" name="Number"  placeholder='Mobile Number' w='45%' border='1px solid blue  ' bg='white' p='6' />
                    </Box>

                    <Box display='flex' justifyContent='space-evenly' mt='4'w='80%' >
                        <Input value={Email}  onChange={handelChange}  name="Email" type={"email"}  placeholder='Email' w='45%' border='1px solid blue  ' bg='white' p='6' />
                        <Input value={Pincode}  onChange={handelChange}  name="Pincode"  type={"number"} placeholder='Pincode' w='45%' border='1px solid blue  ' bg='white' p='6' />
                    </Box>
                    <Box display='flex' justifyContent='space-evenly' mt='4'w='80%' >
                        {/* <Input  placeholder='Address' w='93.5%' border='2px solid ' bg='white' p='6' /> */}
                        <Textarea value={Address}  onChange={handelChange}  type="text" name="Address" placeholder='Address' w='93.5%' border='1px solid blue  ' bg='white' pl='6' resize='none' h='20' />
                        </Box>
                    <Box display='flex' justifyContent='space-evenly' mt='4'w='80%' >
                        <Input value={City}  onChange={handelChange}   name="City"   placeholder='City/District/Town' w='45%' border='1px solid blue  ' bg='white' p='6' />
                        <Input value={State}  onChange={handelChange}  name="State"  placeholder='State' w='45%' border='1px solid blue  ' bg='white' p='6' />
                    </Box>
                    <Box display='grid' ml='5' mt={'4'} w='80%' >
                    <Text display={'flex' }  mb='2'  color='red' fontSize='16px' pl='1'  >Please fill all the details</Text>
            
                    <Button color='white' bg='#fb641b' w='45%' borderRadius='0' mr='10' pl='10' pr='10' pt='7' pb='7' onClick={toOtp}>SAVE AND DELIVER HERE</Button>
                    </Box>
                </Box>


                <Box 
                 w='100%'
                 h='8vh'
                 bg='white'
                 mt='5'
                 display='flex'
                 justifyContent='space-between'
                 alignItems='center'
                 shadow='md'
                 >
                    <Box ml='6' display='flex' alignItems='center' >
                        <Box bg='#f1f3f6' pl='2' pr='2' color='blue' mr='4' borderRadius='2' >3</Box>
                        <Text fontWeight='500' color='grey' >ORDER SUMMARY</Text>
                    </Box>
                 </Box>
                <Box 
                 w='100%'
                 h='8vh'
                 bg='white'
                 mt='5'
                 mb='20'
                 display='flex'
                 justifyContent='space-between'
                 alignItems='center'
                 shadow='md'
                 >
                    <Box ml='6' display='flex' alignItems='center' >
                        <Box bg='#f1f3f6' pl='2' pr='2' color='blue' mr='4' borderRadius='2' >4</Box>
                        <Text fontWeight='500' color='grey' >PAYMENT OPTIONS</Text>
                    </Box>
                 </Box>

             </Box>

             {/* Right BOX */}
             <Box 
             w='29.5%'
             h='80vh'
             bg="white" 
             position="sticky"
             top="0"
             shadow='sm'
            
             
             >
                <Box display='flex'justifyContent='flex-start' alignItems='center'  bg='white' w='100%' h='12' >
            <Text ml='5' fontWeight='500' color='grey' >PRICE DETAILS</Text>
          </Box>
            <hr style={{color:'black'}} />
          < Box display='flex'justifyContent='flex-start' alignItems='center'  bg='white' >
            <Text ml='5' mt='5' fontWeight='400' fontSize='18px' color='black' >Price (2 items) </Text>
            <Spacer/>
            <Text mr='5' mt='5' fontWeight='400' fontSize='18px' color='black' >₹1299</Text>
          </Box>
          < Box display='flex'justifyContent='flex-start' alignItems='center'  bg='white' >
            <Text ml='5' mt='4' fontWeight='400' fontSize='18px' color='black' >Discount </Text>
            <Spacer/>
            <Text mr='5' mt='4' fontWeight='400' fontSize='18px' color='green' >- ₹49</Text>
          </Box>
          < Box display='flex'justifyContent='flex-start' alignItems='center'  bg='white' borderBottom='1px dashed grey'  >
            <Text ml='5' mt='4' mb='5' fontWeight='400' fontSize='18px' color='black' >Delivery Charges </Text>
            <Spacer/>
            <Text mr='5' mt='4' mb='5' fontWeight='400' fontSize='18px' color='green' >FREE</Text>
          </Box>
            {/* <hr style={{ color:'black'  }} /> */}
          < Box display='flex'justifyContent='flex-start' alignItems='center'  bg='white' borderBottom='1px dashed grey' >
            <Text ml='5' mt='4' mb='5' fontWeight='500' fontSize='19px' color='black' >Total Amount </Text>
            <Spacer/>
            <Text mr='5' mt='4' mb='5' fontWeight='500' fontSize='19px' color='black' >₹ 1250</Text>
          </Box>
          < Box display='flex'justifyContent='flex-start' alignItems='center'  bg='white' >
            <Text ml='5' mt='4' mb='5' fontWeight='500' fontSize='17px' color='green' > Your Total Savings on this order ₹299</Text>
          </Box>
          < Box display='flex'justifyContent='flex-start' mt='5' alignItems='center' shadow='sm' bg='white' >
            <Image w='45%' src='https://assets.mspimages.in/wp-content/uploads/2021/01/Flipkart-SuperCoin.png' />
            <Box display='grid' >
            <Text mt='3' ml='-4' fontWeight='700' fontSize='15px'   >For every 100 spent, </Text>
            <br />
            <Text mt='-7' fontWeight='700' fontSize='15px' >you earn 2 SuperCoins </Text>
            <br />
            <Text mt='-7' mb='2' ml='-6' fontSize='13px' color='grey'  >Max 50 coins per order</Text>
            </Box>
          </Box>
          <Box mt='5'    p='5'  display='grid' justifyContent='flex-start' alignItems='center'  >
          <MdSecurity fill="grey"   />
          <Text mt='-5' ml='5' w='100%' textTransform='full-width' fontWeight='500' > Safe and Secure Payments.Easy returns.{<br/>}100% Authentic products.</Text>
          </Box>
             </Box>


            </HStack>

        </Box>


    )
 

}


export default Delivery; 