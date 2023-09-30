import React, { PureComponent } from 'react';
import Map, { Marker } from 'react-map-gl';
import { mapSettings, mapStyles } from '@constants/mapConstants';
import PropTypes from 'prop-types';

import envVariables from '@/constants/envVariables';

import 'mapbox-gl/dist/mapbox-gl.css';

class BankCardMap extends PureComponent {
  render() {
    const { banksCoords } = this.props;
    const markers = banksCoords.map((bank, index) => (
      <Marker key={index} longitude={bank.longitude} latitude={bank.latitude} />
    ));
    return (
      <Map
        initialViewState={mapSettings}
        mapStyle={mapStyles}
        mapboxAccessToken={envVariables.mapboxApiKey}>
        {markers}
      </Map>
    );
  }
}

BankCardMap.propTypes = {
  banksCoords: PropTypes.array
};

export default BankCardMap;
