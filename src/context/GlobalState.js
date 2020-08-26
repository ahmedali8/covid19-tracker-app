import React, { createContext, useEffect, useReducer } from 'react';
import { fetchData } from '../api';
import AppReducer from './AppReducer';

const initialState = {
    data: {},
    country: ''
};

// create context
export const GlobalContext = createContext(initialState);

// create Global Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        const fetchAPI = async () => {
            const fetchedData = await fetchData();

            dispatch({ type: 'FETCHED_DATA', payload: fetchedData });
        };

        fetchAPI();
    }, []);
    

    const countryHandler = async (country) => {
        
        // fetch the data 
        const fetchedCountry = await fetchData(country);

        // set to state
        dispatch({ type: 'FETCHED_COUNTRY', payload: fetchedCountry, country: country });
    };

    
    return (
        <GlobalContext.Provider value={{
            data: state.data,
            country: state.country,
            countryHandler
        }}>
            { children }
        </GlobalContext.Provider>
    );
};