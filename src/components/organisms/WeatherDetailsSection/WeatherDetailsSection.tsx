import React from 'react';
import {
    // Button,
    // Card,
    // CardActions,
    // CardContent,
    Grid,
    // Typography
} from '@material-ui/core';
// import clsx from 'clsx';
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
import { getCardsIndexList } from '../../../core/utils/getCardsIndexList';

interface WeatherDetailsSectionProps {
    weatherData: any,
    temperatureUnit: string,
    currentCardIndex: number
}

const WeatherDetailsSection = ({weatherData, temperatureUnit, currentCardIndex}: WeatherDetailsSectionProps) => {

    const classes = useWeatherDetailsSectionStyles();
    const { width } = useWindowDimensions();
    const cardsIndexList = getCardsIndexList(
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
                /*<Card
                    key={date}
                    variant="outlined"
                    className={
                        (currentCardIndex === index ) ?
                            clsx(classes.weatherCard, classes.selectedWeatherCard) :
                                classes.weatherCard
                    }
                >
                    <CardContent>
                        <Typography
                            variant="h5"
                            component="h2"
                        >
                            Temperature:&nbsp;
                            {temperatureDetails}
                            {/!*<br/>
                            <br/>
                            Date: {weatherDate}*!/}
                        </Typography>
                        <br/>
                        <Typography
                            variant="h5"
                            component="h2"
                        >
                            Date: {weatherDate}
                        </Typography>
                    </CardContent>
                </Card>*/
            ) : null
    });

    return (
        <Grid
            item
            xs={12}
            className={classes.weatherCards}
        >
            {currentWeatherCards}
            {/*<Card
                variant="outlined"
                className={classes.weatherCard}
            >
                <CardContent>
                    <Typography
                        variant="h5"
                        component="h2"
                    >
                        Weather Data
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        onClick={() => {
                            // handleSensorButtonClick(sensorData);
                        }}
                        size="large"
                    >
                        Button text
                    </Button>
                </CardActions>
            </Card>
            <Card
                variant="outlined"
                className={classes.weatherCard}
            >
                <CardContent>
                    <Typography
                        variant="h5"
                        component="h2"
                    >
                        Weather Data
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        onClick={() => {
                            // handleSensorButtonClick(sensorData);
                        }}
                        size="large"
                    >
                        Button text
                    </Button>
                </CardActions>
            </Card>
            <Card
                variant="outlined"
                className={classes.weatherCard}
            >
                <CardContent>
                    <Typography
                        variant="h5"
                        component="h2"
                    >
                        Weather Data
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        onClick={() => {
                            // handleSensorButtonClick(sensorData);
                        }}
                        size="large"
                    >
                        Button text
                    </Button>
                </CardActions>
            </Card>*/}
        </Grid>
    );
};

export default WeatherDetailsSection;