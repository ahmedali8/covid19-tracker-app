import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// fetch data from api
export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

        return { confirmed, recovered, deaths, lastUpdate };
        
    } catch (error) {
        console.log('fetchDataError: ', error);
    }
};
