import { createSlice } from '@reduxjs/toolkit';

const placesSlice = createSlice({
  name: 'places',
  initialState: {
    searchResults: [],
  },
  reducers: {
    setSearchResults(state, action) {
      state.searchResults = action.payload;
    },
  },
});

export const { setSearchResults } = placesSlice.actions;

export default placesSlice.reducer;
