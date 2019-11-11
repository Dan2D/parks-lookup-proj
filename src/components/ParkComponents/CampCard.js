import React from 'react'

function CampCard({title, type, num, txt}) {

    return (
        <div className='camp-card-container'>
            <h3 className='camp-card__title'>{title}</h3>
            <div className='camp-card-content-container'>
                <i className={`camp-card__icon camp-card__icon--${type}`}/>
                <p className='camp-card__txt'>
                    {num ? num : txt}
                </p>
            </div>
        </div>
    )
}

export default CampCard
