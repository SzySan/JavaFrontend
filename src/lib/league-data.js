export const fetchLeague = async (id) => {
    const url = 'https://api-football-v1.p.rapidapi.com/v3/leagues';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c84734c28cmsh9c2b59a00998450p1db8cdjsnfd1ce8ad77b4',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    try {
        const odczyt = await fetch(url, options);
        const result = await odczyt.json();
        return result.odczyt
    } catch (error) {
        console.error(error);
        return [];
    }
};