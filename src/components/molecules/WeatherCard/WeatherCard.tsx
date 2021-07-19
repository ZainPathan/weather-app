import React from 'react';
import {
    Card,
    CardContent,
    Typography
} from '@material-ui/core';
import clsx from 'clsx';
import useWeatherCardStyles from './styles/WeatherCard.style';

interface WeatherCardProps {
    currentCardIndex: number,
    weatherDate: string,
    temperatureDetails: string,
    index: number
}

const WeatherCard = ({currentCardIndex, weatherDate, temperatureDetails, index}: WeatherCardProps) => {
    const classes = useWeatherCardStyles();

    return (
        <Card
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
                </Typography>
                <br/>
                <Typography
                    variant="h5"
                    component="h2"
                >
                    Date: {weatherDate}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default WeatherCard;
// export {};