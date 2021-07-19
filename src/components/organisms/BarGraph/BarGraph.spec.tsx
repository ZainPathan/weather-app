import React from 'react';
import renderer from 'react-test-renderer';
import BarGraph from './BarGraph';
import { mockWeatherData } from '../../../core/mock/mockWeatherData';

describe('BarGraph component tests', () => {
    const mock = {
        currentCardDate: '19-07-2021',
        temperatureUnit: 'fahrenheit',
        weatherData: mockWeatherData
    }

    it('renders properly', () => {
        const tree = renderer
            .create(
                <BarGraph
                    weatherData={mock.weatherData}
                    currentCardDate={mock.currentCardDate}
                    temperatureUnit={mock.temperatureUnit}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
