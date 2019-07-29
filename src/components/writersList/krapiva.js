import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Card } from '@material-ui/core';
import styles from './styles';
import KrapivaForList from '../../images/KrapivaForList.jpg';

const Krapiva = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card} container>
      <img className={classes.photo} src={KrapivaForList} alt="Krapiva" />
      <h2 className={classes.name}>Кондрат Крапива</h2>
    </Card>
  );
};

Krapiva.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Krapiva);
