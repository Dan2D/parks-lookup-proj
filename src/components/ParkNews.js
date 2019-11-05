import React from 'react'
import { connect } from 'react-redux';
import { getNews } from "../actions/parksDataActions";
import { formatDate } from "../utils/genHelpers";

import LoaderDots from "./Loaders/LoaderDots";

const mapDispatchToProps = dispatch => {
    return {
        getNews: (parkCode) => {
            return dispatch(getNews(parkCode));
        }
    }
}

function ParkNews({parkCode, newsPark, getNews, news, newsLoaded}) {
    let newsArr=[];
    if (Object.keys(news).length < 1){
        newsArr.push(
            <div key="no-news" class="news__content">
                <p class="news__none">
                    There is currently no news on this park.
                </p>
            </div>
        )
    }
    else {
        Object.keys(news).forEach(key => {
            newsArr.push(
                <div class="news__content card">
                    <h2 class="news__title">
                        {news[key].title}
                    </h2>
                    <span class="news__date">
                        {(formatDate(news[key].releasedate ))}
                    </span>
                    <p class="news_txt">
                        <strong>Abstract</strong>:
                        {` ${news[key].abstract}`}
                    </p>
                    <a href={news[key].url} class="news__lnk">More Info</a>
                </div>
            )
        });
    }
    

    function handleNewsExpand(parkCode) {
        if (parkCode === newsPark){return}
        getNews(parkCode);
    }

    return (
        <div className='news-container'>
                <h2 class="park__section-title park__section-title--news">
                    NEWS
                </h2>
                <input type="checkbox" style={{display: "none"}} name={`btn-expand--news`} id={`btn-expand--news`} className='btn-expand btn-expand--news' />
                <label 
                    htmlFor={`btn-expand--news`} 
                    class="btn-expand-label btn-expand-label--news"
                    onClick={() => handleNewsExpand(parkCode)}
                    />
            {newsLoaded && <LoaderDots expand={true} />}
            {!newsLoaded && newsArr}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        newsLoaded: state.parksData.news.loading,
        news: state.parksData.news.byId,
        newsPark: state.parksData.news.parkCode
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkNews)
