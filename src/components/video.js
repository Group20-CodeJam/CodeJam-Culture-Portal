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
    return (
      <div>
        <ModalVideo channel="youtube" isOpen={this.state.isOpen} videoId="9FZehV2qJTk" onClose={() => this.setState({ isOpen: false })} />
        <button type="button" onClick={this.openModal}>Watch video</button>
      </div>
    );
  }
}
