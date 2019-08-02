import React from 'react';
import PropTypes from 'prop-types';
import WriterComponent from '../../components/writer';


const WriterContainer = ({
  authorsName, yearsOfLife, image, biography, listOfWorks, photoGallery, video, placeOfMajorActivity,
}) => {
  const timelineContent = [];
  biography.forEach((item) => {
    timelineContent.push(
      {
        period: item.period,
        text: item.text,
      },
    );
  });

  const GalleryContent = [];
  photoGallery.forEach((item) => {
    GalleryContent.push(item.file.url);
  });

  return (
    <WriterComponent
      authorsName={authorsName}
      yearsOfLife={yearsOfLife}
      image={image}
      timelineContent={timelineContent}
      GalleryContent={GalleryContent}
      listOfWorks={listOfWorks}
      video={video}
      placeOfMajorActivity={placeOfMajorActivity}
    />
  );
};

WriterContainer.propTypes = {
  authorsName: PropTypes.string.isRequired,
  yearsOfLife: PropTypes.string.isRequired,
  image: PropTypes.objectOf(PropTypes.object).isRequired,
  biography: PropTypes.objectOf(PropTypes.object).isRequired,
  listOfWorks: PropTypes.objectOf(PropTypes.object).isRequired,
  photoGallery: PropTypes.objectOf(PropTypes.object).isRequired,
  video: PropTypes.string.isRequired,
  placeOfMajorActivity: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default WriterContainer;
