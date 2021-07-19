import {
    UPDATE_CURRENT_CARD,
    UPDATE_MAX_CARD_COUNT
} from './types';

export const updateCurrentCard = (payload: number) => ({
    type: UPDATE_CURRENT_CARD,
    payload
});

export const updateMaxCardCount = (payload: number) => ({
    type: UPDATE_MAX_CARD_COUNT,
    payload
});