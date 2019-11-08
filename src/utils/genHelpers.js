
export function formatDate(date) {
    if (date.length > 10) {
        date = date.substr(0,10);
    }
    date = date.split("-");
    let year = date.shift();
    date.push(year);
    date = date.join("/");
    return date;
}

export function checkIfEmpty(obj) {
    return Object.keys(obj).length < 1 ? true : false;
}

export function handleSearchScroll() {
    // if (window.innerHeight >= 920) {
    //     return null;
    // }
    const WIN_POS_TOP = window.scrollY;
    const MAP = document.querySelector(".map-section-container");
    if (MAP) {
        if (WIN_POS_TOP < 120 && MAP.style.position !== "relative") {
            MAP.style.position = "relative";
            MAP.style.top = 'auto';
            MAP.style.right = 'auto';
        }
        else if (WIN_POS_TOP > 120 && MAP.style.position !== "fixed" ){
            MAP.style.position = "fixed";
            MAP.style.top = 15 + "px";
            MAP.style.right = 10 + "px";
        }
    }
};

export function formatCoord(data){
    return data.match(/-?\d*\.\d+/g)
};

export function handleParkHover(parkNum, event) {
    console.log(parkNum, event)
    let marker = document.querySelector(`span.marker-${parkNum}`).parentElement;
    let tooltip = document.querySelector(`div.tooltip-${parkNum}`);
    if (event === 'enter') {   
        marker.classList.add('num-icon--hover');
        tooltip.style.display = 'block';
    }
    else {
       marker.classList.remove("num-icon--hover");
       tooltip.style.display = 'none';
    }
}