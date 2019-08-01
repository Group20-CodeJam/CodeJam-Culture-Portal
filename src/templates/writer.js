import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import WriterContainer from '../containers/writerContainer';

const Writer = ({ data }) => {
  const {
    authorsName, yearsOfLife, image, biography, listOfWorks, photoGallery, video,
  } = data.contentfulWriter;

  return (
    <WriterContainer
      authorsName={authorsName}
      yearsOfLife={yearsOfLife}
      image={image}
      biography={biography}
      listOfWorks={listOfWorks}
      photoGallery={photoGallery}
      video={video}
    />
  );
};

Writer.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
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
