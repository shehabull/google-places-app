import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useSelector } from 'react-redux';

const SearchResultList = () => {
  const searchResults = useSelector((state) => state.places.searchResults);

  return (
    <List>
      {searchResults.map((result, index) => (
        <ListItem key={index}>
          <ListItemText primary={result.description} />
        </ListItem>
      ))}
    </List>
  );
};

export default SearchResultList;
