import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import Button from '@material-ui/core/Button';
import Video from '../../components/video';
import styles from './styles';

const VideoContainer = ({ videoId, classes: { button, videoContainer } }) => {
  const [isOpen, setIsOpen] = useState('');

  const openModal = useCallback(
    () => {
      setIsOpen(true);
    },
    [isOpen],
  );

  const closeModal = useCallback(
    () => {
      setIsOpen(false);
    },
    [isOpen],
  );

  return (
    <div className={videoContainer}>
      <Video
        videoId={videoId}
        openModal={openModal}
        onClose={closeModal}
        isOpen={isOpen}
      />
      <Button
        className={button}
        onClick={openModal}
        variant="outlined"
      >
        Просмотреть видео
      </Button>
    </div>
  );
};

VideoContainer.propTypes = {
  videoId: PropTypes.string.isRequired,
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(VideoContainer);
