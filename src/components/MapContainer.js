import React, {useState} from 'react';
import L from 'leaflet';
import {Map, TileLayer, Marker, Popup, Tooltip} from 'react-leaflet';

function MapContainer({parks, statePos, zoom, }) {
    const [position, setPosition] = useState(statePos);

    function handleMarkerClick(num) {
        let btn = document.querySelector(`label.btn-expand-label${num}`);
        window.scrollTo(0, btn.parentElement.offsetTop);
        btn.click();
    }

    function handleMarkerHover(num, event) {
        console.log(num, event)
        let toolTip = document.querySelector(`.tooltip-${num}`);
        console.log(toolTip)
        if (event === 'enter'){
            toolTip.style.display = 'block';
        }
        else {
            toolTip.style.display = 'none';
        }
    }

    let markerArr=[];
    Object.keys(parks).forEach((key, ind) => {
        let numIcon = L.divIcon({
                className: "num-icon", 
                iconSize: null, 
                iconAnchor: [40, 22],
                tooltipAnchor: [0, 0],
                // popupAnchor: [-27, -20],
                html: `<span class='marker-${ind+1}'>${parseInt(ind+1)}</span>` });
        const PARK_NAME = parks[key].name;
        const COORD = formatCoord(parks[key].latLong);
        if (COORD){
            markerArr.push(
                <Marker key={key}  
                        position={COORD} 
                        icon={numIcon} 
                        onClick={() => handleMarkerClick(ind+1)} 
                        onMouseOver={() => handleMarkerHover(ind + 1, 'enter')} 
                        onMouseOut={() => handleMarkerHover(ind + 1, 'leave')}>
                    {/* <Popup>
                        <span>{PARK_NAME}</span>
                    </Popup> */}
                    <Tooltip className={`tooltip-${ind+1}`} direction='left'  permanent={true}>
                        {PARK_NAME}
                    </Tooltip>
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
