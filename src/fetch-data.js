export const fetchFixtures = async () => {
    const url = 'https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'a92837aa3amshcc6b8416d4135ffp188d63jsn2bce9e2b0dd1',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        return data.response;
    } catch (err) {
        console.error(err);
        return [];
    }
};

