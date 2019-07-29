import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';

import styles from './styles';


const SearchBox = (props) => {
  const { classes } = props;
  return (
    <div className={classes.searchBox}>
      <TextField
        className={classes.textField}
        variant="outlined"
        placeholder="Search"
      />
      <Button
        className={classes.button}
      >
        Search
      </Button>
    </div>
  );
};

SearchBox.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(SearchBox);
