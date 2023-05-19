import { PlanetInterface } from "@/interfaces/planetsInterface";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export default function SizeSolidChart({ planets }: { planets: PlanetInterface[] }) {
    const options = {
        indexAxis: 'y' as const,
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right' as const,
          },
          title: {
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
        label: 'Diameter (km)',
        data: solidPlanet.map((p) => p.info.diameter.value), 
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Mass (10^24kg)',
        data: solidPlanet.map((p) => p.info.mass.value*1000), 
        borderColor: 'rgb(53, 162, 235)',
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
 