
import { planetsList } from '../services/planetsService'
import AllCharts from '../components/all-chats/all-chart'
import MainPage from "../components/main-page/main-page"; 

import PropTypes from 'prop-types';
import { PlanetInterface } from '@/interfaces/planetsInterface';

interface HomePageProps {
  planets: PlanetInterface[]
}

Home.propTypes = {
  planets: PropTypes.array,
};

export default function Home({ planets }: HomePageProps) {
  return (
      <MainPage planets={planets}><AllCharts planets={planets} /></MainPage>
  )
}

export async function getServerSideProps() {
  const response = await planetsList();
  return {
      props: {
          planets: response
      }
  }
}