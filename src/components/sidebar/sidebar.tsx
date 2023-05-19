import styles from './sidebar.module.scss'
import Link from 'next/link'
import Title from '../title/title'
import { PlanetInterface } from '@/interfaces/planetsInterface';
import PropTypes from 'prop-types';

interface SidebarProps {
  showSideBar: boolean,
  planets: PlanetInterface[],
  slug: string
}

Sidebar.propTypes = {
  showSideBar: PropTypes.bool,
  planets: PropTypes.array,
  slug: PropTypes.string
}; 

export default function Sidebar({ showSideBar, planets, slug }: SidebarProps) {
  return <aside className={`${styles.sidebar} ${showSideBar ? 'show' : 'hidden'}`}>
    <div className="flex">
      <Title title={"Menu"} />
    </div>
    <ul>
      <li><Link href="/" className={slug == "home" ? styles.active : ''} title={`Home`}>Home</Link></li>
      {planets.map((planet: PlanetInterface) => (<li key={planet.id} ><Link href={`/planet/${planet.slug}`} title={`Visit ${planet.name}`} className={slug == planet.slug ? styles.active : ''} >{planet.name}</Link></li>))}
    </ul>
  </aside>
}


