import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/styles';
import { Card } from '@material-ui/core';
import styles from './styles';

const CardWriter = ({
  info, classes: {
    card, photo, name, place, link,
  },
}) => (
  <Card className={card} container>
    <img className={photo} src={info.photo} alt={info.name} />
    <h2 className={name}>{info.name}</h2>
    <p className={place}>
        Место рождения:
      <br />
      {info.place}
    </p>
    <Link className={link} to={`/writer/${info.link}/`}>Перейти на страницу писателя</Link>
  </Card>
);

CardWriter.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  info: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(CardWriter);
