import React from "react";

export const margeObjectInList = (list, object) => {
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i].id === object.id) {
            list[i] = object
        }
    }
    return list;
};

export const selectByDefault = (list, selectId) => {
    if (!!list.length) {
        selectId = !selectId ? list[0].id : selectId;
    }
    return selectId
};

