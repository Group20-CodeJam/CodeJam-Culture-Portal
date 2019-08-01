import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Card from '../../components/card';
import info from './info';

const NOT_FOUND_KEY = -1;
const SM = 4;
const SPACING = 2;

const WritersList = ({ query }) => (
  <Grid container justify="center" spacing={SPACING}>
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
  query: PropTypes.string.isRequired,
};

export default WritersList;
