import {
    UPDATE_TEMPERATURE_UNIT,
} from './types';

export const updateTemperatureUnit = (payload: string) => ({
    type: UPDATE_TEMPERATURE_UNIT,
    payload
});

export type TemperatureUnitAction = {
    type: string
    payload?: string
}