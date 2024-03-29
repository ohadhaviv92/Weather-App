import React from 'react';
import { useState } from "react";
import { getOptions } from "./api";
import { TextField } from "@material-ui/core"
import { Autocomplete } from "@material-ui/lab"
import { useDispatch } from 'react-redux'
import {
    changeCity,
} from './actions/index'

export default function CitiesAutocomplete() {
    const dispatch = useDispatch();
    const [options, setOption] = useState([]);


    const onKeyDown = (e) => {
        getOptions(e.target.value).then(options => setOption(options.data))
    }

    const onLocationChange = (cityName) => {
        const selectedCity = options.find(city => city.LocalizedName == cityName)
        selectedCity && dispatch(changeCity(selectedCity))
    }

    return <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={options.map(item => item.LocalizedName)}
        onChange={(event, value) => onLocationChange(value)}
        onInputChange={onKeyDown}
        renderInput={params => (
            <TextField {...params} label="Search Location" margin="normal" variant="outlined" />
        )} />;
}