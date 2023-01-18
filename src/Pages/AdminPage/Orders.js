import React from 'react'
import LeftSide from './LeftSide'
import style from "./admin.module.css"
import CommonTop from './CommonTop'

const sendToCommonTop=[
  {
    "title":"Total Orders",
    "value":50,
  },
  {
    "title":"Pending",
    "value":10,
  },
  {
    "title":"Delivered",
    "value":40,
  }
]

function Orders() {
  return (
    <>
    <div className={style["main-wrapper"]} >
        <div className={style["container-wrapper"]}>

         <LeftSide />

          {/* Right Side bar */}
          <div>
            <CommonTop sendToCommonTop={sendToCommonTop} />
          </div>

        </div>
      </div>
    </>
  )
}

export default Orders

// git push origin fp04_371_day_3