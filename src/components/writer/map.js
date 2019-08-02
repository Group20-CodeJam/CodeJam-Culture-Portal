import React from 'react';
import { compose, withProps, withStateHandlers } from 'recompose';
import {
  withScriptjs, withGoogleMap, GoogleMap, Marker,
} from 'react-google-maps';

const { InfoBox } = require('react-google-maps/lib/components/addons/InfoBox');

const MyMapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAKLF1CrJOVslASd1fyR_rm_NImI9QOvP0',
    loadingElement: <div style={{ height: '100%', width: '100%' }} />,
    containerElement: <div style={{ height: '400px', width: '100%' }} />,
    mapElement: <div style={{ height: '100%', width: '100%' }} />,
  }),
  withStateHandlers(({ initialCounter = false }) => ({
    isOpen: initialCounter,
  }), {
    onOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    }),
  }),
  withScriptjs,
  withGoogleMap,
)(({
  coordinates, authorsName, onOpen, isOpen,
}) => (
  <GoogleMap
    defaultZoom={6}
    defaultCenter={{
      lat: 53.902496,
      lng: 27.561481,
    }}
  >
    <Marker
      position={coordinates}
      onClick={onOpen}
    >
      {isOpen && (
        <InfoBox
          options={{ closeBoxURL: '', enableEventPropagation: true }}
        >
          <div style={{ backgroundColor: '#ffffff', opacity: 0.75, padding: '3px' }}>
            <div style={{ fontSize: '14px', fontColor: '#000000' }}>
              <p style={{ marginBottom: '2px' }}>{authorsName}</p>
              <p style={{ marginBottom: '2px' }}>place of author&apos;s major activity</p>
            </div>
          </div>
        </InfoBox>
      )}
    </Marker>
    ))
  </GoogleMap>
));

export default MyMapComponent;
