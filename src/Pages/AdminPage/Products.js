import React from 'react'
import LeftSide from './LeftSide'
import style from "./admin.module.css"
import CommonTop from './CommonTop'

const sendToCommonTop=[
  {
    "title":"Total Products",
    "value":50,
  },
  {
    "title":"In Stock",
    "value":10,
  },
  {
    "title":"Out Of Stock",
    "value":40,
  }
]

function Products() {
  return (
    <>
    <div className={style["main-wrapper"]} >
        <div className={style["container-wrapper"]}>

         <LeftSide />

          {/* Right Side bar */}
          <div>
             <CommonTop sendToCommonTop={sendToCommonTop}/>
          </div>

        </div>
      </div>
    </>
  )
}

export default Products
