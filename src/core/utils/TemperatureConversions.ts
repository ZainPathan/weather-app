export const convertTemperatureToCelsius = (temperatureInKelvin: string) => {
    return (parseInt(temperatureInKelvin) - 273);
}

export const convertTempFromCelsiusToFahrenheit = (temperatureInCelsius: number) => {
    return ((temperatureInCelsius * 9/5 + 32));
}

export const convertTemperatureToFahrenheit = (temperatureInKelvin: string) => {
    return convertTempFromCelsiusToFahrenheit(convertTemperatureToCelsius(temperatureInKelvin));
}