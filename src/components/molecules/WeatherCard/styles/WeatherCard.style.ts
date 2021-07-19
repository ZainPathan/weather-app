import { makeStyles } from '@material-ui/core';

const useWeatherCardStyles = makeStyles({
    weatherCard: {
        width: 225,
        height: 175,
        flex: '1 0 auto',
        margin: '0 10px 0 10px'
    },
    selectedWeatherCard: {
        border: '5px solid red'
    }
});

export default useWeatherCardStyles;