import React from 'react';

function ParkContent({content}) {

    const generalParkContent = (
        <>
            <ParkAlerts alerts={alerts} />
            <ParkEvents parkCode={parkCode}/>
            <ParkNews parkCode={parkCode} />
        </>
    );

    return (
        <div className="park-page-container">
        <ParkNav parkCode={parkCode} state={state} onClick={(navContent) => handleNavClick(navContent)}/>
        <div className="park-container">
            <div className="park-content-container">
                <h1 className="park__name">
                    {PARK_NAME}
                </h1>
                <span className="park__states">
                    {`States: ${PARK_STATES}`}
                </span>
                <p className="park__dscrpt">
                    {PARK_DSCRPT}
                </p>
                <section className="park__section park__section--weather">
                    <h2 className="park__section-title">
                        WEATHER
                    </h2>
                    <p className="park__section-txt">
                        {PARK_WEATHER_TXT}
                    </p>
                </section>
                {content === 'general' && generalParkContent}
                {content === 'camps' &&  <ParkCamps parkCode={parkCode} />}
                {content === 'vc' && <ParkVC parkCode={parkCode} />}
            </div>
            <div className='map-section-container'>
                <div className='map-container'>
                    <MapContainer 
                        showMap={true}
                        markers={mapContent} 
                        pos={formatCoord(parks[parkCode].latLong)} 
                        zoom={8}
                    /> 
                </div>  
            </div>
        </div>
    </div>
    )
}

export default ParkContent
