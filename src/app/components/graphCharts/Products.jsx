import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Products = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (data) {
      const ctx = chartRef.current.getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: "Products",
              data: data.productsData,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default Products;
