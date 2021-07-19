import { makeStyles } from '@material-ui/core/styles';

const useLoaderStyles = makeStyles({
    backdrop: {
        zIndex: 9999,
        color: '#fff'
    },
    loadingText: {
        marginLeft: 10
    }
});

export default useLoaderStyles;