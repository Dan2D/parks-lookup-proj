import React from 'react';
// TODO(Have text: No Alerts Currently  when no alerts from response)
function ParkAlerts({alerts}) {
    let alertsArr = [];
    Object.keys(alerts).forEach(key => {
        alertsArr.push(
            <div key={key} class="alert__content">
                <h5 class="alert__title">
                    {alerts[key].title}
                </h5>
                <span class={`alert__category alert__category--${(alerts[key].category).replace(" ", "_")}`}>
                    {alerts[key].category && `Category: ${alerts[key].category}`}
                </span>
                <p class="alert__txt">
                    {alerts[key].description}
                </p>
                <a href={alerts[key].url} class="alert__lnk" target="_blank">More Info</a>
            </div>
        )
    });


    return (
        <div className='alert-container'>
            <h2 class="park__section-title park__section-title--alerts">
                ALERTS
            </h2>
                {alertsArr}
        </div>
    )
}

export default ParkAlerts