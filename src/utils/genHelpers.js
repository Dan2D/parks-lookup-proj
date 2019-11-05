
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