import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Card } from '@material-ui/core';
import styles from './styles';
import BykavForList from '../../images/BykavForList.jpg';

const Bykav = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card} container>
      <img className={classes.photo} src={BykavForList} alt="Bykav" />
      <h2 className={classes.name}>Василь Быков</h2>
      <p className={classes.place}>
        Место рождения:
        <br />
        деревня Бычки
      </p>
    </Card>
  );
};

Bykav.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Bykav);
