
import { PlanetInterface } from '@/interfaces/planetsInterface'
import Content from '../content/content'
import PlanetThumb from '../planet-thumb/planet-thumb'
import styles from './see-more.module.scss'
import PropTypes from 'prop-types';

interface SeeMoreProps {
  planetsSeeMore: PlanetInterface[]
}

SeeMore.propTypes = {
  planetsSeeMore: PropTypes.array,
}; 

export default function SeeMore({ planetsSeeMore }: SeeMoreProps) {
  return <>
  <div className={styles["row"]}>
            <h3>See more...</h3>
          </div>
          <div className={styles["row__row-see-more"]} id="see-more">
            {planetsSeeMore.map((planet: PlanetInterface) => (
              <Content key={planet.id} title={planet.name}  >
                <PlanetThumb planet={planet} />
              </Content>
            ))}
          </div>
  </>
}
