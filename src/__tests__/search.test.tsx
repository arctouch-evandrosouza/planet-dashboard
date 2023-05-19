import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import Search from '../components/search/search';
import planets from '../database/planets'
import '@testing-library/jest-dom'
import Home from '../pages/index';
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

describe("Testing Component Search", () => {

    test('loads and displays input search', async () => {
        render(<Search planets={planets} />)
        const search = screen.getByRole('textbox')
        const searchPlaceholder = search.getAttribute("placeholder");
        expect(searchPlaceholder).toBe("Search...");
    });

    test('loads and displays input search', async () => {
        render(<Home planets={planets} />)
        const planetsName = "mars"
        const expectedRoute = `/planet/${planetsName}`

        mockRouter.push("/");

        const search = screen.getByRole('textbox')
        fireEvent.change(search, {
            target: { value: planetsName }
        });

        const buttonFind = screen.getByRole('button', { name: /find/i })
        fireEvent.click(buttonFind);

        expect(mockRouter).toMatchObject({
            asPath: expectedRoute,
            pathname: expectedRoute,
            query: {},
        });
    });
});