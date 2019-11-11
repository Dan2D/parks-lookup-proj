import React from 'react'
import { connect } from 'react-redux';
import Parser from 'react-html-parser';
import { formatDate } from "../utils/genHelpers";

import LoaderDots from "./Loaders/LoaderDots";
import ExpandBtn from "./ExpandBtn";

function ParkNews({parkCode, newsPark, getNews, news, newsLoaded}) {
    let newsArr=[];
    if (Object.keys(news).length < 1){
        newsArr.push(
            <div key="no-news" className="news__content">
                <p className="news__none">
                    There is currently no news on this park.
                </p>
            </div>
        )
    }
    else {
        Object.keys(news).forEach(key => {
            const NEWS_ID = news[key].id;
            const NEWS_TITLE = news[key].title;
            const NEWS_DATE = news[key].releasedate;
            const NEWS_ABSTRACT = news[key].abstract;
            const NEWS_URL = news[key].url;
            newsArr.push(
                <div key={NEWS_ID} className="news__content card">
                    <h2 className="news__title">
                        {NEWS_TITLE}
                    </h2>
                    <span className="news__date">
                        {formatDate(NEWS_DATE)}
                    </span>
                    <p className="news_txt">
                        <strong>Abstract</strong>:<br/>
                        {Parser(NEWS_ABSTRACT)}
                    </p>
                    <a href={NEWS_URL} className="news__lnk">More Info</a>
                </div>
            )
        });
    };

    return (
        <div className='news-container'>
            <h2 className="park__section-title park__section-title--news">
                NEWS
            </h2>
            <ExpandBtn inputId='--news' labelId={2}/>
            {newsLoaded && <LoaderDots expand={true} />}
            {!newsLoaded && newsArr}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        newsLoaded: state.parksData.news.loading,
        news: state.parksData.news.byId,
    }
}

export default connect(mapStateToProps, null)(ParkNews)
