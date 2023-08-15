import { setSearchResults } from '../reducers/placesReducer';
import axios from 'axios';

const API_KEY = 'AIzaSyBRhBZUXAEQFn7finOfyJvHZhwB7_hqjd4';
const API_URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${API_KEY}`;

export const fetchPlacesData = (input) => async (dispatch) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        input,
      },
    });

    const searchResults = response.data.predictions;
    dispatch(setSearchResults(searchResults));
  } catch (error) {
    console.error('Error fetching places:', error);
  }
};
