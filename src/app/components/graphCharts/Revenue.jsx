import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Revenue = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    console.log("Data in Revenue component:", data);

    if (data) {
      const ctx = chartRef.current.getContext("2d");
      console.log("Canvas context:", ctx);

      const chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: "Revenue",
              data: data.revenueData,
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
            },
          ],
        },
      });

      console.log("Chart instance:", chart);
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default Revenue;
