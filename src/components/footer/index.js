import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import styles from './styles';

const Footer = ({
  classes: { footer, text }
}) => (
  <footer className={footer}>
    <p className={text}>Made by Group20 © 2019</p>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Footer);
