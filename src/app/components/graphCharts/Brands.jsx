// Revenue.js
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Brands = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (data) {
      const ctx = chartRef.current.getContext("2d");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: "Brands",
              data: data.brandsData,
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
            },
          ],
        },
      });
    }
  }, [data]);

  return (
    <>
      <canvas ref={chartRef} />
    </>
  );
};

export default Brands;
