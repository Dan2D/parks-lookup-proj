export function setIds(data, type) {
    let id = type === "park" ? "parkCode" : "id";
    let tempIdObj = {};
    data.forEach((item) => {
        tempIdObj[item[id]] = item;
    })
    return tempIdObj;
}

export function getAllIds(idObj) {
    let tempArr = [];
    Object.keys(idObj).forEach(key => {
        tempArr.push(key);
    });
    return tempArr;
}