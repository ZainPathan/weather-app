import React from 'react';
import {
    Grid,
} from '@material-ui/core';
import useWeatherDetailsSectionStyles from './styles/WeatherDetailsSection.style';
import WeatherCard from '../../molecules/WeatherCard';
import {
    convertTemperatureToCelsius,
    convertTempFromCelsiusToFahrenheit
} from '../../../core/utils/TemperatureConversions';
import {
    CELSIUS_SYMBOL,
    FAHRENHEIT_SYMBOL
} from '../../../core/constants';
import useWindowDimensions from '../../../core/hooks/useWindowDimensions';
import { GetCardsIndexList } from '../../../core/utils/GetCardsIndexList';

interface WeatherDetailsSectionProps {
    weatherData: any,
    temperatureUnit: string,
    currentCardIndex: number
}

const WeatherDetailsSection = ({weatherData, temperatureUnit, currentCardIndex}: WeatherDetailsSectionProps) => {

    const classes = useWeatherDetailsSectionStyles();
    const { width } = useWindowDimensions();
    const cardsIndexList = GetCardsIndexList(
                                width,
                                currentCardIndex,
                                weatherData ? Object.keys(weatherData).length : 0
                           );

    const currentWeatherCards = weatherData &&
        Object.keys(weatherData).map((date, index) => {
            const totalTemperatures = weatherData[date].temperature,
                count = weatherData[date].count,
                temperatureInKelvin = (totalTemperatures/count).toFixed(2),
                temperatureInCelsius = convertTemperatureToCelsius(temperatureInKelvin),
                temperatureInFahrenheit = convertTempFromCelsiusToFahrenheit(temperatureInCelsius), // (temperatureInCelsius * 9/5 + 32),
                weatherDate = weatherData[date].dateString,
                temperatureDetails = temperatureUnit === 'celsius' ?
                                        `${temperatureInCelsius}${CELSIUS_SYMBOL}` :
                                            `${temperatureInFahrenheit}${FAHRENHEIT_SYMBOL}`;

            const showCard = cardsIndexList.includes(index);

            return showCard ? (
                <WeatherCard
                    key={date}
                    currentCardIndex={currentCardIndex}
                    weatherDate={weatherDate}
                    temperatureDetails={temperatureDetails}
                    index={index}
                />
            ) : null
    });

    return (
        <Grid
            item
            xs={12}
            className={classes.weatherCards}
        >
            {currentWeatherCards}
        </Grid>
    );
};

export default WeatherDetailsSection;