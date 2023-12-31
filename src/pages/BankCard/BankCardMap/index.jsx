import 'mapbox-gl/dist/mapbox-gl.css';

import { constMapSettings, constMapStyles } from '@constants/mapConstants';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl';

import constEnvVariables from '@/constants/constEnvVariables';

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
