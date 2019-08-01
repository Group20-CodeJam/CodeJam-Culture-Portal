import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

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

  return <Video videoId={videoId} openModal={openModal} onClose={closeModal} isOpen={isOpen} />;
};

VideoContainer.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default VideoContainer;
