export function handler(event, context, callback) {
    callback(null, JSON.stringify({
        statusCode: 200,
        body: {
            "cod": "200",
            "message": 0,
            "cnt": 40,
            "list": [
                {
                    "dt": 1625400000,
                    "main": {
                        "temp": 295.23,
                        "feels_like": 295.19,
                        "temp_min": 295.23,
                        "temp_max": 296.49,
                        "pressure": 1013,
                        "sea_level": 1013,
                        "grnd_level": 950,
                        "humidity": 65,
                        "temp_kf": -1.26
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 95
                    },
                    "wind": {
                        "speed": 0.8,
                        "deg": 333,
                        "gust": 1.59
                    },
                    "visibility": 10000,
                    "pop": 0.61,
                    "rain": {
                        "3h": 0.28
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-04 12:00:00"
                },
                {
                    "dt": 1625410800,
                    "main": {
                        "temp": 294.6,
                        "feels_like": 294.68,
                        "temp_min": 293.34,
                        "temp_max": 294.6,
                        "pressure": 1012,
                        "sea_level": 1012,
                        "grnd_level": 950,
                        "humidity": 72,
                        "temp_kf": 1.26
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 97
                    },
                    "wind": {
                        "speed": 2.11,
                        "deg": 332,
                        "gust": 3.61
                    },
                    "visibility": 10000,
                    "pop": 1,
                    "rain": {
                        "3h": 1.46
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-04 15:00:00"
                },
                {
                    "dt": 1625421600,
                    "main": {
                        "temp": 290.76,
                        "feels_like": 290.85,
                        "temp_min": 288.52,
                        "temp_max": 290.76,
                        "pressure": 1012,
                        "sea_level": 1012,
                        "grnd_level": 951,
                        "humidity": 87,
                        "temp_kf": 2.24
                    },
                    "weather": [
                        {
                            "id": 501,
                            "main": "Rain",
                            "description": "moderate rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 98
                    },
                    "wind": {
                        "speed": 5.46,
                        "deg": 279,
                        "gust": 11.14
                    },
                    "visibility": 8260,
                    "pop": 1,
                    "rain": {
                        "3h": 4.57
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-04 18:00:00"
                },
                {
                    "dt": 1625432400,
                    "main": {
                        "temp": 287.3,
                        "feels_like": 287.3,
                        "temp_min": 287.3,
                        "temp_max": 287.3,
                        "pressure": 1015,
                        "sea_level": 1015,
                        "grnd_level": 954,
                        "humidity": 97,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 501,
                            "main": "Rain",
                            "description": "moderate rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 4.83,
                        "deg": 261,
                        "gust": 10.57
                    },
                    "visibility": 8801,
                    "pop": 1,
                    "rain": {
                        "3h": 7.2
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2021-07-04 21:00:00"
                },
                {
                    "dt": 1625443200,
                    "main": {
                        "temp": 286.75,
                        "feels_like": 286.65,
                        "temp_min": 286.75,
                        "temp_max": 286.75,
                        "pressure": 1015,
                        "sea_level": 1015,
                        "grnd_level": 954,
                        "humidity": 95,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 3.52,
                        "deg": 253,
                        "gust": 10.96
                    },
                    "visibility": 10000,
                    "pop": 1,
                    "rain": {
                        "3h": 1.08
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2021-07-05 00:00:00"
                },
                {
                    "dt": 1625454000,
                    "main": {
                        "temp": 285.04,
                        "feels_like": 284.82,
                        "temp_min": 285.04,
                        "temp_max": 285.04,
                        "pressure": 1015,
                        "sea_level": 1015,
                        "grnd_level": 954,
                        "humidity": 97,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 2.19,
                        "deg": 232,
                        "gust": 5.76
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2021-07-05 03:00:00"
                },
                {
                    "dt": 1625464800,
                    "main": {
                        "temp": 287.64,
                        "feels_like": 287.49,
                        "temp_min": 287.64,
                        "temp_max": 287.64,
                        "pressure": 1015,
                        "sea_level": 1015,
                        "grnd_level": 954,
                        "humidity": 90,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 2.34,
                        "deg": 231,
                        "gust": 5.65
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-05 06:00:00"
                },
                {
                    "dt": 1625475600,
                    "main": {
                        "temp": 292.85,
                        "feels_like": 292.52,
                        "temp_min": 292.85,
                        "temp_max": 292.85,
                        "pressure": 1014,
                        "sea_level": 1014,
                        "grnd_level": 954,
                        "humidity": 63,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 93
                    },
                    "wind": {
                        "speed": 2.69,
                        "deg": 262,
                        "gust": 4.7
                    },
                    "visibility": 10000,
                    "pop": 0.02,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-05 09:00:00"
                },
                {
                    "dt": 1625486400,
                    "main": {
                        "temp": 292.25,
                        "feels_like": 291.99,
                        "temp_min": 292.25,
                        "temp_max": 292.25,
                        "pressure": 1014,
                        "sea_level": 1014,
                        "grnd_level": 954,
                        "humidity": 68,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 97
                    },
                    "wind": {
                        "speed": 3.02,
                        "deg": 279,
                        "gust": 5.35
                    },
                    "visibility": 10000,
                    "pop": 0.08,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-05 12:00:00"
                },
                {
                    "dt": 1625497200,
                    "main": {
                        "temp": 288.12,
                        "feels_like": 287.97,
                        "temp_min": 288.12,
                        "temp_max": 288.12,
                        "pressure": 1015,
                        "sea_level": 1015,
                        "grnd_level": 954,
                        "humidity": 88,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 3.02,
                        "deg": 268,
                        "gust": 9.75
                    },
                    "visibility": 10000,
                    "pop": 0.21,
                    "rain": {
                        "3h": 0.33
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-05 15:00:00"
                },
                {
                    "dt": 1625508000,
                    "main": {
                        "temp": 287.45,
                        "feels_like": 287.34,
                        "temp_min": 287.45,
                        "temp_max": 287.45,
                        "pressure": 1015,
                        "sea_level": 1015,
                        "grnd_level": 954,
                        "humidity": 92,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 1.77,
                        "deg": 197,
                        "gust": 4.43
                    },
                    "visibility": 10000,
                    "pop": 0.22,
                    "rain": {
                        "3h": 0.39
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-05 18:00:00"
                },
                {
                    "dt": 1625518800,
                    "main": {
                        "temp": 286.85,
                        "feels_like": 286.63,
                        "temp_min": 286.85,
                        "temp_max": 286.85,
                        "pressure": 1016,
                        "sea_level": 1016,
                        "grnd_level": 955,
                        "humidity": 90,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 99
                    },
                    "wind": {
                        "speed": 1.89,
                        "deg": 177,
                        "gust": 2.13
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2021-07-05 21:00:00"
                },
                {
                    "dt": 1625529600,
                    "main": {
                        "temp": 286.1,
                        "feels_like": 285.77,
                        "temp_min": 286.1,
                        "temp_max": 286.1,
                        "pressure": 1015,
                        "sea_level": 1015,
                        "grnd_level": 954,
                        "humidity": 89,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 77
                    },
                    "wind": {
                        "speed": 1.72,
                        "deg": 148,
                        "gust": 1.73
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2021-07-06 00:00:00"
                },
                {
                    "dt": 1625540400,
                    "main": {
                        "temp": 285.67,
                        "feels_like": 285.33,
                        "temp_min": 285.67,
                        "temp_max": 285.67,
                        "pressure": 1014,
                        "sea_level": 1014,
                        "grnd_level": 953,
                        "humidity": 90,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01n"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 2.24,
                        "deg": 140,
                        "gust": 2.79
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2021-07-06 03:00:00"
                },
                {
                    "dt": 1625551200,
                    "main": {
                        "temp": 290.66,
                        "feels_like": 290.53,
                        "temp_min": 290.66,
                        "temp_max": 290.66,
                        "pressure": 1013,
                        "sea_level": 1013,
                        "grnd_level": 952,
                        "humidity": 79,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 2.62,
                        "deg": 124,
                        "gust": 5.51
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-06 06:00:00"
                },
                {
                    "dt": 1625562000,
                    "main": {
                        "temp": 297.83,
                        "feels_like": 297.79,
                        "temp_min": 297.83,
                        "temp_max": 297.83,
                        "pressure": 1011,
                        "sea_level": 1011,
                        "grnd_level": 952,
                        "humidity": 55,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 4.34,
                        "deg": 104,
                        "gust": 6.18
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-06 09:00:00"
                },
                {
                    "dt": 1625572800,
                    "main": {
                        "temp": 301.3,
                        "feels_like": 301.5,
                        "temp_min": 301.3,
                        "temp_max": 301.3,
                        "pressure": 1009,
                        "sea_level": 1009,
                        "grnd_level": 951,
                        "humidity": 47,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 4.69,
                        "deg": 87,
                        "gust": 5.6
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-06 12:00:00"
                },
                {
                    "dt": 1625583600,
                    "main": {
                        "temp": 301.14,
                        "feels_like": 302.16,
                        "temp_min": 301.14,
                        "temp_max": 301.14,
                        "pressure": 1009,
                        "sea_level": 1009,
                        "grnd_level": 951,
                        "humidity": 56,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "scattered clouds",
                            "icon": "03d"
                        }
                    ],
                    "clouds": {
                        "all": 44
                    },
                    "wind": {
                        "speed": 4.24,
                        "deg": 54,
                        "gust": 5.44
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-06 15:00:00"
                },
                {
                    "dt": 1625594400,
                    "main": {
                        "temp": 296.74,
                        "feels_like": 297.22,
                        "temp_min": 296.74,
                        "temp_max": 296.74,
                        "pressure": 1011,
                        "sea_level": 1011,
                        "grnd_level": 952,
                        "humidity": 79,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 71
                    },
                    "wind": {
                        "speed": 2.92,
                        "deg": 339,
                        "gust": 6.81
                    },
                    "visibility": 10000,
                    "pop": 0.26,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-06 18:00:00"
                },
                {
                    "dt": 1625605200,
                    "main": {
                        "temp": 291.59,
                        "feels_like": 291.79,
                        "temp_min": 291.59,
                        "temp_max": 291.59,
                        "pressure": 1014,
                        "sea_level": 1014,
                        "grnd_level": 954,
                        "humidity": 88,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 64
                    },
                    "wind": {
                        "speed": 3.3,
                        "deg": 328,
                        "gust": 8.63
                    },
                    "visibility": 10000,
                    "pop": 0.53,
                    "rain": {
                        "3h": 0.24
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2021-07-06 21:00:00"
                },
                {
                    "dt": 1625616000,
                    "main": {
                        "temp": 289.85,
                        "feels_like": 290.03,
                        "temp_min": 289.85,
                        "temp_max": 289.85,
                        "pressure": 1016,
                        "sea_level": 1016,
                        "grnd_level": 956,
                        "humidity": 94,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 58
                    },
                    "wind": {
                        "speed": 2.76,
                        "deg": 294,
                        "gust": 7.38
                    },
                    "visibility": 10000,
                    "pop": 0.53,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2021-07-07 00:00:00"
                },
                {
                    "dt": 1625626800,
                    "main": {
                        "temp": 289.56,
                        "feels_like": 289.66,
                        "temp_min": 289.56,
                        "temp_max": 289.56,
                        "pressure": 1017,
                        "sea_level": 1017,
                        "grnd_level": 956,
                        "humidity": 92,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04n"
                        }
                    ],
                    "clouds": {
                        "all": 91
                    },
                    "wind": {
                        "speed": 2.14,
                        "deg": 288,
                        "gust": 4.81
                    },
                    "visibility": 10000,
                    "pop": 0.07,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2021-07-07 03:00:00"
                },
                {
                    "dt": 1625637600,
                    "main": {
                        "temp": 289.84,
                        "feels_like": 289.94,
                        "temp_min": 289.84,
                        "temp_max": 289.84,
                        "pressure": 1018,
                        "sea_level": 1018,
                        "grnd_level": 957,
                        "humidity": 91,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 95
                    },
                    "wind": {
                        "speed": 1.24,
                        "deg": 288,
                        "gust": 2.15
                    },
                    "visibility": 10000,
                    "pop": 0.06,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-07 06:00:00"
                },
                {
                    "dt": 1625648400,
                    "main": {
                        "temp": 291.4,
                        "feels_like": 291.42,
                        "temp_min": 291.4,
                        "temp_max": 291.4,
                        "pressure": 1018,
                        "sea_level": 1018,
                        "grnd_level": 958,
                        "humidity": 82,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 2.21,
                        "deg": 337,
                        "gust": 3.41
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-07 09:00:00"
                },
                {
                    "dt": 1625659200,
                    "main": {
                        "temp": 294.62,
                        "feels_like": 294.65,
                        "temp_min": 294.62,
                        "temp_max": 294.62,
                        "pressure": 1017,
                        "sea_level": 1017,
                        "grnd_level": 958,
                        "humidity": 70,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 98
                    },
                    "wind": {
                        "speed": 2.63,
                        "deg": 30,
                        "gust": 3.17
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-07 12:00:00"
                },
                {
                    "dt": 1625670000,
                    "main": {
                        "temp": 294.6,
                        "feels_like": 294.76,
                        "temp_min": 294.6,
                        "temp_max": 294.6,
                        "pressure": 1018,
                        "sea_level": 1018,
                        "grnd_level": 958,
                        "humidity": 75,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 1.97,
                        "deg": 331,
                        "gust": 3.53
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-07 15:00:00"
                },
                {
                    "dt": 1625680800,
                    "main": {
                        "temp": 291.66,
                        "feels_like": 291.89,
                        "temp_min": 291.66,
                        "temp_max": 291.66,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 959,
                        "humidity": 89,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 2.88,
                        "deg": 323,
                        "gust": 6.63
                    },
                    "visibility": 10000,
                    "pop": 0.26,
                    "rain": {
                        "3h": 0.25
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-07 18:00:00"
                },
                {
                    "dt": 1625691600,
                    "main": {
                        "temp": 290.24,
                        "feels_like": 290.54,
                        "temp_min": 290.24,
                        "temp_max": 290.24,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 960,
                        "humidity": 97,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 1.06,
                        "deg": 276,
                        "gust": 1.27
                    },
                    "visibility": 10000,
                    "pop": 0.75,
                    "rain": {
                        "3h": 2.01
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2021-07-07 21:00:00"
                },
                {
                    "dt": 1625702400,
                    "main": {
                        "temp": 289.57,
                        "feels_like": 289.8,
                        "temp_min": 289.57,
                        "temp_max": 289.57,
                        "pressure": 1020,
                        "sea_level": 1020,
                        "grnd_level": 959,
                        "humidity": 97,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 98
                    },
                    "wind": {
                        "speed": 1.17,
                        "deg": 95,
                        "gust": 1.46
                    },
                    "visibility": 10000,
                    "pop": 0.7,
                    "rain": {
                        "3h": 0.98
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2021-07-08 00:00:00"
                },
                {
                    "dt": 1625713200,
                    "main": {
                        "temp": 288.52,
                        "feels_like": 288.67,
                        "temp_min": 288.52,
                        "temp_max": 288.52,
                        "pressure": 1018,
                        "sea_level": 1018,
                        "grnd_level": 957,
                        "humidity": 98,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 56
                    },
                    "wind": {
                        "speed": 1.65,
                        "deg": 81,
                        "gust": 3.68
                    },
                    "visibility": 10000,
                    "pop": 0.39,
                    "rain": {
                        "3h": 0.15
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2021-07-08 03:00:00"
                },
                {
                    "dt": 1625724000,
                    "main": {
                        "temp": 291.16,
                        "feels_like": 291.5,
                        "temp_min": 291.16,
                        "temp_max": 291.16,
                        "pressure": 1017,
                        "sea_level": 1017,
                        "grnd_level": 956,
                        "humidity": 95,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 51
                    },
                    "wind": {
                        "speed": 2.44,
                        "deg": 85,
                        "gust": 4.93
                    },
                    "visibility": 10000,
                    "pop": 0.14,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-08 06:00:00"
                },
                {
                    "dt": 1625734800,
                    "main": {
                        "temp": 294.29,
                        "feels_like": 294.6,
                        "temp_min": 294.29,
                        "temp_max": 294.29,
                        "pressure": 1018,
                        "sea_level": 1018,
                        "grnd_level": 958,
                        "humidity": 82,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 76
                    },
                    "wind": {
                        "speed": 2.57,
                        "deg": 270,
                        "gust": 3.07
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-08 09:00:00"
                },
                {
                    "dt": 1625745600,
                    "main": {
                        "temp": 294.57,
                        "feels_like": 294.75,
                        "temp_min": 294.57,
                        "temp_max": 294.57,
                        "pressure": 1019,
                        "sea_level": 1019,
                        "grnd_level": 959,
                        "humidity": 76,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 87
                    },
                    "wind": {
                        "speed": 3.29,
                        "deg": 285,
                        "gust": 4.3
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-08 12:00:00"
                },
                {
                    "dt": 1625756400,
                    "main": {
                        "temp": 295.74,
                        "feels_like": 296.04,
                        "temp_min": 295.74,
                        "temp_max": 295.74,
                        "pressure": 1017,
                        "sea_level": 1017,
                        "grnd_level": 958,
                        "humidity": 76,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 85
                    },
                    "wind": {
                        "speed": 3,
                        "deg": 312,
                        "gust": 3.12
                    },
                    "visibility": 10000,
                    "pop": 0.15,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-08 15:00:00"
                },
                {
                    "dt": 1625767200,
                    "main": {
                        "temp": 291.42,
                        "feels_like": 291.84,
                        "temp_min": 291.42,
                        "temp_max": 291.42,
                        "pressure": 1019,
                        "sea_level": 1019,
                        "grnd_level": 959,
                        "humidity": 97,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 92
                    },
                    "wind": {
                        "speed": 3.6,
                        "deg": 302,
                        "gust": 8.19
                    },
                    "visibility": 9847,
                    "pop": 0.92,
                    "rain": {
                        "3h": 2.59
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-08 18:00:00"
                },
                {
                    "dt": 1625778000,
                    "main": {
                        "temp": 289.76,
                        "feels_like": 290.04,
                        "temp_min": 289.76,
                        "temp_max": 289.76,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 960,
                        "humidity": 98,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    "clouds": {
                        "all": 99
                    },
                    "wind": {
                        "speed": 3.75,
                        "deg": 298,
                        "gust": 8.16
                    },
                    "visibility": 10000,
                    "pop": 1,
                    "rain": {
                        "3h": 2.09
                    },
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2021-07-08 21:00:00"
                },
                {
                    "dt": 1625788800,
                    "main": {
                        "temp": 288.96,
                        "feels_like": 289.16,
                        "temp_min": 288.96,
                        "temp_max": 288.96,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 960,
                        "humidity": 98,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 99
                    },
                    "wind": {
                        "speed": 2.96,
                        "deg": 276,
                        "gust": 7.63
                    },
                    "visibility": 10000,
                    "pop": 1,
                    "rain": {
                        "3h": 0.19
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-09 00:00:00"
                },
                {
                    "dt": 1625799600,
                    "main": {
                        "temp": 288.06,
                        "feels_like": 288.14,
                        "temp_min": 288.06,
                        "temp_max": 288.06,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 960,
                        "humidity": 97,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 3.62,
                        "deg": 269,
                        "gust": 8.94
                    },
                    "visibility": 10000,
                    "pop": 0.78,
                    "rain": {
                        "3h": 0.56
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-09 03:00:00"
                },
                {
                    "dt": 1625810400,
                    "main": {
                        "temp": 287.87,
                        "feels_like": 287.93,
                        "temp_min": 287.87,
                        "temp_max": 287.87,
                        "pressure": 1022,
                        "sea_level": 1022,
                        "grnd_level": 960,
                        "humidity": 97,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10d"
                        }
                    ],
                    "clouds": {
                        "all": 100
                    },
                    "wind": {
                        "speed": 1.01,
                        "deg": 275,
                        "gust": 4.28
                    },
                    "visibility": 10000,
                    "pop": 1,
                    "rain": {
                        "3h": 0.75
                    },
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-09 06:00:00"
                },
                {
                    "dt": 1625821200,
                    "main": {
                        "temp": 290.98,
                        "feels_like": 290.83,
                        "temp_min": 290.98,
                        "temp_max": 290.98,
                        "pressure": 1021,
                        "sea_level": 1021,
                        "grnd_level": 961,
                        "humidity": 77,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 804,
                            "main": "Clouds",
                            "description": "overcast clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 88
                    },
                    "wind": {
                        "speed": 2,
                        "deg": 295,
                        "gust": 2.89
                    },
                    "visibility": 10000,
                    "pop": 0.03,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2021-07-09 09:00:00"
                }
            ],
            "city": {
                "id": 2867714,
                "name": "Munich",
                "coord": {
                    "lat": 48.1374,
                    "lon": 11.5755
                },
                "country": "DE",
                "population": 1260391,
                "timezone": 7200,
                "sunrise": 1625368770,
                "sunset": 1625426183
            }
        }
    }));
}