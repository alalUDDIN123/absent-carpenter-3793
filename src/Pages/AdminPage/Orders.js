import React from 'react'
import LeftSide from './LeftSide'
import style from "./admin.module.css"

function Orders() {
  return (
    <>
    <div className={style["main-wrapper"]} >
        <div className={style["container-wrapper"]}>

         <LeftSide />

          {/* Right Side bar */}
          <div>
            Orders dashboard
          </div>

        </div>
      </div>
    </>
  )
}

export default Orders
