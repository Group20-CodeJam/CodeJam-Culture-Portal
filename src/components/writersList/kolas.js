import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Card } from '@material-ui/core';
import styles from './styles';
import KolasForList from '../../images/KolasForList.jpg';

const Kolas = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card} container>
      <img src={KolasForList} alt="Kolas" />
      <p>kolas</p>
    </Card>
  );
};

Kolas.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Kolas);
