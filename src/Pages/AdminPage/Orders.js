import React, { useEffect, useState } from 'react'
import LeftSide from './LeftSide'
import style from "./admin.module.css"
import CommonTop from './CommonTop'
import orderStyle from "./orderstyle.module.css"

import Table from './Table'
const sendToCommonTop = [
  {
    "title": "Total Orders",
    "value": 50,
  },
  {
    "title": "Pending",
    "value": 10,
  },
  {
    "title": "Delivered",
    "value": 40,
  }
]

function Orders() {
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

console.log(orderData,"orderdata");
  return (
    <>
      <div className={style["main-wrapper"]} >
        <div className={style["container-wrapper"]}>

          <LeftSide />

          {/* Right Side bar */}
          <div>
            <CommonTop sendToCommonTop={sendToCommonTop} />

            <div className={orderStyle["middle-order"]} >
              <div>
                <div className="card-body">

                  <table className="table table-bordered">
                    <thead className="bg-dark text-white">
                      <tr>
                        <td>Order ID</td>
                        <td>Orders Title</td>
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

              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Orders

// git push origin fp04_371_day_3