import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import ReactMarkdown from 'react-markdown';
import Carousel from 'nuka-carousel';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import VideoContanier from '../../containers/videoContainer';
import Layout from '../layout';
import MyMapComponent from './map';

import styles from './styles';

const WriterComponent = ({
  authorsName, yearsOfLife, image, timelineContent,
  GalleryContent, listOfWorks, video, placeOfMajorActivity, videoButton,
  classes: { button, sliderImg },
}) => (
  <Layout>
    <div className="writer">
      <h1>{authorsName}</h1>
      <p>{yearsOfLife}</p>
      <img
        alt={authorsName}
        src={image.file.url}
      />
      <p className="body-text">
        <Timeline lineColor="#ddd">
          {timelineContent.map(item => (
            <TimelineItem
              key={item.period}
              dateText={item.period}
              dateInnerStyle={{ background: '#744b67', color: '#fff' }}
              style={{ color: '#744b67' }}
            >
              <p>
                {item.text}
              </p>
            </TimelineItem>
          ))}
        </Timeline>
      </p>
      <p><ReactMarkdown source={listOfWorks} /></p>
      <Carousel
        autoplay
        enableKeyboardControls
        disableEdgeSwiping
        wrapAround
        renderCenterLeftControls={({ previousSlide }) => (
          <Button
            className={button}
            onClick={previousSlide}
            variant="outlined"
          >
            {'<'}
          </Button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <Button
            className={button}
            onClick={nextSlide}
            variant="outlined"
          >
            {'>'}
          </Button>
        )}
      >
        {
          GalleryContent.map(el => (
            <div>
              <img
                src={el}
                alt="gallery"
                className={sliderImg}
              />
            </div>
          ))
        }
      </Carousel>
      <VideoContanier videoButton={videoButton} videoId={video} />
      <MyMapComponent
        coordinates={{
          lat: placeOfMajorActivity.lat,
          lng: placeOfMajorActivity.lon,
        }}
        authorsName={authorsName}
      />
    </div>

  </Layout>
);

WriterComponent.propTypes = {
  authorsName: PropTypes.string.isRequired,
  yearsOfLife: PropTypes.string.isRequired,
  image: PropTypes.objectOf(PropTypes.object).isRequired,
  timelineContent: PropTypes.objectOf(PropTypes.object).isRequired,
  listOfWorks: PropTypes.objectOf(PropTypes.object).isRequired,
  GalleryContent: PropTypes.objectOf(PropTypes.object).isRequired,
  video: PropTypes.string.isRequired,
  placeOfMajorActivity: PropTypes.objectOf(PropTypes.object).isRequired,
  classes: PropTypes.objectOf(PropTypes.object).isRequired,
  videoButton: PropTypes.string.isRequired,
};

export default withStyles(styles)(WriterComponent);
