import 'mapbox-gl/dist/mapbox-gl.css';

import { mapSettings, mapStyles } from '@constants/mapConstants';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Map, { Marker } from 'react-map-gl';

class BankCardMap extends Component {
  render() {
    const markers = this.props.banksCoords.map((bank, index) => (
      <Marker key={index} longitude={bank.longitude} latitude={bank.latitude} />
    ));
    return (
      <Map
        initialViewState={mapSettings}
        mapStyle={mapStyles}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_API_KEY}>
        {markers}
      </Map>
    );
  }
}

BankCardMap.propTypes = {
  banksCoords: PropTypes.array
};

export default BankCardMap;