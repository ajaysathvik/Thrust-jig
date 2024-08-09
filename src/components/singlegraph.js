import React, { useState, useEffect } from "react";
import { Chart } from "../../node_modules/primereact/chart";
import "../../App.css";


export default function MultiAxisDemo({ name, scdata, liveDataStream }) {
  const [chartData, setChartData] = useState(scdata);
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");
    const textColorSecondary = documentStyle.getPropertyValue("--text-color-secondary");
    const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

    const options = {
      stacked: false,
      animation: false,
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          type: "linear",
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
        y: {
          type: "linear",
          display: true,
          position: "left",
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
          },
        },
      },
    };

    setChartOptions(options);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData(prevData => {
        const newData = {
          ...prevData,
          datasets: prevData.datasets.map((dataset, index) => ({
            ...dataset,
            data: [...dataset.data, liveDataStream]
          }))
        };
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [liveDataStream]);

  return (
    <div className="m-10 w-90">
      <div className="card p-10 bg-slate-200 rounded-lg">
        <Chart type="line" data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}