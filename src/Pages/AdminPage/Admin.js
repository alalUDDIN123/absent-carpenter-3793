
import React from 'react'
import style from "./admin.module.css"
import Chart from './Chart'
import CommonTop from './CommonTop'
import rightBarCss from "./dashboardRightbar.module.css"
import LeftSide from './LeftSide'

const sendToCommonTop=[
  {
    "title":"Total Users",
    "value":10,
  },
  {
    "title":"Total Products",
    "value":20,
  },
  {
    "title":"Total Orders",
    "value":50,
  },
  {
    "title":"Sales Amount",
    "value":"₹ 100,00.00",
  }
]

function Admin() {



  return (
    <>
      <div className={style["main-wrapper"]} >
        <div className={style["container-wrapper"]}>

          {/* Left Side Bar Component */}
          <LeftSide />

          {/* Right Side bar */}
          <div>
            {/* Middle statics */}
            {/* <div className={rightBarCss["middle-top"]} >
              <div>
                <h2>Total Users</h2>
                <p>10</p>
              </div>

              <div>
                <h2>Total Products</h2>
                <p>10</p>
              </div>

              <div>
                <h2>Total Orders</h2>
                <p>10</p>
              </div>

              <div>
                <h2>Sales Amount</h2>
                <p>"₹ 100,00.00"</p>
              </div>
            </div> */}

            <CommonTop sendToCommonTop={sendToCommonTop} />

            {/* Middle Chart */}
            <div className={rightBarCss["middle-chart"]} >
             <Chart />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Admin

// fp04_371_day_2