import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Card } from '@material-ui/core';
import styles from './styles';

const CardWriter = (props) => {
  const { info, classes } = props;

  return (
    <Card className={classes.card} container>
      <img className={classes.photo} src={info.photo} alt={info.name} />
      <h2 className={classes.name}>{info.name}</h2>
      <p className={classes.place}>
        Место рождения:
        <br />
        {info.place}
      </p>
    </Card>
  );
};


CardWriter.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  info: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(CardWriter);
