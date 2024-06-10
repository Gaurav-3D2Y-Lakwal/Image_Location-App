const API_KEY = 'AIzaSyD2mP_sDllo0cwv60LmYtATOJIcnDhZcg';


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