//  import React from 'react'
//  import {useNavigate} from "react-router-dom"
//  import {useDispatch,useSelector} from "react-redux"
//  import { Buybutton } from "./Buybutton/Buybutton"
//  import styles from "./cart.module.css"
//  const CartPage=()=> {
//    const dispatch=useDispatch()


    
//      const Mycartdata=useSelector((state)=>(state.cartReducer.cart))
//      console.log(Mycartdata)
     
//      let totalprice=0

//      let cartcount=0
//      for(var i=0; i<Mycartdata.length; i++)
//      {
//          totalprice+=(Mycartdata[i].price)*Mycartdata[i].qty

//          cartcount+=Mycartdata[i].qty

        
//      }

//      const decQty=(id)=>{

//          dispatch(DecrementQty({id}))

//          let fnitem=0
//          for(var i=0; i<Mycartdata.length; i++)
//          {
//              if(Mycartdata[i].id===id)
//              {
//                  fnitem=Mycartdata[i].qty
//              }
//          }

//          if(fnitem===1)
//          {
//              dispatch(RemoveFromCart({id}))
//          }
        
//      }
//      const incQty=(id)=>{

//          dispatch(IncrementQty({id}))

//      }

//      const Rmbitem=(id)=>{
//          dispatch(RemoveFromCart({id}))
//      }

    





//     return (
//       <>
//           <div className={styles.cartmain}>

//          <div className={styles.subcartmain}>

//               <div className={styles.leftcartbox}>
//                   <div className= {styles.flipkartwithcartcount}>   <span>Flipkart (1)</span></div>
//                   <div>
                      
//                        {
//                         Mycartdata.map((el)=>(
//                             <div style={{borderBottom:"1px solid rgba(191, 191, 191, 0.651)"}}>
//                           <div className={styles.showdatamain}>
                            
//                               <div className={styles.leftdetail}><img src="https://rukminim1.flixcart.com/image/312/312/jzrb53k0pkrrdj/mobile/g/2/y/mtr-ferrari-ferrari-original-imafhg8myrfcxet5.jpeg?q=70" alt="" /></div>
//                               <div className={styles.rightdetail}>
//                                  <div>Realme c5</div>
//                                  <div style={{color:"gray",fontSize:"12px"}}>4 RAM</div>
//                                  <div className={styles.priceline}><span style={{textDecoration:"line-through",color:"gray",fontSize:"12px"}}>₹2300</span><span><strong style={{display:"inline-block",fontSize:"20px"}}>₹1300</strong> </span><span style={{color:"green"}}>10%off</span></div>
//                                  <div><span style={{color:"gray",fontSize:"12px"}}>Seller: Flipkart </span><img style={{width:"40px"}} src="https:static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" /></div>
//                              </div>
//                               <img onClick={()=>Rmbitem()} className={styles.removeitem} src="https://www.freeiconspng.com/thumbs/close-icon/black-close-icon-3.png" alt="" />
                            
//                          </div>
//                          <div className={styles.cartcountbox}><button onClick={()=>decQty()}>-</button><span>1</span><button onClick={()=>incQty()}>+</button></div>
                        
                      
//                           </div>
                        
//                         ))
//                        }  

                     
//                   </div>
//                   <div className={styles.placebuttondiv}><Buybutton >place order</Buybutton></div> 

                
                
//               </div>
//              {
//                   <div className={styles.rightcartbox}>
//                   <div className={styles.pricetext}>PRICE DETAILS</div>
//                  <div><span>Price (1 items) </span><span>₹1300</span></div>
//                   <div><span>Discount</span><span className={styles.greentext}>-₹100</span></div>
//                   <div><span>Delivery Charges</span><span className={styles.greentext}>FREE</span></div>
//                   <div><span>Total Amount</span><span>₹1200</span></div>
//                  <div>You will save ₹100 on this order</div>
//               </div>
                
//               }
            

//         </div>
        
        
        
        
//      </div>
//      </>
//    )
//   }


// export default CartPage



import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogOverlay,
    Box,
    Button,
    ButtonGroup,
    HStack,
    Image,
    Img,
    Spacer,
    Text,
    useDisclosure,
  } from "@chakra-ui/react";
  import { useRef, useState } from "react";
  import { useEffect } from "react";
