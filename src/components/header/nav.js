import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

const NavTabs = (props) => {
  const { classes } = props;

  return (
    <nav className={classes.nav}>
      <Typography>
        <Link to="/" className={classes.link}>
          Main
        </Link>
        <Link to="/writers/" className={classes.link}>
          Writers
        </Link>
      </Typography>
    </nav>
  );
};

NavTabs.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(NavTabs);
