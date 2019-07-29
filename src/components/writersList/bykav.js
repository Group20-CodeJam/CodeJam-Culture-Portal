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
      <img src={BykavForList} alt="Bykav" />
      <p>bykav</p>
    </Card>
  );
};

Bykav.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Bykav);
