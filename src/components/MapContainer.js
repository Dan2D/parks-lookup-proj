import React, {useState} from 'react';
import L from 'leaflet';
import {Map, TileLayer, Marker, Popup, Tooltip} from 'react-leaflet';

function MapContainer({statePos, zoom, parks}) {
    const [position, setPosition] = useState(statePos);
    


    let markerArr=[];
    Object.keys(parks).forEach((key, ind) => {
        let numIcon = L.divIcon({
                className: "num-icon", 
                iconSize: null, 
                iconAnchor: [40, 22],
                tooltipAnchor: [0, 0],
                html: `<span>${parseInt(ind+1)}</span>` });
        const PARK_NAME = parks[key].name;
        const COORD = formatCoord(parks[key].latLong);
        if (COORD){
            markerArr.push(
                <Marker key={key} position={COORD} icon={numIcon} >
                    <Popup>
                        <span>{PARK_NAME}</span>
                    </Popup>
                    <Tooltip direction='left' offset={[-40, 0]}>{PARK_NAME}</Tooltip>
                </Marker>
            )
        }
    })

    function formatCoord(data){
        return data.match(/-?\d*\.\d+/g)
        
    }

        return (
            <Map center={position} zoom={zoom}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                {markerArr}
        </Map>
        )
}

export default MapContainer
