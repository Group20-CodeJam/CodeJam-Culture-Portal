import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';

import styles from './style.css';

const SearchElement = ({
  data: { placeholder, buttonName },
  classes: { searchBox, textField, button },
  handleChange, handleClick, handleKeyPress,
}) => (
  <div className={searchBox}>
    <TextField
      className={textField}
      variant="outlined"
      placeholder={placeholder}
      onKeyPress={handleKeyPress}
      onChange={handleChange}
    />
    <Button
      className={button}
      onClick={handleClick}
      variant="outlined"
    >
      {buttonName}
    </Button>
  </div>
);

SearchElement.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(SearchElement);
