import React, { PureComponent } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import { constMapSettings, constMapStyles } from '@constants/mapConstants';
import PropTypes from 'prop-types';

import constEnvVariables from '@/constants/constEnvVariables';

import 'mapbox-gl/dist/mapbox-gl.css';

class BankCardMap extends PureComponent {
  render() {
    const { banksCoords } = this.props;
    const markers = banksCoords.map(({ longitude, latitude }) => (
      <Marker key={longitude} longitude={longitude} latitude={latitude} />
    ));
    return (
      <Map
        initialViewState={constMapSettings}
        mapStyle={constMapStyles}
        mapboxAccessToken={constEnvVariables.mapboxApiKey}>
        {markers}
        <NavigationControl showCompass={false} />
      </Map>
    );
  }
}

BankCardMap.propTypes = {
  banksCoords: PropTypes.array
};

export default BankCardMap;
