import { WeatherDataAction } from './actions';
import {
    GET_WEATHER_DATA_REQUEST_FAIL,
    GET_WEATHER_DATA_REQUEST_START,
    GET_WEATHER_DATA_REQUEST_SUCCESS
} from './types';

type WeatherDataState = {
    loadingState: string,
    weatherData: any
};

const INITIAL_STATE: WeatherDataState = {
    loadingState: 'UNINITIALIZED',
    weatherData: null
};

export const reducer = (
    state: WeatherDataState = INITIAL_STATE,
    action: WeatherDataAction
) : WeatherDataState => {
    switch(action.type) {
        case GET_WEATHER_DATA_REQUEST_START:
            return {
                ...state,
                loadingState: 'LOADING'
            };
        case GET_WEATHER_DATA_REQUEST_FAIL:
            return {
                ...state,
                loadingState: 'ERROR'
            }
        case GET_WEATHER_DATA_REQUEST_SUCCESS:
            return {
                ...state,
                loadingState: 'LOADED',
                weatherData: action?.payload
            }
        default:
            return state;
    }
};