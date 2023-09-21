import 'mapbox-gl/dist/mapbox-gl.css';

import { mapSettings, mapStyles } from '@constants/mapConstants';
import React, { Component } from 'react';
import Map, { Marker } from 'react-map-gl';

class BanckCardMap extends Component {
  render() {
    return (
      <Map
        initialViewState={mapSettings}
        mapStyle={mapStyles}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}
      />
    );
  }
}

export default BanckCardMap;
