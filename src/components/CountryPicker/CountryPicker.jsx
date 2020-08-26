import React, { useState, useEffect, useContext } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';
import { GlobalContext } from '../../context/GlobalState';

import styles from './CountryPicker.module.css';

const CountryPicker = () => {

    const [fetchedCountries, setFetchedCountries] = useState([]);
    const { countryHandler } = useContext(GlobalContext);

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        };

        fetchAPI();
    }, [setFetchedCountries]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => countryHandler(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country, i) => (
                    <option key={i} value={country}>{country}</option>
                ))}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;
