import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import WriterContainer from '../containers/writerContainer';

import Header from '../components/header';
import dataHeaderInfo from '../../data/headerInfo';

const Writer = ({ data }) => {
  const {
    authorsName, yearsOfLife, image, biography,
    listOfWorks, photoGallery, video, placeOfMajorActivity, slug,
  } = data.contentfulWriter;

  const [headerInfo, setHeaderInfo] = useState(dataHeaderInfo[slug.split('-')[1]]);

  const сhangeLanguage = (languageValue) => {
    setHeaderInfo(dataHeaderInfo[languageValue]);
    window.location.assign(`/writer/${slug.split('-')[0]}-${languageValue}/`);
  };

  return (
    <div>
      <Header
        data={headerInfo}
        onSelect={сhangeLanguage}
      />
      <WriterContainer
        authorsName={authorsName}
        yearsOfLife={yearsOfLife}
        image={image}
        biography={biography}
        listOfWorks={listOfWorks}
        photoGallery={photoGallery}
        video={video}
        placeOfMajorActivity={placeOfMajorActivity}
      />
    </div>
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
      placeOfMajorActivity {
        lat
        lon
      }
    }
  }
`;
