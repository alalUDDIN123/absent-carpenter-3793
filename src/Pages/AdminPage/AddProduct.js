import React from 'react'
import LeftSide from './LeftSide'
import style from "./admin.module.css"

function AddProduct() {
  return (
    <>
    <div className={style["main-wrapper"]} >
        <div className={style["container-wrapper"]}>

         <LeftSide />

          {/* Right Side bar */}
          <div>
            Add Product
          </div>

        </div>
      </div>
    </>
  )
}

export default AddProduct
