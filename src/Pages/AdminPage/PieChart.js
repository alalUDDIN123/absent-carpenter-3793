import React from 'react'
import { VictoryPie } from "victory-pie";
function PieChart({orderData}) {
  return (
    <div style={{ height: 350 }}>
    <VictoryPie
      data={orderData}
      colorScale={["chartreuse", "rgb(79 70 229)", "rgb(192 38 211)"]}
      radius={100}
    />
  </div>
  )
}

export default PieChart
