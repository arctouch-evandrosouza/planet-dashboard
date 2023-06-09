//import { planetsList, planetsBySlug } from "../ /services/planetsService";
import { PlanetInterface } from "@/interfaces/planetsInterface";
import PlanetSingle from "@/components/planet-single/planet-single";
import MainPage from "@/components/main-page/main-page";
import PropTypes from 'prop-types';
import { planetsList, planetsBySlug } from "@/services/planetsService";

interface PlanetProps {
  planet: PlanetInterface;
  planets: PlanetInterface[];
  planetsSeeMore: PlanetInterface[];
}

export default function Planet({
  planet,
  planets,
  planetsSeeMore }: PlanetProps) {

  return (
      <MainPage planets={planets}>
        <PlanetSingle planet={planet} planetsSeeMore={planetsSeeMore} />
      </MainPage>
  );
}

Planet.propTypes = {
  planet: PropTypes.object,
  planets: PropTypes.array,
  planetsSeeMore: PropTypes.array
};

export async function getServerSideProps(context: any) {
  const slug = context.params.slug;
  const planet = await planetsBySlug(slug);
  const planets = await planetsList();
  const planetsSeeMore = planets.filter(
    (planetData: PlanetInterface) => planetData.slug !== context.params.slug
  );
  return { props: { planets, planet, planetsSeeMore, slug } };
}