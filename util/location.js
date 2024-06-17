const API_KEY = 'AIzaSyChTcMUCY9Zw3j00st0uKkqTz0RGlOpea8';


export async function getAddress(lat, lng){
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`
    const response  = await fetch(url)

    if(!response.ok){
        throw new Error('Failed to fetch addresss!');
    }

    const data = await response.json();
    const address = data.result[0].formated_address;
    return address;
}