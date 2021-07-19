import React from 'react';
import renderer from 'react-test-renderer';
import WeatherDetailsSection from './WeatherDetailsSection';
import { mockWeatherData } from '../../../core/mock/mockWeatherData';

describe('WeatherDetailsSection component tests', () => {
    const mock = {
        currentCardIndex: 1,
        temperatureUnit: 'fahrenheit',
        weatherData: mockWeatherData
    }

    it('renders properly', () => {
        const tree = renderer
            .create(
                <WeatherDetailsSection
                    weatherData={mock.weatherData}
                    temperatureUnit={mock.temperatureUnit}
                    currentCardIndex={mock.currentCardIndex}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
