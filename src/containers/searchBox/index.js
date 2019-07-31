import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';

import styles from './styles';

const ENTER_KEY = 'Enter';

const SearchBox = ({ search, classes: { searchBox, textField, button } }) => {
  const [query, setQuery] = useState('');

  const handleChange = useCallback(
    ({ target: { value } }) => setQuery(value),
  );

  const handleClick = useCallback(
    () => search(query),
    [query],
  );

  const handleKeyPress = useCallback(
    ({ key }) => (key === ENTER_KEY ? handleClick() : undefined),
    [handleClick],
  );

  return (
    <div className={searchBox}>
      <TextField
        className={textField}
        variant="outlined"
        placeholder="Search"
        onKeyPress={handleKeyPress}
        onChange={handleChange}
      />
      <Button
        className={button}
        onClick={handleClick}
      >
        Search
      </Button>
    </div>
  );
};
SearchBox.propTypes = {
  classes: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchBox);
