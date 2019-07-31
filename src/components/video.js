import React from 'react';
import ModalVideo from 'react-modal-video';


export default class Video extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { videoId } = this.props;
    const { isOpen } = this.state;
    return (
      <div>
        <ModalVideo channel="youtube" isOpen={isOpen} videoId={videoId} onClose={() => this.setState({ isOpen: false })} />
        <button type="button" onClick={this.openModal}>Watch video</button>
      </div>
    );
  }
}
