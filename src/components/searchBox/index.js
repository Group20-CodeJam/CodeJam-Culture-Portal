import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/styles';

import styles from './styles';


const SearchBox = (props) => {
  const { classes } = props;
  return (
    <div>
      <Input>
      Search
      </Input>
      <Button className={classes.button}>
        Search
      </Button>
    </div>
  );
};

SearchBox.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(SearchBox);
