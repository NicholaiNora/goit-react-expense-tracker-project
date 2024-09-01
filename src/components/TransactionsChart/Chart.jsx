import { Doughnut } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const data = {
  datasets: [
    {
      data: [45, 25, 20, 10],
      backgroundColor: ["#0EBB69", "#0EF387", "#FAFAFA", "#29292B"],
      display: true,
      borderColor: "#D1D6DC",
    },
  ],
};

const DougnutChart = () => {
  return (
    <div>
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          rotation: -90,
          circumference: 180,
          cutout: "65%",
          maintainAspectRatio: true,
          responsive: true,
          aspectRatio: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-25%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <p>100%</p>
      </div>
    </div>
  );
};

export default DougnutChart;
