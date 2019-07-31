import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import styles from './styles';
import Card from './card';
import info from './info';

const WritersList = ({ classes: { writersList } }) => (
  <Grid className={writersList} container justify="center" spacing={2}>
    {Array.from({ length: 6 }, () => null).map((field, i) => (
      <Grid item sm={4} key={i.toString() + 1}>
        <Card info={info[i]} />
      </Grid>
    ))}
  </Grid>
);


WritersList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(WritersList);
