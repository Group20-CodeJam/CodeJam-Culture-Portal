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
    <Grid className={classes.writersList} container>
      <Kupala />
      <Kolas />
      <Bykav />
      <Baradulin />
      <Tank />
      <Krapiva />
    </Grid>
  );
};

WritersList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(WritersList);
