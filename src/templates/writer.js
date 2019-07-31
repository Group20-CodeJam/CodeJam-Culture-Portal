/* eslint-disable react/prop-types */
import React from 'react';
import { Link, graphql } from 'gatsby';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import Carousel from 'react-images';
import ReactMarkdown from 'react-markdown';
import Video from '../components/video';
import Layout from '../components/layout';

const Writer = ({ data }) => {
  const {
    authorsName, yearsOfLife, image, biography, listOfWorks, photoGallery, video,
  } = data.contentfulWriter;

  const timelineContent = [];
  biography.forEach((item) => {
    timelineContent.push(
      <TimelineItem
        key={item.period}
        dateText={item.period}
        style={{ color: '#e86971' }}
      >
        <p>
          {item.text}
          {' '}

        </p>

      </TimelineItem>,
    );
  });

  const GalleryContent = [];
  photoGallery.forEach((item) => {
    GalleryContent.push(
      {
        src: item.file.url,
      },
    );
  });

  return (
    <Layout>
      <div className="writer">
        <h1>{authorsName}</h1>
        <p>{yearsOfLife}</p>
        <img alt={authorsName} src={image.file.url} />
        <p className="body-text">
          <Timeline lineColor="#ddd">{timelineContent}</Timeline>
        </p>
        <p><ReactMarkdown source={listOfWorks.listOfWorks} /></p>
        <Carousel views={GalleryContent} />
        <Video videoId={video} />

        <Link to="/writers/">View more writers</Link>
        <Link to="/">Back to Home</Link>
      </div>

    </Layout>
  );
};

export default Writer;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulWriter(slug: { eq: $slug }) {
        id
        slug
        authorsName
        yearsOfLife
        biography {
            period,text
        }
        image {
            file {
              url
            }
          }
      
      listOfWorks {
        listOfWorks
      }
      photoGallery {
        file {
            url
          }
      }
      video
    }
  }
`;
