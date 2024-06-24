import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export function BubbleGraph({ rawdata }) {
  //   const rel = new Set();
  //   const like = new Set();
  //   const intensity = new Set();
  //   rawdata.forEach((i) => {
  //     if (i.relevance) {
  //       rel.add(i.relevance);
  //     }
  //     if (i.likelihood) {
  //       like.add(i.likelihood);
  //     }
  //     if (i.intensity) {
  //       intensity.add(i.intensity);
  //     }
  //   });
  //   const x = Array.from(rel);
  //   const y = Array.from(like);
  //   const r = Array.from(intensity);
  //   console.log(x, y, r);

  //   //   console.log(x, y, r);
  //   //   console.log(
  //   //     Array.from({ length: 50 }, () => ({
  //   //       x: faker.datatype.number({ min: -100, max: 100 }),
  //   //       y: faker.datatype.number({ min: -100, max: 100 }),
  //   //       r: faker.datatype.number({ min: 5, max: 20 }),
  //   //     }))
  //   //   );
  //   const dataArray = [];
  //   for (
  //     let i = 0;
  //     i < Math.min(rel.length, like, length, intensity.length);
  //     i++
  //   ) {
  //     dataArray.push({
  //       x: x[i],
  //       y: y[i],
  //       r: r[i],
  //     });
  //   }
  //   console.log(dataArray);
  const dataArray = new Array();
  rawdata.forEach((i) => {
    if (i.intensity && i.likelihood && i.relevance) {
      dataArray.push({
        x: i.relevance,
        y: i.likelihood,
        r: i.intensity,
      });
    }
  });
  console.log(dataArray);
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "Red dataset",
        data: dataArray,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      //   {
      //     label: "Blue dataset",
      //     data: Array.from({ length: 1000 }, () => ({
      //       x: faker.datatype.number({ min: -100, max: 100 }),
      //       y: faker.datatype.number({ min: -100, max: 100 }),
      //       r: faker.datatype.number({ min: 5, max: 20 }),
      //     })),
      //     backgroundColor: "rgba(53, 162, 235, 0.5)",
      //   },
    ],
  };
  return <Bubble options={options} data={data} />;
}
