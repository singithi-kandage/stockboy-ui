import React, { useState, useEffect } from "react";
const { compose, withProps, withHandlers } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} = require("react-google-maps");
const {
  MarkerClusterer
} = require("react-google-maps/lib/components/addons/MarkerClusterer");
const fetch = require("isomorphic-fetch");

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const MapWithClusters = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=" +
      GOOGLE_MAPS_API_KEY +
      "&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `70vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withHandlers({
    onMarkerClustererClick: () => markerClusterer => {
      const clickedMarkers = markerClusterer.getMarkers();
      console.log(`Current clicked markers length: ${clickedMarkers.length}`);
      console.log(clickedMarkers);
    }
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={10} defaultCenter={{ lat: 43.4668, lng: -80.51639 }}>
    <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <Marker
          key={marker.photo_id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
));

const Map = () => {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const url = [
      // Length issue
      `https://gist.githubusercontent.com`,
      `/farrrr/dfda7dd7fccfec5474d3`,
      `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
    ].join("");

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMarkers(data.photos);
      });
  });

  return <MapWithClusters markers={markers} />;
};

export default Map;
