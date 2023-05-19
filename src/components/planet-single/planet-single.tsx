import { PlanetInterface } from '@/interfaces/planetsInterface'
import Content from '../content/content';
import InfoBox from '../info-box/info-box';
import SeeMore from "@/components/see-more/see-more";
import styles from './planet-single.module.scss'
import PropTypes from 'prop-types';

interface PlanetSingleProps {
  planet: PlanetInterface,
  planetsSeeMore: PlanetInterface[]
}

PlanetSingle.propTypes = {
  planet: PropTypes.object,
  planetsSeeMore: PropTypes.array,
}; 

export default function PlanetSingle({ planet, planetsSeeMore }: PlanetSingleProps) {

  return <>
<div className="row">
<Content title={planet.name}>
  <div className={styles.info}>
    <div className={styles['image-container']}>
      <picture>

        <img
          src={`../../../images/${planet.slug}.jpeg`}
          alt={planet.name}
        />
      </picture>
    </div>

    <div className={styles.info_blocks}>
      <InfoBox
        title="Position Order"
        value={planet.id}
        icon="fa-solid fa-location-dot"
      />

      <InfoBox
        title="Temperature"
        value={planet.info.mean_temperature.value + "°C"}
        icon="fa-solid fa-temperature-quarter"
      />

      <InfoBox
        title="Number of Moons"
        value={planet.info.number_of_moons.value}
        icon="fa-solid fa-moon"
      />

      <InfoBox
        title="Distance from Sun"
        value={`${planet.info.distance_from_sun.value} MM Km`}
        icon="fa-solid fa-sun"
      />

      <InfoBox
        title="Magnetic Field"
        value={planet.info.global_magnetic_field.value}
        icon="fa-solid fa-atom"
      />

      <InfoBox
        title="Ring System"
        value={planet.info.ring_system.value}
        icon="fa-solid fa-ring"
      />

      <InfoBox
        title="Diameter"
        value={`${planet.info.diameter.value} Km`}
        icon="fa-solid fa-globe"
      />

      <InfoBox
        title="Orbital Period (Year)"
        value={`${planet.info.orbital_period.value} Days`}
        icon="fa-solid fa-calendar-days"
      />

      <InfoBox
        title="Length of Day"
        value={`${planet.info.length_of_day.value} Hours`}
        icon="fa-solid fa-clock"
      />
    </div>
  </div>
</Content>
</div>

<SeeMore planetsSeeMore={planetsSeeMore} />
  </>
}