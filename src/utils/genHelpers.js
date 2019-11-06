
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
