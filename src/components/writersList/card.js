import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import { Card } from '@material-ui/core';
import styles from './styles';

const CardWriter = (props) => {
  const {
    info,
    classes: {
      card,
      photo,
      name,
      place,
    },
  } = props;

  return (
    <Card className={card} container>
      <img className={photo} src={info.photo} alt={info.name} />
      <h2 className={name}>{info.name}</h2>
      <p className={place}>
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
