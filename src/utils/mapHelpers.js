
export function handleMarkerClick(num) {
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

export function handleMarkerHover(num, event) {
        let toolTip = document.querySelector(`.tooltip-${num}`);
        if (event === 'enter'){
            toolTip.style.display = 'block';
        }
        else {
            toolTip.style.display = 'none';
        }
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
    