import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import styles from './styles';
import Card from './card';
import info from './info';

const NOT_FOUND_KEY = -1;
const SM = 4;
const SPACING = 2;

const WritersList = ({ classes: { writersList }, query }) => (
  <Grid className={writersList} container justify="center" spacing={SPACING}>
    {
      info
        .filter((value) => {
          const { name, place } = value;
          return name.search(new RegExp(query, 'i')) !== NOT_FOUND_KEY || place.search(new RegExp(query, 'i')) !== NOT_FOUND_KEY;
        })
        .map((field, i, arr) => (
          <Grid item sm={SM} key={i.toString() + 1}>
            <Card info={arr[i]} />
          </Grid>
        ))
    }
  </Grid>
);

WritersList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  query: PropTypes.string.isRequired,
};

export default withStyles(styles)(WritersList);
