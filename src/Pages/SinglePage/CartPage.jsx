 import React from 'react'
 import {useNavigate} from "react-router-dom"
 import {useDispatch,useSelector} from "react-redux"
 import { Buybutton } from "./Buybutton/Buybutton"
 import styles from "./cart.module.css"
 import { DecrementQty, IncrementQty, RemoveFromCart } from "../../redux/CartReducer/action"
 const CartPage=()=> {
   const dispatch=useDispatch()


    
     const Mycartdata=useSelector((state)=>(state.cartReducer.cart))
     
     
     let totalprice=0

     let cartcount=0
     for(var i=0; i<Mycartdata.length; i++)
     {
         totalprice+=(Mycartdata[i].price)*Mycartdata[i].qty

         cartcount+=Mycartdata[i].qty

        
     }

     const decQty=(id)=>{

         dispatch(DecrementQty({id}))

         let fnitem=0
         for(var i=0; i<Mycartdata.length; i++)
         {
             if(Mycartdata[i].id===id)
             {
                 fnitem=Mycartdata[i].qty
             }
         }

         if(fnitem===1)
         {
             dispatch(RemoveFromCart({id}))
         }
        
     }
     const incQty=(id)=>{

         dispatch(IncrementQty({id}))

     }

     const Rmbitem=(id)=>{
         dispatch(RemoveFromCart({id}))
     }

    





    return (
      <>
          <div className={styles.cartmain}>

         <div className={styles.subcartmain}>

              <div className={styles.leftcartbox}>
                  <div className= {styles.flipkartwithcartcount}>   <span>Flipkart (1)</span></div>
                  <div>
                      
                         <div style={{borderBottom:"1px solid rgba(191, 191, 191, 0.651)"}}>
                          <div className={styles.showdatamain}>
                            
                              <div className={styles.leftdetail}><img src="https://rukminim1.flixcart.com/image/312/312/jzrb53k0pkrrdj/mobile/g/2/y/mtr-ferrari-ferrari-original-imafhg8myrfcxet5.jpeg?q=70" alt="" /></div>
                              <div className={styles.rightdetail}>
                                 <div>Realme c5</div>
                                 <div style={{color:"gray",fontSize:"12px"}}>4 RAM</div>
                                 <div className={styles.priceline}><span style={{textDecoration:"line-through",color:"gray",fontSize:"12px"}}>₹2300</span><span><strong style={{display:"inline-block",fontSize:"20px"}}>₹1300</strong> </span><span style={{color:"green"}}>10%off</span></div>
                                 <div><span style={{color:"gray",fontSize:"12px"}}>Seller: Flipkart </span><img style={{width:"40px"}} src="https:static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" /></div>
                             </div>
                              <img onClick={()=>Rmbitem()} className={styles.removeitem} src="https://www.freeiconspng.com/thumbs/close-icon/black-close-icon-3.png" alt="" />
                            
                         </div>
                         <div className={styles.cartcountbox}><button onClick={()=>decQty()}>-</button><span>1</span><button onClick={()=>incQty()}>+</button></div>
                        
                      
                          </div>
                        

                     
                  </div>
                  <div className={styles.placebuttondiv}><Buybutton >place order</Buybutton></div> 

                
                
              </div>
             {
                  <div className={styles.rightcartbox}>
                  <div className={styles.pricetext}>PRICE DETAILS</div>
                 <div><span>Price (1 items) </span><span>₹1300</span></div>
                  <div><span>Discount</span><span className={styles.greentext}>-₹100</span></div>
                  <div><span>Delivery Charges</span><span className={styles.greentext}>FREE</span></div>
                  <div><span>Total Amount</span><span>₹1200</span></div>
                 <div>You will save ₹100 on this order</div>
              </div>
                
              }
            

        </div>
        
        
        
        
     </div>
     </>
   )
  }


export default CartPage