import React from 'react'
import LeftSide from './LeftSide'
import style from "./admin.module.css"

function Users() {
  return (
    <>
    <div className={style["main-wrapper"]} >
        <div className={style["container-wrapper"]}>

         <LeftSide />

          {/* Right Side bar */}
          <div>
            Users 
          </div>

        </div>
      </div>
    </>
  )
}

export default Users
