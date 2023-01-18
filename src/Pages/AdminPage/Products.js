import React from 'react'
import LeftSide from './LeftSide'
import style from "./admin.module.css"

function Products() {
  return (
    <>
    <div className={style["main-wrapper"]} >
        <div className={style["container-wrapper"]}>

         <LeftSide />

          {/* Right Side bar */}
          <div>
           all products
          </div>

        </div>
      </div>
    </>
  )
}

export default Products
