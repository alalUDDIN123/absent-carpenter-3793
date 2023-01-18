import React from 'react'
import styles from "./single.module.css"

import { Addbutton } from "./AddButton/Addbutton"
import { Buybutton } from "./Buybutton/Buybutton"
// import { Cateline } from "../Cateline/Catadiv"

function SingleProduct() {
  return (
    <div>
    <div>
   {/* <Cateline></Cateline> */} 
   <h1>single page</h1>
     <div className={styles.onemain}>
        <div className={styles.leftbox}>
            <div className={styles.verticalline}>
                
            
           <img className={styles.smallimg} src="data:image/jpeg;base64,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" alt=""  />
              
              
            </div>
                <div className={styles.imgdivbox}>
                    <img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/03/img-20220318-154432-1647606743.jpg" alt="" /><div className={styles.buttbox}>
                    <Addbutton data="ADD TO CART" />
                    <Buybutton data="BUY NOW"/>
                </div>
            </div>
        </div>




        <div className={styles.rightbox}>

            <div style={{color:"gray",fontSize:"12px"}}>home / Mobiles & Accessories / Mobiles</div>
            <div>Mobile</div>
            <div style={{color:"gray",fontSize:"15px"}}><span className={styles.ratetext}>rating <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==" alt="" /></span> 4.487,421 Ratings & 5,244 Reviews <span><img style={{width:"70px"}} src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" alt="" /></span></div>
            <div className={styles.pricedivone}><span>price</span><span>₹ discountPrice</span><span>10%off</span></div>
            <h5>Available offers</h5>
            <div className={styles.offer}><span><img className={styles.offertag}  src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /></span><span className={styles.offerline}>Bank Offer 5% Cashback on Flipkart Axis Bank Card <span className={styles.tandc}>T&C</span></span></div>
            <div className={styles.offer}><span><img className={styles.offertag}  src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /></span><span className={styles.offerline}>Special PriceExtra ₹4000 off(price inclusive of discount) <span className={styles.tandc}>T&C</span></span></div>
            <div className={styles.offer}><span><img className={styles.offertag}  src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /></span><span className={styles.offerline}>Freebie CoinDCX Get Bitcoin Worth ₹201 <span className={styles.tandc}>T&C</span></span></div>
            <div className={styles.offer}><span><img className={styles.offertag}  src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /></span><span className={styles.offerline}>Get Google Nest hub at just ₹4999 <span className={styles.tandc}>T&C</span></span></div>

            <div></div>
        </div>
    </div>
    
      {/* : <img src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700" alt="Loading..." />*/}

    </div>
    </div>
  )
  }

export default SingleProduct


// price:'₹{Math.round(initdata.price-(initdata.price*10/100).toFixed(0))}'