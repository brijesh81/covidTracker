import React, {useState, useEffect} from 'react';
import { NativeSelect, FormControl} from '@material-ui/core';
import './CountryPicker.css';
import {countries} from '../../api';

const CountryPicker = () => {
    const [fetchedCountries, setFetchedCountries] = useState([]);
    useEffect(() => {
        const fetchedCountries = async () => {
            setFetchedCountries(await countries);
        }

        fetchedCountries();
    }, [setFetchedCountries]);

    return (
        <FormControl className="formControl">
            <NativeSelect>
                <option value="global">Global</option>

            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
