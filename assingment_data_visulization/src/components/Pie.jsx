import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function generateRandomColors(numColors) {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    const r = Math.floor(Math.random() * 256); // Random red value (0-255)
    const g = Math.floor(Math.random() * 256); // Random green value (0-255)
    const b = Math.floor(Math.random() * 256); // Random blue value (0-255)
    const alpha = 1; // Set alpha to 1 for full opacity
    const color = `rgba(${r}, ${g}, ${b}, ${alpha})`;
    colors.push(color);
  }
  return colors;
}

export function PieChart({ rawdata }) {
  const a = new Set();
  const b = new Set();
  rawdata.forEach((i) => {
    if (i.source && i.insight) {
      a.add(i.source);
      b.add(i.insight);
    }
  });
  const x = Array.from(a);
  const y = Array.from(b);
  const yy = y.slice(0, x.size);
  const colors = generateRandomColors(x.size);

  const data = {
    labels: x.slice(0, 6),
    datasets: [
      {
        label: "# of Votes",
        data: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Pie rawdata={data} />;
}
