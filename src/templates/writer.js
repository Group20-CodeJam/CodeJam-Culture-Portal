import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import WriterContainer from '../containers/writerContainer';

import Header from '../components/header';
import Footer from '../components/footer';
import dataHeaderInfo from '../../data/headerInfo';
import dataVideoButton from '../../data/videoButton';

const Writer = ({ data }) => {
  const {
    writerName, yearsWriter, image, biography,
    works, photoGallery, video, placeOfMajorActivity,
  } = data.contentfulWriter;

  let languageStorage = 'ru';
  if (typeof window !== 'undefined' && window) {
    if (localStorage.getItem('lang')) {
      languageStorage = localStorage.getItem('lang');
    }
  }

  const [headerInfo, setHeaderInfo] = useState(dataHeaderInfo[languageStorage]);
  const [videoButton, setVideoButton] = useState(dataVideoButton[languageStorage]);
  const [language, setLanguage] = useState(languageStorage);

  const сhangeLanguage = (languageValue) => {
    localStorage.setItem('lang', languageValue);
    setHeaderInfo(dataHeaderInfo[languageValue]);
    setLanguage(languageValue);
    setVideoButton(dataVideoButton[languageValue]);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%',
    }}
    >
      <Header
        data={headerInfo}
        onSelect={сhangeLanguage}
      />
      <WriterContainer
        authorsName={writerName[language]}
        yearsOfLife={yearsWriter[language]}
        image={image}
        biography={biography[language]}
        listOfWorks={works[language]}
        photoGallery={photoGallery}
        video={video}
        placeOfMajorActivity={placeOfMajorActivity}
        videoButton={videoButton}
      />
      <Footer />
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
        yearsOfLife
        authorsName
        writerName{
          ru,by,en
        }
        works{
          ru,by,en
        }
        yearsWriter{
          ru,by,en
        }
        biography {
          ru {
            period,text
        },
          by {
            period,text
        },
          en {
            period,text
        }
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
