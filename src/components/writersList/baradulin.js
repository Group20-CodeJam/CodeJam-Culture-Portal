import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Card } from '@material-ui/core';
import styles from './styles';
import BaradulinForList from '../../images/BaradulinForList.jpg';

const Baradulin = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card} container>
      <img src={BaradulinForList} alt="Baradulin" />
      <p>baradulin</p>
    </Card>
  );
};

Baradulin.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Baradulin);
