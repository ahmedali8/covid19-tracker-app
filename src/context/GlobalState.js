import React, { createContext, useEffect, useReducer } from 'react';
import { fetchData } from '../api';
import AppReducer from './AppReducer';

const initialState = {
    data: {}
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

    
    return (
        <GlobalContext.Provider value={{
            data: state.data
        }}>
            { children }
        </GlobalContext.Provider>
    );
};