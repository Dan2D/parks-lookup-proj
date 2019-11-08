import React, {useEffect, useState} from 'react';
import { formatCoord } from "../utils/genHelpers";
import L from 'leaflet';
import {Map, TileLayer, Marker, Tooltip} from 'react-leaflet';
// TODO(FIGURE OUT SOLUTION TO PREVENT WINDOW BEFORE FIXED MAP KICKS IN, MOVES CURSOR AND IS ANNOYING)
// TODO(NORMALIZE ALL BTN EXPAND LABEL CLASSES, DOESN'T CURRENTLY WORK WITH CAMPS OR VISITOR CENTERS)
function MapContainer({markers, pos, zoom, }) {
    const [position, setPosition] = useState(pos);
    const [atTop, setAtTop] = useState(true);
    // useEffect(() => {
    //     function handleScrollWatch() {
    //         console.log(window.scrollY);
    //         if (window.scrollY > 120){
    //             console.log("NOT AT TOP")
    //             setAtTop(false);
    //         }
    //         else {setAtTop(true);}
    //     }
    //     window.addEventListener('scroll', () => handleScrollWatch());
    //     return window.removeEventListener('scroll', () => handleScrollWatch());
    // }, [])

    function handleMarkerClick(num) {
        let btn = document.querySelector(`label.btn-expand-label${num}`);
        // if (num < 2 && !atTop){
        //     let btnTwo = document.querySelector('label.btn-expand-label2');
        //     window.scrollTo(0, btnTwo.parentElement.offsetTop);
        // }
        // else if (num < 2) {
            
        // }
        // else {
        //     window.scrollTo(0, btn.parentElement.offsetTop);
        // }
        window.scrollTo(0, btn.parentElement.offsetTop);
        btn.click();
    }

    function handleMarkerHover(num, event) {
        let toolTip = document.querySelector(`.tooltip-${num}`);
        if (event === 'enter'){
            toolTip.style.display = 'block';
        }
        else {
            toolTip.style.display = 'none';
        }
    }

    let markerArr=[];
    Object.keys(markers).forEach((key, ind) => {
        let numIcon = L.divIcon({
                className: "num-icon", 
                iconSize: null, 
                iconAnchor: [40, 22],
                tooltipAnchor: [0, 0],
                html: `<span class='marker-${ind+1}'>${parseInt(ind+1)}</span>` });
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
    })



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
