import React from 'react';
import ModalVideo from 'react-modal-video';
import PropTypes from 'prop-types';


const Video = ({
  onClose, openModal, videoId, isOpen,
}) => (
  <div>
    <ModalVideo channel="youtube" isOpen={isOpen} videoId={videoId} onClose={onClose} />
    <button type="button" onClick={openModal}>Watch video</button>
  </div>
);
Video.propTypes = {
  openModal: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  videoId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Video;
