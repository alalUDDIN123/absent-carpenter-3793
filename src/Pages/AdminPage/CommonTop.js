import React from 'react'
import rightBarCss from "./dashboardRightbar.module.css"
function CommonTop({ sendToCommonTop }) {
    // console.log(title);
    // title1,title2,title3
    // value1,value2,value3
    return (
        <>
            <div className={rightBarCss["middle-top"]} >

                {sendToCommonTop.map((item, i) => (
                    <div key={i}>
                        <h2>{item.title}</h2>
                        <p>{item.value}</p>
                    </div>
                ))}
                {/* <div>
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
                    <p>₹ 100,00.00</p>
                </div> */}
            </div>
        </>
    )
}

export default CommonTop
