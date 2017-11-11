/**
 * Map for segments
 */

import * as React from 'react';
import { Map, Polyline, TileLayer} from 'react-leaflet';

import { IPoint } from './../model/IPoint';

export interface IGeneralMapProps {
    points: IPoint[];
}

// tslint:disable-next-line:variable-name
export const SegmentMap: React.StatelessComponent<IGeneralMapProps> = ({ points }) => (
    <Map center={points[0]} zoom={ 12 } style={{flex: 1, minHeight: '300px'}}>
        <TileLayer
            url='//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polyline positions={points} />
    </Map>
);
