import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import NavTabs from './nav';

import logo from '../../images/logo.png';

const Header = (props) => {
  const { classes } = props;
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <NavTabs />
    </header>
  );
};

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Header);
