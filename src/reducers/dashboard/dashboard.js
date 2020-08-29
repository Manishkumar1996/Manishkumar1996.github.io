import {
    CREATE_TEAM,
    CREATE_USER,
    UPDATE_USER,
    DELETE_USER,
    SELECT_TEAM,
} from '../../actions/dashboard/dashboard';
import {selectByDefault, userCreate, userDelete, userUpdate} from "../../utils";

const initialState = {
    selectId: '',
    list: [],
    isFetching: false,
    error: false,
    message: null,
    retry: false,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case CREATE_TEAM:
            return {
                ...state,
                list: [...state.list, action.data],
                selectId: selectByDefault([...state.list, action.data], state.selectId)
            };
        case CREATE_USER:
            return {...state, list: userCreate(state.list, state.selectId, action.data.user)};
        case UPDATE_USER:
            return {...state, list: userUpdate(state.list, state.selectId, action.data.user)};
        case DELETE_USER:
            return {...state, list: userDelete(state.list, state.selectId, action.data.user)};
        case SELECT_TEAM:
            return {...state, selectId: action.data.id};

        default:
            return {...state};
    }

};

export default reducer;
