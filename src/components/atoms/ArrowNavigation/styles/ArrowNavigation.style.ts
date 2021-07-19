import { makeStyles } from '@material-ui/core';

const useArrowNavigationStyles = makeStyles({
    arrowNavigation: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        '& .MuiSvgIcon-root': {
            width: '1.5em',
            height: '1.5em',
            cursor: 'pointer',
            color: '#3f51b5'
        }
    },
    backArrow: {
        justifyContent: 'flex-start',
        order: 1
    },
    forwardArrow: {
        justifyContent: 'flex-end',
        order: 2
    },
    hideIcon: {
        visibility: 'hidden'
    },
    disableArrow: {
        cursor: 'not-allowed !important',
        pointerEvents: 'all'
    }
});

export default useArrowNavigationStyles;