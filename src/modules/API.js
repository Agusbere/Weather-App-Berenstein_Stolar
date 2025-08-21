const getWeather = (city) => {
    return {
        "coord": {
            "lon": -58.3772,
            "lat": -34.6132
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 17.11,
            "feels_like": 16.5,
            "temp_min": 16.02,
            "temp_max": 17.94,
            "pressure": 1013,
            "humidity": 62,
            "sea_level": 1013,
            "grnd_level": 1012
        },
        "visibility": 10000,
        "wind": {
            "speed": 4.08,
            "deg": 11,
            "gust": 5.48
        },
        "clouds": {
            "all": 13
        },
        "dt": 1755787731,
        "sys": {
            "type": 2,
            "id": 2031595,
            "country": "AR",
            "sunrise": 1755771982,
            "sunset": 1755811632
        },
        "timezone": -10800,
        "id": 3435910,
        "name": "Buenos Aires",
        "cod": 200
    }
}

export default getWeather;