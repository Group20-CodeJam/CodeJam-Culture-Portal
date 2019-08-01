import React from 'react';
import PropTypes from 'prop-types';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'gatsby';
import SlideShow from 'react-image-show';
import Video from '../video';
import Layout from '../layout';

const WriterComponent = ({
  authorsName, yearsOfLife, image, timelineContent, GalleryContent, listOfWorks, video,
}) => (
  <Layout>
    <div className="writer">
      <h1>{authorsName}</h1>
      <p>{yearsOfLife}</p>
      <img alt={authorsName} src={image.file.url} />
      <p className="body-text">
        <Timeline lineColor="#ddd">
          {timelineContent.map(item => (
            <TimelineItem
              key={item.period}
              dateText={item.period}
              style={{ color: '#e86971' }}
            >
              <p>
                {item.text}

              </p>

            </TimelineItem>
          ))}

        </Timeline>
      </p>
      <p><ReactMarkdown source={listOfWorks.listOfWorks} /></p>
      <Video videoId={video} />

      <Link to="/writers/">View more writers</Link>
      <Link to="/">Back to Home</Link>
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
};

export default WriterComponent;
