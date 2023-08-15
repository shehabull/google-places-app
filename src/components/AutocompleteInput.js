import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { fetchPlacesData } from '../store/thunks/placesThunks';

const AutocompleteInput = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.places.searchResults);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    dispatch(fetchPlacesData(newInputValue)); // Dispatch thunk to fetch data
  };

  return (
    <Autocomplete
      freeSolo
      options={searchResults.map((result) => result.description)}
      onInputChange={handleInputChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for places"
          variant="outlined"
          fullWidth
        />
      )}
    />
  );
};

export default AutocompleteInput;
