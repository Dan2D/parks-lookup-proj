import React, {useEffect, useState} from 'react';
import { handleMarkerClick, handleMarkerHover, formatCoord } from "../utils/mapHelpers";
import L from 'leaflet';
import {Map, TileLayer, Marker, Tooltip} from 'react-leaflet';

// TODO(FIGURE OUT SOLUTION TO PREVENT WINDOW BEFORE FIXED MAP KICKS IN, MOVES CURSOR AND IS ANNOYING)
function MapContainer({showMap, markers, pos, zoom}) {
    const [position, setPosition] = useState(pos);
    let markerArr=[];

    useEffect(() => {
        setPosition(pos);
    }, [pos])
    
    Object.keys(markers).forEach((key, ind) => {
        let numIcon = L.divIcon({
                className: "num-icon", 
                iconSize: null, 
                iconAnchor: [40, 22],
                tooltipAnchor: [0, 0],
                html: `<span class='marker-${ind+1}'>${parseInt(ind+1)}</span>` 
            });
        const PARK_NAME = markers[key].name;
        const COORD = formatCoord(markers[key].latLong);
        if (COORD){
            markerArr.push(
                <Marker key={key}  
                        position={COORD} 
                        icon={numIcon} 
                        onClick={() => handleMarkerClick(ind+1)} 
                        onMouseOver={() => handleMarkerHover(ind + 1, 'enter')} 
                        onMouseOut={() => handleMarkerHover(ind + 1, 'leave')}>
                    <Tooltip className={`tooltip-${ind+1}`} direction='left'  permanent={true}>
                        {PARK_NAME}
                    </Tooltip>
                </Marker>
            )
        }
    });

        return (
            <div className='map-container'>
                {showMap && 
                    <Map center={position} zoom={zoom}>
                        <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        />
                        {markerArr}
                    </Map>
                }
            </div>
        )
}

export default MapContainer
