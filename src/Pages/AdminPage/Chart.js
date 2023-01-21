import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


import {Bar} from "react-chartjs-2"
import style from "./Chart.module.css"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// const array = [
//   "Order Placed...",
//   "Processing...",
//   "Shipped...",
//   "Delivered",
// ];

// const getOrderCount = (arr, value) => {
//   return arr.filter((n) => n === value).length;
// };

// const [q1, q2, q3, q4] = [
//   "Order Placed...",
//   "Processing...",
//   "Shipped...",
//   "Delivered",
// ];

// const placed = getOrderCount(10);
// const processing = getOrderCount(9);
// const shipped = getOrderCount(5);
// const delivered = getOrderCount(2);



export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};



function Chart() {


  const data = {
    labels: ["Placed Orders", "Processing", "Shipped", "Delivered"],
    datasets: [
      {
        label: "Order count",
        data: [10,9,2,4],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };


  return (
    <>
    <div className={style.charts} >
    <Bar options={options} data={data} />
    </div>
      
    </>
  )
}

export default Chart
