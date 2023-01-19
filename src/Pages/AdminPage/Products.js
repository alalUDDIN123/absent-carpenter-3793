import React, { useEffect, useState } from 'react'
import LeftSide from './LeftSide'
import style from "./admin.module.css"
import CommonTop from './CommonTop'
import orderStyle from "./orderstyle.module.css"

import Table from './Table'
import PieChart from './PieChart'

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

const PieData = [
  { x: "Products", y: 50 },
  { x: "In Stock", y: 20 },
  { x: "Out Of Stock", y: 30 },
];


function Products() {

  const [orderData, setOrderData] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=6").then((res) => {
      return res.json();
    }).then((resp) => {
      setOrderData(resp)
    }).catch((err) => {
      console.log(err.message);
    })
  }, [])


  return (
    <>
    <div className={style["main-wrapper"]} >
        <div className={style["container-wrapper"]}>

         <LeftSide />

          {/* Right Side bar */}
          <div>
             <CommonTop sendToCommonTop={sendToCommonTop}/>
                    
             <div className={orderStyle["middle-order"]} >
              <div>
                <div className="card-body">

                  <table className="table">
                    <thead className="bg-dark text-white">
                      <tr>
                        <td>Product ID</td>
                        <td>Product Title</td>
                        <td>Price</td>
                        <td>Action</td>
                      </tr>
                    </thead>
                    <tbody className={orderStyle["order-details"]} >

                      {orderData &&
                        orderData.map(item => (
                          <Table  {...item} key={item.id} />
                        ))
                      }

                    </tbody>
                  </table>
                  <div className={orderStyle["pagination"]} >
                    <button>Prev</button>
                    <button>1</button>
                    <button>Next</button>
                  </div>

                </div>
              </div>
              <div>
                      <PieChart orderData={PieData} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Products
