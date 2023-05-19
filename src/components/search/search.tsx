'use client';

import { useRouter } from 'next/router';
import styles from './search.module.scss' 
import { PlanetInterface } from '@/interfaces/planetsInterface';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

interface SearchProps {
  planets: PlanetInterface[]
}

Search.propTypes = {
  planets: PropTypes.array,
}; 


export default function Search({ planets }: SearchProps) {
  const router = useRouter()
  // const [routerReady, setRouterReady] = useState(false)
   const [searchString, setSearchString] = useState('')

  // useEffect(() => {
  //   if(router.isReady){
  //     setRouterReady(true)
  //   }
  // }, [router.isReady])

  // if(!routerReady) return null

 
  const handleClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const planetNames = planets.filter((planet: PlanetInterface) => planet.name.toLowerCase() === searchString.toLowerCase());  
    if(planetNames.length > 0) {
      router.push(`/planet/${searchString.toLowerCase()}`)
    } else{
      alert('Planet not found')
    }
  }

  return <>
    <div className={styles["banner-search"]}>
      <input placeholder='Search...' value={searchString} type="text" onChange={(e) => setSearchString(e.target.value)} />
      <button onClick={handleClick}> Find </button>
    </div>
  </>
}
