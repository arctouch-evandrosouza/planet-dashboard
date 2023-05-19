import React from 'react'
import {screen, render} from '@testing-library/react';
import planets from '../database/planets'
import Planet from '../pages/planet/[slug]'
import '@testing-library/jest-dom'

jest.mock('next/router', () => require('next-router-mock'));

describe("Testing Page Planet", () => {

    test('should contain planet image', async () => { 
        const selectedPlanet = planets[0]
        const planetsSeeMore = planets.filter(
            (planetData) => planetData.slug !== selectedPlanet.slug
          );
        render(<Planet planets={planets} planet={planets[0]} planetsSeeMore={planetsSeeMore} />)
        const planetImage = screen.getByAltText(selectedPlanet.name)
        expect(planetImage).toBeInTheDocument()
    });
});