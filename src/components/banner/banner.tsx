import { PlanetInterface } from '@/interfaces/planetsInterface'
import Link from 'next/link';
import Search from '../search/search'
import styles from './banner.module.scss'
import PropTypes from 'prop-types';

interface BannerProps {
  showSideBar: boolean, setShowSidebar: Function, planets: PlanetInterface[]
}

Banner.propTypes = {
  showSideBar: PropTypes.bool,
  setShowSidebar: PropTypes.func,
  planets: PropTypes.array
};

export default function Banner({ showSideBar, setShowSidebar, planets }: BannerProps) {


  const handleClick = () => {
    setShowSidebar((showSideBar: boolean) => !showSideBar);
  };
  return <header className={styles.banner}>
    <div className={`${styles.banner__wrap} ${styles.container_full}`}>
      <Link href={'/'} title="Home" className={styles.banner__logo}><h2>
        <i className="fa-solid fa-rocket" ></i> Planet Data Dashboard</h2>
      </Link>
      <Search planets={planets} />
    </div>
    <div>
      <div className={styles['banner__mobile-menu']}>
        <i className={`fa-solid ${showSideBar ? "fa-close" : "fa-bars"}`} onClick={handleClick} ></i>
      </div>
    </div>
  </header>
}
