
export async function fetchCurrentWeather(lat: number, lon: number){
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`;
    const res = await fetch(url);
    if(!res.ok) throw new Error("failed to fetch current weather");
    return res.json();
}

export async function fetchHourlyWeather(lat: number, lon: number){
    const url= `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weather_code&forecast_days=1`;
    const res = await fetch(url);
    if(!res.ok) throw new Error('failed to fetch hourly weather')
    return res.json();
}
export async function fetchDailyWeather(lat: number, lon: number){
    const url= `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto
`;
    const res = await fetch(url);
    if(!res.ok) throw new Error('failed to fetch daily weather')
    return res.json();
}

export async function fetchCoordinates(city:string){
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`;
    const res = await fetch(url);
    if(!res.ok) throw new Error('failed to fetch coords')
    const data = await res.json();
      if (!data.results || data.results.length === 0) {
    throw new Error("City not found");
  }
  return data.results[0];
}
export async function geoCoordinates(lat: number, lon: number){
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
    const res = await fetch(url);
    if(!res.ok) throw new Error('failed fetching current location')
    const data = await res.json();
    return {
        city: data.city || data.locality || "Unknown City",
        country: data.countryName || "Unknown Country",
    };

}