import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import Video from '../../components/video';

const VideoContainer = ({ videoId }) => {
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
    <div>
      <Video videoId={videoId} openModal={openModal} onClose={closeModal} isOpen={isOpen} />
      <Button onClick={openModal}>Open</Button>
    </div>
  );
};

VideoContainer.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default VideoContainer;
