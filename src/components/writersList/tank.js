import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Card } from '@material-ui/core';
import styles from './styles';
import TankForList from '../../images/TankForList.jpg';

const Tank = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card} container>
      <img className={classes.photo} src={TankForList} alt="Tank" />
      <h2 className={classes.name}>Максим Танк</h2>
    </Card>
  );
};

Tank.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Tank);
