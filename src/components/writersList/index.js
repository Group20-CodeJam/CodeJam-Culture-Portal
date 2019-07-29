import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import styles from './styles';
import Kupala from './kupala';
import Kolas from './kolas';
import Bykav from './bykav';
import Baradulin from './baradulin';
import Tank from './tank';
import Krapiva from './krapiva';

const WritersList = (props) => {
  const { classes } = props;

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Kupala />
        </Grid>
        <Grid item xs={4}>
          <Kolas />
        </Grid>
        <Grid item xs={4}>
          <Bykav />
        </Grid>
        <Grid item xs={4}>
          <Baradulin />
        </Grid>
        <Grid item xs={4}>
          <Tank />
        </Grid>
        <Grid item xs={4}>
          <Krapiva />
        </Grid>
      </Grid>
    </div>
  );
};

WritersList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(WritersList);
