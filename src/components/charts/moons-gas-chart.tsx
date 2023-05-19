import { PlanetInterface } from "@/interfaces/planetsInterface";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function MoonsGasChart({ planets }: { planets: PlanetInterface[] }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };
  const gasPlanet = planets.filter((planet: PlanetInterface) => planet.type == "Gas");
 
  const data = {
    labels: gasPlanet.map((p) => p.name),
    datasets: [
      {
        label: 'Number of Moons',
        data: gasPlanet.map((p) => p.info.number_of_moons.value),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Pie options={options} data={data} />
    </div>
  );
}

 