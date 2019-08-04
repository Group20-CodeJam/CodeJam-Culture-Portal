import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles.css';

const Footer = () => (
  <footer className="footer">
    <p className="text">Made by Group20 © 2019</p>
  </footer>
);


export default withStyles(styles)(Footer);
