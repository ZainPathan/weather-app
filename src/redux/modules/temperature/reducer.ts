import { TemperatureUnitAction } from './actions';
import {
    UPDATE_TEMPERATURE_UNIT
} from './types';

type TemperatureUnitState = {
    temperatureUnit: string
};

const INITIAL_STATE: TemperatureUnitState = {
    temperatureUnit: 'fahrenheit'
};

export const reducer = (
    state: TemperatureUnitState = INITIAL_STATE,
    action: TemperatureUnitAction
) : TemperatureUnitState => {
    switch(action.type) {
        case UPDATE_TEMPERATURE_UNIT:
            return {
                ...state,
                temperatureUnit: action?.payload || 'fahrenheit'
            };
        default:
            return state;
    }
};