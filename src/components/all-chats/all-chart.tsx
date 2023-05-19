import { PlanetInterface } from "@/interfaces/planetsInterface";
import MassGasChart from "../charts/mass-gas-chart";
import MassSolidChart from "../charts/mass-solid-chart";
import MoonsChart from "../charts/moons-chart";
import MoonsGasChart from "../charts/moons-gas-chart";
import SizeSolidChart from "../charts/size-solid-chart";
import TempChart from "../charts/temp-chart";
import TranslationChart from "../charts/translation-chart";
import Content from "../content/content";
import styles from './all-charts.module.scss'



export default function AllCharts({ planets }: { planets: PlanetInterface[] }) {

  return (<div><div className={styles.row}>
            <Content title="Translation vs Orbit" >
              {<TranslationChart planets={planets} title="Translation vs Orbit"/>}
            </Content>
          </div>
          
          <div className={styles.row}>
            <Content title="Temperature" >
              <TempChart planets={planets} />
            </Content>
            <Content title="Moons vs Gravity" >
              <MoonsChart planets={planets} />
            </Content>
          </div>

          <div className={styles.row}>
            <Content title="Mass Solid" >
              <MassSolidChart planets={planets} />
            </Content>
            <Content title="Mass Gas" >
              <MassGasChart planets={planets} />
            </Content>
          </div>

          <div className={styles.row}>
            <Content title="Number of Moons Gas Planets" >
              <MoonsGasChart planets={planets} />
            </Content>
            <Content title="Size vs Mas Solid Planets" >
              <SizeSolidChart planets={planets} />
            </Content>
          </div>
  </div>)
}


