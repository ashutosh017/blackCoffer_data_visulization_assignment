import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function extractYear(dateString) {
  const dateObject = new Date(dateString);
  if (!isNaN(dateObject.getTime())) {
    // Check if the date is valid
    return dateObject.getFullYear();
  } else {
    return null;
  }
}

export function LineGraph({ rawdata }) {
  const set = new Set();
  const set2 = new Set();
  const map = new Array();
  const map2 = new Array();
  rawdata.forEach((i) => {
    if (i.published) {
      const year = extractYear(i.published);
      const year2 = extractYear(i.added);
      set.add(year);
      set2.add(year2);
      if (!map[year]) map[year] = 1;
      else map[year]++;
      if (!map2[year2]) map2[year2] = 1;
      else map2[year2]++;
    }
  });
  const years = Array.from(set);
  years.sort();
  const years2 = Array.from(set2);
  years2.sort();

  const freq = map.filter((i) => i > 0);
  const freq2 = map2.filter((i) => i > 0);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Number of Insights Added or Published Over Time",
      },
    },
  };

  const labels = years;

  const data = {
    labels,
    datasets: [
      {
        label: "Year Published",
        // data: labels.map(() =>
        //   faker.datatype.number({ min: -1000, max: 1000 })
        // ),
        data: freq,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Year Added",
        //   data: labels.map(() =>
        //     faker.datatype.number({ min: -1000, max: 1000 })
        //   ),
        data: freq2,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}
