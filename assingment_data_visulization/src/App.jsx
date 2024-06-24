import axios from "axios";
import { useEffect, useState } from "react";
import { BarGraph } from "./components/Bar";
import { LineGraph } from "./components/Line";
import { BubbleGraph } from "./components/Bubble";
import { PieChart } from "./components/Pie";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/data");
        setData(response.data);
      } catch (error) {
        console.log("It's an error: ", error);
      }
    })();
  }, []);

  return (
    <div className="p-8">
      {data.length > 0 ? (
        <div className="space-y-8">
          <BarGraph rawdata={data} />
          <LineGraph rawdata={data} />
          {/* <BubbleGraph rawdata={data} /> */}
          <PieChart rawdata={data} />
        </div>
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
}
