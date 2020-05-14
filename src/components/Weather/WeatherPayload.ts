/* eslint-disable */
export default interface WeatherPayload {
    "coord": { "lon": number; "lat": number };
    "weather": { "id": number; "main": string; "description": string; "icon": string }[];
    "base": string;
    "main": {
        "temp": number; "pressure": number; "humidity": number; "temp_min": number; "temp_max": number;
        "sea_level"?: number; "grnd_level"?: number;
    };
    "wind": { "speed": number; "deg": number };
    "clouds": { "all": number };
    "rain"?: { "1h": number; "3h": number };
    "snow"?: { "1h": number; "3h": number };
    "dt": number;
    "sys": { "type": number; "id": number; "message": number; "country": string; "sunrise": number; "sunset": number };
    "timezone": number;
    "id": number;
    "name": string;
    "cod": number;
    "_id": string;
};
/* eslint-enable */
