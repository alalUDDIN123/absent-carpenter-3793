import React from 'react'
import style from "./admin.module.css"


function Admin() {
  return (
    <>
      <div className={style["main-wrapper"]} >
        <div className={style["container-wrapper"]}>

          {/* Left Side Bar */}
          <div>
         
             <div>Logged User</div>
             <div>Dashboard</div>
             <div>Users</div>
             <div>Orders</div>
             <div>Products</div>
             <div>Add Product</div>
             <div>Logout</div>
          </div>
           
           {/* Right Side bar */}
          <div>
            Right Side
          </div>

        </div>
      </div>
    </>
  )
}

export default Admin

// fp04_371_day_2