import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Card } from '@material-ui/core';
import styles from './styles';

const Kupala = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card} container>
      <p>kupala</p>
    </Card>
  );
};

Kupala.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Kupala);
