import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';


import 'video-react/dist/video-react.css';

const Video = ({ videoId, onClose, isOpen }) => (
  <Dialog
    open={isOpen}
    onClose={onClose}
  >
    <iframe title="frame" src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" />
    <Button onClick={onClose}>Close</Button>
  </Dialog>
);

Video.propTypes = {
  videoId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};
export default Video;
