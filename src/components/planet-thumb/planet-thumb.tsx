
import { PlanetInterface } from '@/interfaces/planetsInterface'
import styles from './planet-thumb.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types';

interface PlanetThumbProps {
  planet: PlanetInterface
}

PlanetThumb.propTypes = {
  planet: PropTypes.object,
}; 

export default function PlanetThumb({ planet }: PlanetThumbProps) {
  return <div className={styles.planet_thumb}>
    <Link href={`/planet/${planet.slug}`} title={`See more about ${planet.name}`}>
      <div className={styles['image-container']}>
      <picture>
        <img
          src={`../../../images/${planet.slug}.jpeg`}
          alt={planet.name}
        />
      </picture>
    </div>
    </Link>
     <h4>{planet.name}</h4>
  </div>
}
