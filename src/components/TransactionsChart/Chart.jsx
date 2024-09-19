import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

// const getRandomColor = () => {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

const DougnutChart = ({ color, occurences}) => {
  console.log(Object.values(occurences));

  return (
    <div>
      <Doughnut
        data={{
          datasets: [
            {
              data: Object.values(occurences),
              backgroundColor: color,
              display: true,
              borderColor: "#D1D6DC",
            },
          ],
        }}
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
        {Object.values(occurences).length > 0 && <p> 100% </p>}
      </div>
    </div>
  );
};

export default DougnutChart;
