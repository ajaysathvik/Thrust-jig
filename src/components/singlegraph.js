// import React, { useState, useEffect } from "react";
// import { Chart } from "../../node_modules/primereact/chart";
// import "../../App.css";

// export default function MultiAxisDemo({ name, scdata, liveDataStream }) {
//   const [chartData, setChartData] = useState(scdata);
//   const [chartOptions, setChartOptions] = useState({});

//   useEffect(() => {
//     const documentStyle = getComputedStyle(document.documentElement);
//     const textColor = documentStyle.getPropertyValue("--text-color");
//     const textColorSecondary = documentStyle.getPropertyValue("--text-color-secondary");
//     const surfaceBorder = documentStyle.getPropertyValue("--surface-border");

//     const options = {
//       stacked: false,
//       animation: false,
//       maintainAspectRatio: false,
//       aspectRatio: 0.6,
//       plugins: {
//         legend: {
//           labels: {
//             color: textColor,
//           },
//         },
//       },
//       scales: {
//         x: {
//           type: "linear",
//           ticks: {
//             color: textColorSecondary,
//           },
//           grid: {
//             color: surfaceBorder,
//           },
//         },
//         y: {
//           type: "linear",
//           display: true,
//           position: "left",
//           ticks: {
//             color: textColorSecondary,
//           },
//           grid: {
//             color: surfaceBorder,
//           },
//         },
//       },
//     };

//     setChartOptions(options);
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setChartData(prevData => {
//         const newData = {
//           ...prevData,
//           datasets: prevData.datasets.map((dataset, index) => ({
//             ...dataset,
//             data: [...dataset.data, liveDataStream]
//           }))
//         };
//         return newData;
//       });
//     }, 20000);

//     return () => clearInterval(interval);
//   }, [liveDataStream]);

//   return (
//     <div className="m-10 w-90">
//       <div className="card p-10 bg-slate-200 rounded-lg">
//         <Chart type="line" data={chartData} options={chartOptions} />
//       </div>
//     </div>
//   );
// }

import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Chart } from "primereact/chart";

const MultiAxisDemo = forwardRef(({ namex, namey }, ref) => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const chartRef = useRef(null);

  useEffect(() => {
    const initialData = {
      labels: [],
      datasets: [
        {
          label: namey,
          data: [],
          fill: false,
          borderColor: "#42A5F5",
          tension: 0.4,
        },
      ],
    };

    const options = {
      scales: {
        x: {
          title: {
            display: true,
            text: namex,
          },
        },
        y: {
          title: {
            display: true,
            text: namey,
          },
        },
      },
      animation: {
        duration: 0,
      },
      responsive: true,
      maintainAspectRatio: false,
    };

    setChartData(initialData);
    setChartOptions(options);
  }, [namex, namey]);

  const addDataPoint = (newData) => {
    setChartData((prevData) => {
      const newLabels = [...prevData.labels, new Date()];
      const newDataPoints = [...prevData.datasets[0].data, newData];

      // Keep only the last 60 data points
      if (newLabels.length > 60) {
        newLabels.shift();
        newDataPoints.shift();
      }

      return {
        labels: newLabels,
        datasets: [
          {
            ...prevData.datasets[0],
            data: newDataPoints,
          },
        ],
      };
    });

    // Force chart update
    if (chartRef.current) {
      chartRef.current.refresh();
    }
  };

  useImperativeHandle(ref, () => ({
    addDataPoint,
  }));

  return (
    // <div className="card" style={{ width: '100%', height: '400px' }}>
    //     <Chart ref={chartRef} type="line" data={chartData} options={chartOptions} />
    // </div>
    <div className="m-10 w-90">
      <div className="card p-10 bg-slate-200 rounded-lg">
        <Chart
          type="line"
          data={chartData}
          options={chartOptions}
          ref={chartRef}
        />
      </div>
    </div>
  );
});

export default MultiAxisDemo;
