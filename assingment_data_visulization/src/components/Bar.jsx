import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import { ja } from "faker/lib/locales";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
// console.log(response.length);

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: "top",
//     },
//     title: {
//       display: true,
//       text: "Chart.js Bar Chart",
//     },
//   },
// };

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: "Dataset 1",
//       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//       backgroundColor: "rgba(255, 99, 132, 0.5)",
//     },
//     // {
//     //   label: "Dataset 2",
//     //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//     //   backgroundColor: "rgba(53, 162, 235, 0.5)",
//     // },
//   ],
// };

export function BarGraph({ rawdata }) {
  const a = new Set();
  const map = new Map();
  rawdata.forEach((i) => {
    if (i.topic) {
      a.add(i.topic);
      if (!map[i.topic]) map[i.topic] = 1;
      else map[i.topic]++;
    }
  });
  const topics = Array.from(a);
  const count = new Array();
  topics.forEach((i) => {
    count.push(map[i]);
  });
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Topic Frequency Chart",
      },
    },
  };

  const labels = topics;

  const data = {
    labels,
    datasets: [
      {
        label: "Frquency",
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        data: count.map((i) => Math.min(100, i)),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
