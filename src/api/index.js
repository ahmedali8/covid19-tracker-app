import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// fetch data from api as well as for a country
export const fetchData = async (country) => {
    
    let changeableUrl = url;

    if (country) {
        changeableUrl = `${url}/countries/${country}`;
    }
    

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);

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