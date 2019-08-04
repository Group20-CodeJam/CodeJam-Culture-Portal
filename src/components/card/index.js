import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/styles';
import { Card } from '@material-ui/core';
import styles from './style.css';

const CardWriter = ({
  info, linkPage, placeBirth,
}) => (
  <Card className="card" container>
    <img className="photo" src={info.photo} alt={info.name} />
    <h2 className="name">{info.name}</h2>
    <p className="place">
      {placeBirth}
      <br />
      {info.place}
    </p>
    <Link className="link" to={`/writer/${info.link}/`}>{linkPage}</Link>
  </Card>
);

CardWriter.propTypes = {
  info: PropTypes.objectOf(PropTypes.object).isRequired,
  linkPage: PropTypes.string.isRequired,
  placeBirth: PropTypes.string.isRequired,
};

export default withStyles(styles)(CardWriter);
