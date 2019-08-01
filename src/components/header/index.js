import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import NavTabs from './nav';

import logo from '../../images/logo.png';

const options = [
  { value: 'ru', label: 'ru' },
  { value: 'en', label: 'en' },
  { value: 'by', label: 'by' },
];

const colourStyles = {
  control: style => ({ ...style, width: 100 }),
};

const Header = ({
  classes: { header },
}) => (
  <header className={header}>
    <img src={logo} alt="logo" />
    <NavTabs />
    <Select
      options={options}
      defaultValue={options[0]}
      styles={colourStyles}
    />
  </header>
);

Header.propTypes = {
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Header);
