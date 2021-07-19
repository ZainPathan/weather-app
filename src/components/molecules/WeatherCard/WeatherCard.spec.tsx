import React from 'react';
import renderer from 'react-test-renderer';
import WeatherCard from './WeatherCard';

describe('WeatherCard component tests', () => {
    const mock = {
        currentCardIndex: 1,
        index: 0,
        temperatureDetails: '68°F',
        weatherDate: '18 Jul 21'
    }

    it('renders properly', () => {
        const tree = renderer
            .create(
                <WeatherCard
                    currentCardIndex={mock.currentCardIndex}
                    weatherDate={mock.weatherDate}
                    temperatureDetails={mock.temperatureDetails}
                    index={mock.index}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})
