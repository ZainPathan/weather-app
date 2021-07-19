import React from 'react';
import {
    ArrowBack as ArrowBackIcon,
    ArrowForward as ArrowForwardIcon
} from '@material-ui/icons';
import { Grid } from '@material-ui/core';
import useArrowNavigationStyles from './styles/ArrowNavigation.style';
// import clsx from 'clsx';

interface ArrowNavigationProps {
    handleNavigation: Function,
    currentCardIndex: number,
    maxCardCount: number
}


const ArrowNavigation = (props: ArrowNavigationProps) => {

    const classes = useArrowNavigationStyles(props);

    const handleArrowClick = (event: React.MouseEvent, direction: string) => {
        // console.log('handleArrowClick event: ', event);
        // console.log('handleArrowClick direction: ', direction);
        switch(direction) {
            case 'back':
                if((props.currentCardIndex === 0)) {
                    event.preventDefault();
                    return null;
                }
                break;
            case 'forward':
                if((props.currentCardIndex === (props.maxCardCount - 1))) {
                    event.preventDefault();
                    return null;
                }
                break;
        }
        props.handleNavigation(direction);
    }

    // console.log('props.currentCardIndex: ', props.currentCardIndex);
    // console.log('props.currentCardIndex !== 0: ', props.currentCardIndex !== 0);
    // console.log('props.maxCardCount: ', props.maxCardCount);
    // console.log('props.currentCardIndex === (props.maxCardCount - 1): ',props.currentCardIndex === (props.maxCardCount - 1));

    return (
        <Grid
            item
            xs={12}
            className={classes.arrowNavigation}
        >
            {
                <ArrowBackIcon
                    data-testid="back-arrow"
                    className={
                        (props.currentCardIndex === 0) ?
                            classes.hideIcon : ''
                    }
                    onClick={(e: React.MouseEvent) => handleArrowClick(e, 'back')}
                />
            }
            {
                <ArrowForwardIcon
                    data-testid="forward-arrow"
                    className={
                        (props.currentCardIndex === (props.maxCardCount - 1)) ?
                            (classes.hideIcon) : ''
                    }
                    onClick={(e: React.MouseEvent) => handleArrowClick(e, 'forward')}
                />
            }
        </Grid>
    )
};

export default ArrowNavigation;