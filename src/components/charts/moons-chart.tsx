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

export default function MoonsChart({ planets }: { planets: PlanetInterface[] }) {
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
        label: "Number of moons",
        data: planets.map((p) => p.info.number_of_moons.value), 
        backgroundColor: "rgba(0, 99, 132, 0.5)",
      },
       {
        label: 'Gravity',
        data: planets.map(p => p.info.surface_gravity.value),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div>
        <Bar options={options} data={data} />
    </div>
  );
}
