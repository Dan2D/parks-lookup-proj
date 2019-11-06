import React from 'react';
import CampCard from "./CampCard";

function Campsites({title, data}) {
    const TITLE = title.toUpperCase();
    const CLASS = title.replace(" ", "-");

    let CAMPSITE_OTHER_CNT, CAMPSITE_ELEC_HOOKUPS_CNT, 
        CAMPSITE_HORSE_CNT, CAMPSITE_GROUP_CNT, CAMPSITE_RV_ONLY_CNT, 
        CAMPSITE_TENT_ONLY_CNT, CAMPSITE_TOTAL_CNT;
    let AMENITY_TOILETS, AMENITY_DUMP, AMENITY_WATER, AMENITY_FIREWOOD, AMENITY_FOOD_STORAGE;

    if (title.includes("campsites")) {
         CAMPSITE_OTHER_CNT = data.other;
         CAMPSITE_ELEC_HOOKUPS_CNT = data.electricalhookups;
         CAMPSITE_HORSE_CNT = data.horse;
         CAMPSITE_GROUP_CNT = data.group;
         CAMPSITE_RV_ONLY_CNT = data.rvonly;
         CAMPSITE_TENT_ONLY_CNT = data.tentonly;
         CAMPSITE_TOTAL_CNT = data.totalsites;
    }
    else if (title.includes("amenities")){
         AMENITY_TOILETS = checkAvailability(data.toilets.join(""))
         AMENITY_DUMP = checkAvailability(data.trashrecyclingcollection);
         AMENITY_WATER = checkAvailability(data.potablewater.join(""));
         AMENITY_FIREWOOD = checkAvailability(data.firewoodforsale);
         AMENITY_FOOD_STORAGE = checkAvailability(data.foodstoragelockers);
    }


    function checkAvailability(str){
        let regex = /year round|seasonal/i;
        str = str.toString();
        if (regex.test(str)){
            return (str).match(regex).join("");
        }
        return "";
    }

    const campSites = (
        <>
            <div className="camp-icons-container">
                {CAMPSITE_OTHER_CNT != 0 && <CampCard title="Other" type="other" num={CAMPSITE_OTHER_CNT} txt=""/>}
                {CAMPSITE_GROUP_CNT != 0 && <CampCard title="Group" type="group" num={CAMPSITE_GROUP_CNT} txt=""/>}
                {CAMPSITE_RV_ONLY_CNT != 0 && <CampCard title="RV Only" type="rv" num={CAMPSITE_RV_ONLY_CNT} txt=""/>}
                {CAMPSITE_ELEC_HOOKUPS_CNT != 0 && <CampCard title="Electrical Hook Ups" type="electric" num={CAMPSITE_ELEC_HOOKUPS_CNT} txt=""/>}
                {CAMPSITE_HORSE_CNT != 0 && <CampCard title="Horse" type="horse" num={CAMPSITE_HORSE_CNT} txt=""/>}
                {CAMPSITE_TENT_ONLY_CNT != 0 && <CampCard title="Tent Only" type="tent" num={CAMPSITE_TENT_ONLY_CNT} txt=""/>}
            </div>
            <p className='camp__total-sites'>
                {`Total Designated Sites - ${CAMPSITE_TOTAL_CNT}`}<br/>
                <span>(May not include primitive)</span>
            </p>
        </>
    );

    const campAmenities = (
        <div className="camp-icons-container">
            {AMENITY_DUMP && <CampCard title="Trash" type="dump"txt={AMENITY_DUMP}/>}
            {AMENITY_TOILETS && <CampCard title="Toilets" type="toilets" txt={AMENITY_TOILETS}/>}
            {AMENITY_WATER && <CampCard title="Water" type="water" txt={AMENITY_WATER} />}
            {AMENITY_FIREWOOD && <CampCard title="Firewood" type="firewood" txt={AMENITY_FIREWOOD} />}
            {AMENITY_FOOD_STORAGE && <CampCard title="Food Storage" type="food-storage" txt={AMENITY_FOOD_STORAGE} />}
        </div>
    )


    return (
        <div className={`${CLASS}-container`}>
            <h3 className='camp__section-title'>
                {TITLE}
            </h3>
            {title.includes("campsites") && campSites}
            {title.includes("amenities") && campAmenities }
        </div>
    )
}

export default Campsites
