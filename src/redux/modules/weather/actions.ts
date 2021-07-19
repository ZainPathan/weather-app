import {
    GET_WEATHER_DATA_REQUEST_FAIL,
    GET_WEATHER_DATA_REQUEST_START, GET_WEATHER_DATA_REQUEST_SUCCESS

} from './types';
import { get } from '../api/actions';
import moment from 'moment';
import { updateMaxCardCount } from '../navigation/actions';
import {
    convertTemperatureToCelsius,
    convertTemperatureToFahrenheit
} from '../../../core/utils/TemperatureConversions';

const GET_WEATHER_DATA_URL: string = 'weather/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40';

export const getWeatherDataRequestStart = () => ({
    type: GET_WEATHER_DATA_REQUEST_START
});

export const getWeatherDataRequestFail = () => ({
    type: GET_WEATHER_DATA_REQUEST_FAIL
});

export const getWeatherDataRequestSuccess = (payload: any) => ({
    type: GET_WEATHER_DATA_REQUEST_SUCCESS,
    payload
});

export const getWeatherData = () => (
    dispatch: Function
) => new Promise((resolve, reject) => {
   dispatch(getWeatherDataRequestStart());

   dispatch(get(GET_WEATHER_DATA_URL)).then((response: any) => {

       let formattedData = {};

       if(response.status === 200) {
           const weatherData = response.data;
           formattedData = weatherData.list.reduce((result: any, weather: any, index: number, list: any) => {
               const momentDateObj = moment(weather.dt_txt, 'YYYY-MM-DD HH:mm:ss', true);
               const momentDate = momentDateObj.format('DD-MM-YYYY');
               const momentDateTimeHour = momentDateObj.format('HH:mm');
               const dateString = momentDateObj.format('D MMM YY');

               if(result[momentDate]) {
                   result[momentDate] = {
                       list: {
                           ...result[momentDate].list,
                           [momentDateTimeHour]: {
                               ...weather.main,
                               time: momentDateTimeHour
                           }
                       },
                       segments: [
                           ...result[momentDate].segments,
                           ...[{
                               temperatureInCelsius: convertTemperatureToCelsius(weather.main.temp),
                               temperatureInFahrenheit: convertTemperatureToFahrenheit(weather.main.temp),
                               time: momentDateTimeHour
                           }]
                       ],
                       temperature: result[momentDate].temperature += weather.main.temp,
                       minTemperature: result[momentDate].minTemperature += weather.main.temp_min,
                       maxTemperature: result[momentDate].maxTemperature += weather.main.temp_max,
                       count: result[momentDate].count += 1,
                       date: momentDate,
                       dateString
                   }
               } else {
                   result[momentDate] = {
                       list: {
                           [momentDateTimeHour]: {
                               ...weather.main,
                               time: momentDateTimeHour
                           }
                       },
                       segments: [
                           ...[{
                               temperatureInCelsius: convertTemperatureToCelsius(weather.main.temp),
                               temperatureInFahrenheit: convertTemperatureToFahrenheit(weather.main.temp),
                               time: momentDateTimeHour
                           }]
                       ],
                       temperature: weather.main.temp,
                       minTemperature: weather.main.temp_min,
                       maxTemperature: weather.main.temp_max,
                       count: 1,
                       date: momentDate,
                       dateString
                   }
               }
               return result;
           }, {});
       }

       dispatch(updateMaxCardCount(Object.keys(formattedData).length));
       dispatch(getWeatherDataRequestSuccess(formattedData));
   }).catch((error: any) => {

       dispatch(getWeatherDataRequestFail());
   });
});

export type WeatherDataAction = {
    type: string
    payload?: any
}