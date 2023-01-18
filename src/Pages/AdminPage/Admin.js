import React from 'react'
import style from "./admin.module.css"


function Admin() {
  return (
    <>
      <div className={style["main-wrapper"]} >
        <div className={style["container-wrapper"]}>

          {/* Left Side Bar */}
          <div className={style["left-mainDiv"]}>
             <div>

               <div>
                <img src="https://avatars.githubusercontent.com/u/103638279?s=120&v=4" alt="Logged User" />
               </div>

               <div>
                 <h2>Shubham</h2>
                 <p>shubham@gmail.com</p>
               </div>

             </div>

             <div> 
           
               Dasboard
              </div>

             <div>Users</div>
             <div>Orders</div>
             <div>Products</div>
             <div>Add Product</div>
             <div>Logout</div>
             <div>Report</div>
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