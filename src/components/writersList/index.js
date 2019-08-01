import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import styles from './styles';
import Card from './card';
import info from './info';

const UNSEARCH_KEY = -1;

const WritersList = ({ classes: { writersList }, query }) => {
  const arr = [];

  info.forEach(
    (value) => {
      const { name, place } = value;
      if (name.search(new RegExp(query, 'i')) !== UNSEARCH_KEY || place.search(new RegExp(query, 'i')) !== UNSEARCH_KEY) {
        arr.push(value);
      }
    },
  );

  return (
    <Grid className={writersList} container justify="center" spacing={2}>
      {
        Array.from({ length: arr.length }, () => null).map((field, i) => (
          <Grid item sm={4} key={i.toString() + 1}>
            <Card info={arr[i]} />
          </Grid>
        ))
      }
    </Grid>
  );
};


WritersList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
};

export default withStyles(styles)(WritersList);