import { AiOutlineSplitCells } from "react-icons/ai";
  import { json, Link, NavLink } from "react-router-dom";

 
  
  
  function CartPage() {
    let [sum , setSum]=useState(0)
    const [count, setCount] = useState(1);
    const [Deleteid, setDeleteId] = useState(0);
  
   
  
   
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
  
    // const [cartData, SetCartData] = useState([]);
    
    
  
   
  

let cartData=JSON.parse(localStorage.getItem("cart"))
console.log(cartData)


    useEffect(() => {
    //   window.scrollTo(0, 0)
    //   getData()
   

     }, [count]);
  
    // console.log(cartData);
  
     const handelDeleteCart = (i) => {
      onClose();
      // fetch(`${carturl}/${Deleteid}`, {
      //   method: "DELETE",
      //  });     
        cartData.splice(i,1)
      localStorage.setItem("cart",JSON.stringify(cartData))
       setCount(count - 1);
     };
    
    const handelID = (id) => {
       onOpen();
       console.log(id);
       setDeleteId(id);
     };
  
    //  const handelPatchLess = () => {
      
    // //   // setCount(count - 1);
    // setCount(count-1);
    //  };
  
    //  const handelPatchAdd = () => {
   
    // //   // setCount(count + 1);
    //    setCount(count + 1);
    //  };
    // let add=0
    //   let totalprice=(cartData)=>{
       
    //    for(let i=0;i<cartData.length;i++){
    //        add=+(cartData[i].sellPrice)
    //    }
    //    setSum(add)
    //   }
   
    // totalprice(cartData)
 
  
  
    if(cartData.length===0){
      return (
        <Box w="100%" bg="#f1f3f6" h="150vh" pt="100px"  >
          <Box w="78%" h='60.3vh' margin='auto' style={{boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}} >
  
          
          <Box
          w="100%"
          bg="white"
          h="9vh"
          margin="auto"
          display="flex"
          alignItems="center"
          justifyContent='center'
          ><Text color="blue" fontSize="20" fontWeight="400"> Flipkart </Text>
        </Box>
        <Box display='block' > 
          <Box
          w="100%"
          bg="white"
          h="50vh"
          margin="auto"
          mt='2'
          display="flex"
          alignItems="start"
          justifyContent='center'
          >
            <Image src='https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90' 
            w='20%'
            mt='5'
             />
        </Box>
        <Box w="200px" m="auto" textAlign={"center"}> 
             <Text mt='-36' fontWeight='400' fontSize='18px' >Your cart is empty!</Text>
             <Text  fontWeight='400' fontSize='13px' >Add items to it now.</Text>
          <NavLink to="/"  > <Button  color='white' bg='#2874f0' borderRadius='0' mt='4' pl='16' pr='16' >
                Shop now
              </Button> </NavLink>
              </Box>
  
        </Box>
        </Box>
        </Box>  
      )
    }
  
    return (
      <Box w="100%" bg="#f1f3f6" minH='100vh' maxH='-webkit-fit-content'  pt="20px">
        <HStack
          w="90%"
          bg="f1f3f6"
          margin="auto"
          display="flex"
          alignItems="start"
          gap={2}
        >
          <Box shadow="md" bg="f1f3f6" w="69%" position='relative' top='0'   >
            <Box
              w="100%"
              bg="white"
              h="8.5vh"
              borderRadius="5"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Text color="blue" fontSize="20" fontWeight="400">
                Flipkart ({cartData.length})
              </Text>
            </Box>
            <Box
              w="100%"
              bg="white"
              mt="3"
              h="8.5vh"
              borderRadius="5"
              display="flex"
              alignItems="center"
            >
              <Text ml="5" fontSize="18" fontWeight="400">
                From Saved Adress
              </Text>
              <Spacer />
            </Box>
            <Box
              w="100%"
              bg="white"
              mt="4"
              borderRadius="5"
              display="grid"
              justifyContent="start"
              alignItems="center"
            >
              {cartData.map((data,i) => {
                return (
                  <Box
                    key={data.id}
                    display="flex"
                    justifyContent="start"
                    w="800px"
                    m=""
                    p="2"
                    borderTop={"1px solid #F0F0F5"}
                  >
                    <Box display="block"  >
                      <Box w="200px" h="150px" display="flex" alignItems={'center'} justifyContent={"center"}> 
                      <Image src={data.image1} mw="120px" maxHeight="110px"  /> </Box>
                   <Box textAlign={'center'}> 
                      <ButtonGroup
                        // display="flex"
                        // justifyContent="flex-start"
                        // mt="3"
                      >
                        <Button
                          disabled={data.quantity === 1}
                          onClick={() => setCount(count-1)}
                        >
                          -
                        </Button>
                        <Button>{count}</Button>
                        <Button
                           onClick={() => setCount(count+1)}
                        >
                          +
                        </Button>
                      </ButtonGroup> </Box>
                    </Box>
                    <Box w="600px" ml="10" >
                      <Text
                        fontSize="17px"
                        fontWeight="semibold"
                        display="flex"
                        w='100%'
                        justifyContent="start"
                        mt="3"
                        variant="list"
                      >
                        {data.basicSpecification}
                      </Text>
                      <Text
                        fontSize="16px"
                        fontWeight="400"
                        display="flex"
                        mt="1"
                        color="grey"
                        justifyContent="start"
                      >
                        Category: {data._brand}
                      </Text>
                      <Box display="flex" alignItems="center" mt="1">
                        <Text
                          fontSize="16px"
                          fontWeight="400"
                          display="flex"
                          color="grey"
                          justifyContent="start"
                        >
                          Ratings: {data.customer_ratings} ★
                        </Text>
                        <Image
                          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                          ml="4"
                          alt="assured"
                          w="14"
                          h="5"
                        />
                      </Box>
                      <Box display="flex" alignItems="center" mt="3">
                        <Text
                          color="grey"
                          fontSize="17px"
                          fontWeight="400"
                          display="flex"
                          as="del"
                          justifyContent="start"
                        >
                          ₹{data.sellPrice}

                        </Text>
                        <Text
                          color="black"
                          fontSize="19px"
                          fontWeight="semibold"
                          display="flex"
                          justifyContent="start"
                          ml="2"
                        >
                          ₹{data.discountPrice}
                        </Text>
                        <Text
                          fontSize="16px"
                          fontWeight="500"
                          display="flex"
                          color="green"
                          justifyContent="start"
                          ml="2"
                        >
                          10% Off {data.offer} Applied
                        </Text>
                      </Box>
  
                      <Button
                        display="flex"
                        size="md"
                        mt="4"
                        colorScheme="blue"
                        bg="none"
                        color
                        onClick={() => {
                          handelID(data.id);
                        }}
                      >
                        REMOVE
                      </Button>
  
                      <AlertDialog
                        isOpen={isOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={onClose}
                      >
                        <AlertDialogOverlay>
                          <AlertDialogContent>
                            <AlertDialogHeader fontSize="lg" fontWeight="bold">
                              Remove Item
                            </AlertDialogHeader>
  
                            <AlertDialogBody>
                              Are you sure you want to remove this item?
                            </AlertDialogBody>
  
                            <AlertDialogFooter>
                              <Button ref={cancelRef} onClick={onClose}>
                                CANCEL
                              </Button>
                              <Button
                                colorScheme="blue"
                                onClick={() => {
                                  handelDeleteCart(i);
                                }}
                                ml={3}
                              >
                                REMOVE
                              </Button>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialogOverlay>
                      </AlertDialog>
                    </Box>
                  </Box>
                );
              })}
            </Box>
            <Box
          
              position="sticky"
              bottom="0"
              bg="white"
              w="100%"
              h="70px"
              style={{ boxShadow: "rgba(1.15, 0, 0, 0.15) 0px 1px 8px" }}
              display='flex'
              justifyContent='flex-end' alignItems='center'
            >
              <Button  color='white' bg='#fb641b' borderRadius='0' mr='10' pl='10' pr='10' >
                
                <Link to='/delivery' >PLACE ORDER</Link>
              </Button>
            </Box>
          </Box>  
          {
          cartData?.map((data)=>(
            <Box bg="white" position="sticky" top="0" mt='10' shadow="md" h="70vh" w="31%"  key={data.id}  >
            
            <Box display='flex'justifyContent='flex-start' alignItems='center'  bg='white' w='100%' h='12' >
              <Text ml='5' fontWeight='500' color='grey' >PRICE DETAILS</Text>
            </Box>
              <hr style={{color:'black'}} />
            < Box display='flex'justifyContent='flex-start' alignItems='center'  bg='white' >
              <Text ml='5' mt='5' fontWeight='400' fontSize='18px' color='black' >Price ({cartData.length} items) </Text>
              <Spacer/>
              <Text mr='5' mt='5' fontWeight='400' fontSize='18px' color='black' >₹ {data.sellPrice}</Text>
            </Box>
            < Box display='flex'justifyContent='flex-start' alignItems='center'  bg='white' >
              <Text ml='5' mt='4' fontWeight='400' fontSize='18px' color='black' >Discount </Text>
              <Spacer/>
              <Text mr='5' mt='4' fontWeight='400' fontSize='18px' color='green' > {data._discount}%</Text>
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
              <Text mr='5' mt='4' mb='5' fontWeight='500' fontSize='19px' color='black' >₹ {data.discountPrice}</Text>
            </Box>
            < Box display='flex'justifyContent='flex-start' alignItems='center'  bg='white' >
              <Text ml='5' mt='4' mb='5' fontWeight='500' fontSize='17px' color='green' >You will save {data._discount} on this order </Text>
            </Box>
            <Box mt='5' p='5' display='flex' justifyContent='' alignItems='center' gap={1} >
              <Img h='31px' w='38px' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/shield_b33c0c.svg'/>
              <Text color={'#878787'} w='100%' fontWeight='600' > Safe and Secure Payments.Easy returns.{<br/>}100% Authentic products.</Text>
            </Box>
          </Box>
          ))
        }
  
          
        </HStack>
      </Box>
    );
  }
  
  export default CartPage;
  














   