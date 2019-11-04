export function setIds(data, prefix) {
    let tempIdObj = {};
    data.forEach((item) => {
        tempIdObj[item.parkCode] = item;
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