import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './reducers/placesReducer';

const store = configureStore({
  reducer: {
    places: placesReducer,
  },
});

export default store;
