import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';

import styles from './styles';


const SearchBox = (props) => {
  const { classes } = props;
  const { search } = props;

  let state = '';

  const handleClick = () => {
    search(state);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  };

  const handleChange = (event) => {
    state = event.target.value;
  };


  return (
    <div className={classes.searchBox}>
      <TextField
        className={classes.textField}
        variant="outlined"
        placeholder="Search"
        onKeyPress={handleKeyPress}
        onChange={handleChange}
      />
      <Button
        className={classes.button}
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
