import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineGraph({ data, labels, onDataClicked }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },

    onClick: (event, elements) => {
      if (elements.length > 0) {
        const { datasetIndex, index } = elements[0];
        const label = datasetIndex === 0 ? "Systolic" : "Diastolic";
        const value = data[label.toLowerCase()][index];
        onDataClicked({ label, value });
      }
    },
  };

  const diagData = {
    labels: labels,
    datasets: [
      {
        label: "Systolic",
        data: data.systolic,
        backgroundColor: "#C26EB4",
        borderColor: "#C26EB4",
        borderWidth: 2,
        pointBorderWidth: 5,
        cubicInterpolationMode: "monotone",
      },
      {
        label: "Diastolic",
        data: data.diastolic,
        backgroundColor: "#7E6CAB",
        borderColor: "#7E6CAB",
        borderWidth: 2,
        pointBorderWidth: 5,
        cubicInterpolationMode: "monotone",
      },
    ],
  };

  return <Line data={diagData} options={options} />;
}

export default LineGraph;
