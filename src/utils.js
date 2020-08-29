export const randomIdGenerate = (key) => {
    return key + Math.random().toString(36).substr(2, 9);
};

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

export const userCreate = (list, selectId, user) => {
    let team = list.filter(t => t.id === selectId)[0];
    team.users = [{...user, id: randomIdGenerate('user_')}, ...team.users];
    return margeObjectInList(list, team);
};

export const userUpdate = (list, selectId, user) => {
    let team = list.filter(t => t.id === selectId)[0];
    team.users = team.users.map(u => u.id === user.id ? user : u);
    return margeObjectInList(list, team);
};

export const userDelete = (list, selectId, user) => {
    let team = list.filter(t => t.id === selectId)[0];
    team.users = team.users.filter(u => u.id !== user.id);
    return margeObjectInList(list, team);
};

export const isStringIncludes = (user, search) => {
    return (user.user_name).toLowerCase().includes((search).toLowerCase());
};


