import useWindowSize from "../../hooks/useWindowSize";
import { PlanetInterface } from "../../interfaces/planetsInterface";
import { ReactNode, useState, useRef, useEffect } from "react";
import Banner from "../banner/banner";
import Header from "../header/header";
import Sidebar from "../sidebar/sidebar";
import styles from './main-page.module.scss'
import PropTypes from 'prop-types';

interface MainPageProps {
  children: ReactNode,
  planets: PlanetInterface[]
}

MainPage.propTypes = {
  children: PropTypes.node,
  planets: PropTypes.array,
};

export default function MainPage({ children, planets }: MainPageProps) {

  const { width } = useWindowSize();

  const setWidth = width ? width : 1600

  const showSideBarByWidth = setWidth > 720 ? true : false;

  const [showSideBar, setShowSidebar] = useState(true);
  useEffect(() => {
    setShowSidebar(showSideBarByWidth)
  }, [showSideBarByWidth])

  return <>
    <Header />
    <Banner planets={planets} showSideBar={showSideBar} setShowSidebar={setShowSidebar} />
      <main className={styles['container-full']}>
        <Sidebar showSideBar={showSideBar} planets={planets} slug={"home"} />
        <div className={styles['container-full__container-content']}>
          {children}
        </div>
      </main>
  </>
}
