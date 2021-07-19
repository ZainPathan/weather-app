import React from 'react';
import {
    Backdrop,
    CircularProgress
} from '@material-ui/core';

import useLoaderStyles from './styles/Loader.style';

interface LoaderProps {
    showLoader: boolean
}

const Loader = (props: LoaderProps) => {
    const classes = useLoaderStyles();
    const {
        showLoader
    } = props;

    return (
        <div>
            <Backdrop
                className={classes.backdrop}
                open={showLoader}
            >
                <CircularProgress
                    color="inherit"
                />
                <div
                    className={classes.loadingText}
                >
                    Loading...
                </div>
            </Backdrop>
        </div>
    );
};

export default Loader;