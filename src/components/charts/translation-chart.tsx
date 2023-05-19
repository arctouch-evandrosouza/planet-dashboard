import { PlanetInterface } from "@/interfaces/planetsInterface";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2'; 
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export default function TranslationChart({ planets, title }: { planets: PlanetInterface[], title: string }) {
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
          label: "Surface Gravity (m/s^2)",
          data: planets.map((p) => p.info.surface_gravity.value),
          backgroundColor: "rgba(40, 99, 60, 0.5)",
           borderColor: 'rgb(80, 120, 70)',
        },
        {
          label: "Escape Velocity (km/s)",
          data: planets.map((p) => p.info.escape_velocity.value),
          backgroundColor: "rgba(10, 99, 132, 0.5)",
          borderColor: 'rgb(20, 120, 160)',
        },
        {
          label: "Density (kg/m^3)",
          data: planets.map((p) => p.info.density.value/100),
          backgroundColor: "rgba(10, 178, 44, 0.5)",
           borderColor: 'rgb(20, 190, 70)',
        },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} title={title}/>
    </div>
  );
}
