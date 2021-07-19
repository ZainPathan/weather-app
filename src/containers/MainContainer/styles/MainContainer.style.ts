import { createStyles } from '@material-ui/core';

const MainContainerStyles = () => createStyles({
    mainContainer: {
        // display: 'flex',
        padding: 20,
        flexGrow: 1
    },
    /*temperatureSelection: {
        display: 'inline-flex',
        justifyContent: 'center'
    },*/
    /*arrowNavigation: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        '& .MuiSvgIcon-root': {
            width: '1.5em',
            height: '1.5em',
            cursor: 'pointer'
        }
    },*/
    /*weatherCards: {
        // width: '100%',
        display: 'inline-flex',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start'
    },
    weatherCard: {
        width: 300,
        height: 200,
    },*/
    barGraph: {
        display: 'inline-flex',
        justifyContent: 'center',
        border: '1px solid black',
        height: 250,
        margin: '0 15px 0 15px'
    }
});

export default MainContainerStyles;