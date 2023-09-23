import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Map, { Marker } from 'react-map-gl';

import { mapSettings, mapStyles } from '@constants/mapConstants';

import 'mapbox-gl/dist/mapbox-gl.css';

class BankCardMap extends PureComponent {
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
