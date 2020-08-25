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

// fetching the daily data
export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);

        // looping through the data to get the all the daily data
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            reportDate: dailyData.reportDate
        }));

        return modifiedData;

    } catch (error) {
        console.log('fetchDailyData: ', error);
    }
};

// fetching the countries
export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);

        return countries.map(country => country.name);
         
    } catch (error) {
        console.log('fetchCountries: ', error);
    }
};