export const CREATE_TEAM = 'CREATE_TEAM';
export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const SELECT_TEAM = 'SELECT_TEAM';

export const createTeam = (data) => ({
    type: CREATE_TEAM,
    data
});


export const createUser = (data) => ({
    type: CREATE_USER,
    data
});

export const updateUser = (data) => ({
    type: UPDATE_USER,
    data
});

export const deleteUser = (data) => ({
    type: DELETE_USER,
    data
});

export const selectTeam = (data) => ({
    type: SELECT_TEAM,
    data
});