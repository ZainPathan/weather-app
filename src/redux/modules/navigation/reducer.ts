import {
    UPDATE_CURRENT_CARD,
    NavigationAction, UPDATE_MAX_CARD_COUNT
} from './types';
import moment from 'moment';

type NavigationState = {
    currentCardDate: string,
    currentCardIndex: number,
    maxCardCount: number
};

const INITIAL_STATE: NavigationState = {
    currentCardDate: moment().format('YYYY-MM-DD'),
    currentCardIndex: 0,
    maxCardCount: 0
};

export const reducer = (
    state: NavigationState = INITIAL_STATE,
    action: NavigationAction
) : NavigationState => {
    switch(action.type) {
        case UPDATE_CURRENT_CARD:
            return {
                ...state,
                currentCardDate: action.payload.currentCardDate || moment().format('DD-MM-YYYY'),
                currentCardIndex: action.payload.currentCardIndex || 0// ?.currentCardIndex || 0
            };
        case UPDATE_MAX_CARD_COUNT:
            return {
                ...state,
                currentCardDate: moment().format('DD-MM-YYYY'),
                maxCardCount: action?.payload || 0// ?.currentCardIndex || 0
            };
        default:
            return state;
    }
};