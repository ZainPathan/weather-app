import React from 'react';
import renderer from 'react-test-renderer';
import MainContainer from './MainContainer';
import { Provider } from "react-redux";
// import { mockWeatherData } from '../../../core/mock/mockWeatherData';

describe('MainContainer component tests', () => {
    const mock = {
        currentCardIndex: 1,
        temperatureUnit: 'fahrenheit',
        // weatherData: mockWeatherData
    }

    it('renders properly', () => {
        const tree = renderer
            .create(
                <Provider store={}>
                    <MainContainer
                    />
                </Provider>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
