import { Link } from 'gatsby';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

const NavTabs = ({
  data: { main, writers },
  classes: { nav, link },
}) => (
  <nav className={nav}>
    <Typography>
      <Link to="/" className={link}>
        {main}
      </Link>
      <Link to="/writers/" className={link}>
        {writers}
      </Link>
    </Typography>
  </nav>
);

NavTabs.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(NavTabs);
