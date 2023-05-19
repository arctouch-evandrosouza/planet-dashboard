import { PlanetInterface } from "@/interfaces/planetsInterface";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function TempChart({ planets }: { planets: PlanetInterface[] }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const planetNames = planets.map((p) => p.name);

  const labels = planetNames;

  const data = {
    labels,
    datasets: [
      {
        label: "Temperature",
        data: planets.map((p) => p.info.mean_temperature.value),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}
