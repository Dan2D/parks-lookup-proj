import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { setPark } from "../actions/parksDataActions";

import ExpandBtn from "./ExpandBtn";

const mapDispatchToProps = dispatch => {
    return {
        setPark: (parkCode) => {
            return dispatch(setPark(parkCode));
        }
    }
}


function SummarySection({num, title, dscrpt, url, type, setPark, parkCode, ...props}) {
    const TYPE_PARK = type === 'park';
    const parkContent = (
        <>
            <ExpandBtn identifier={num}/>
            <div className='park-summary-container'>
                <p className={`section-dscrpt`}>{dscrpt}</p>
                <Link to={`/parks/${parkCode}/`} className="btn btn--park-lnk" onClick={() => setPark(parkCode)}>
                    GO TO PARK
                    <img className="dropdown__btn" src={require("../assets/images/arrow-down.png")} alt=""/>    
                </Link>
            </div>
        </>
    );

    const defaultContent = (
        <>
            <p className={`section-dscrpt`}>{dscrpt}</p>
            {url &&             
                <a href={url} target='_blank' rel='noopener noreferrer'>
                    More Info
                </a>
            }
         <hr/>
        </>
    )

    return (
        <section className='park-section-container' 
                 onMouseEnter={() => props.onMouseEnter(num)} 
                 onMouseLeave={() => props.onMouseLeave(num)}>
            <div className='section-title-container' >
                <span className='section__num'>{num}</span>
                <h3 className={`section__title`}>{title}</h3>
            </div>
            {TYPE_PARK ? parkContent : defaultContent}
        </section>
    )
}

export default connect(null, mapDispatchToProps)(SummarySection)
