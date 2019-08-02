import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

import styles from './styles';

const Video = ({
  videoId, onClose, isOpen, classes: { button, video, iframe },
}) => (

  <Dialog
    classes={{ paper: video }}
    fullWidth="true"
    open={isOpen}
    onClose={onClose}
  >
    <iframe
      title="frame"
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      frameBorder="0"
      allow="autoplay"
      allowFullScreen
      style={
        {
          height: '80vh',
          marginBottom: '0',
        }
      }
    />
    <Button
      className={button}
      onClick={onClose}
      variant="outlined"
    >
      X
    </Button>
  </Dialog>
);

Video.propTypes = {
  videoId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(Video);
