import { makeStyles } from '@material-ui/core';

const useWeatherDetailsSectionStyles = makeStyles({
    weatherCards: {
        // width: '100%',
        display: 'inline-flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        marginTop: 20,
        marginBottom: 20
    },
    /*weatherCard: {
        width: 225,
        height: 175,
        flex: '1 0 auto',
        margin: '0 10px 0 10px'
    },
    selectedWeatherCard: {
        border: '5px solid red'
    }*/
});

export default useWeatherDetailsSectionStyles;