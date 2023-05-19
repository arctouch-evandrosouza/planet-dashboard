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

export default function MassSolidChart({ planets }: { planets: PlanetInterface[] }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const solidPlanet = planets.filter((planet: PlanetInterface) => planet.type == "Solid")

  const planetNames = solidPlanet.map((p) => p.name);

  const labels = planetNames; 

  const data = {
    labels,
    datasets: [
      {
        label: "Mass (10^24kg)",
        data: solidPlanet.map((p) => p.info.mass.value), 
        backgroundColor: "rgba(120, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div>
        <Bar options={options} data={data} />
    </div>
  );
}
