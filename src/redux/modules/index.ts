import { combineReducers } from 'redux';

import { reducer as weather } from './weather';
import { reducer as temperature } from './temperature';
import { reducer as navigation } from './navigation';

const reducer = combineReducers({
    weather,
    temperature,
    navigation
});

export const rootReducer = (state: any, action: any) => {
    return reducer(state, action);
};

export type ReducerState = ReturnType<typeof rootReducer>