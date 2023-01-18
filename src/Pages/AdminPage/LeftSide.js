import React, { useState } from 'react'
import { TbReportSearch } from "react-icons/tb"
import { AiOutlineBarChart,AiOutlineAppstoreAdd} from "react-icons/ai"
import { FiUsers } from "react-icons/fi"
import { BsFillBagCheckFill,BsHandbagFill} from "react-icons/bs"
import { IoLogOutOutline} from "react-icons/io5"
import style from "./admin.module.css"
import { useNavigate } from 'react-router-dom'


function LeftSide() {

const navigate=useNavigate()

  return (
    <>
  
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

            <div onClick={()=>navigate("/admin/dashboard")}>
              <div>
                <AiOutlineBarChart />
              </div>
              <div>
                Dashboard
              </div>
            </div>

            <div onClick={()=>navigate("/admin/users")} >
              <div>
                <FiUsers />
              </div>
              <div>
                Users
              </div>
            </div>

            <div onClick={()=>navigate("/admin/orders")} >
              <div>
                <BsFillBagCheckFill />
              </div>
              <div>
                Orders
              </div>
            </div>

            <div onClick={()=>navigate("/admin/products")} >
              <div>
                <BsHandbagFill/>
              </div>
              <div>
                Products
              </div>
            </div>

            <div onClick={()=>navigate("/admin/addProduct")} >
              <div>
                <AiOutlineAppstoreAdd />
              </div>
              <div>
                Add Product
              </div>
            </div>

            <div>
              <div>
                <IoLogOutOutline />
              </div>
              <div>
                Logout
              </div>
            </div>
           
            <div>
              <div>
                <TbReportSearch />
              </div>
              <div>
               Report
              </div>
            </div>

          </div>
    </>
  )
}

export default LeftSide
