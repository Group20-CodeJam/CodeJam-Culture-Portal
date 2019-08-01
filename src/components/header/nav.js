import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

const NavTabs = ({
  classes: { nav, link },
}) => (
  <nav className={nav}>
    <Typography>
      <Link to="/" className={link}>
          Main
      </Link>
      <Link to="/writers/" className={link}>
          Writers
      </Link>
    </Typography>
  </nav>
);

NavTabs.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(NavTabs);
