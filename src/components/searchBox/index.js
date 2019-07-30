import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/styles';

import styles from './styles';

class SearchBox extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    const newState = {
      query: event.target.value,
    };
    this.setState(newState);
  }

  handleClick() {
    const { search } = this.props;
    const { query } = this.state;
    search(query);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.searchBox}>
        <TextField
          className={classes.textField}
          variant="outlined"
          placeholder="Search"
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
        />
        <Button
          className={classes.button}
          onClick={this.handleClick}
        >
            Search
        </Button>
      </div>
    );
  }
}

SearchBox.propTypes = {
  classes: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
};

export default withStyles(styles)(SearchBox);
