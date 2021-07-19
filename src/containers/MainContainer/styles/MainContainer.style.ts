import { createStyles } from '@material-ui/core';

const MainContainerStyles = () => createStyles({
    mainContainer: {
        padding: 20,
        flexGrow: 1
    },
    barGraph: {
        display: 'inline-flex',
        justifyContent: 'center',
        border: '1px solid black',
        height: 250,
        margin: '0 15px 0 15px'
    },
    errorMessage: {
        textAlign: 'center'
    },
    header: {
        textAlign: 'center',
        marginTop: 0,
        marginBottom: 10
    }
});

export default MainContainerStyles;