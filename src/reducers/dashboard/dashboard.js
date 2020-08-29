import {
    CREATE_TEAM,
    CREATE_USER,
    DELETE_USER,
    SELECT_TEAM,
} from '../../actions/dashboard/dashboard';
import {selectByDefault} from "../../utils";

let LIST = [
    {
        id: 'team_0',
        team_name: 'Manish',
        team_type: 'team',
        users: [
            {
                id: 'user_0',
                user_name: 'Kumar',
                user_description: 'Hello, Manish Kumar Prajapat',
            },
            {
                id: 'user_1',
                user_name: 'Prajapat',
                user_description: 'Hello, Manish Kumar',
            }
        ]
    },
    {
        id: 'team_1',
        team_name: 'Kumar',
        team_type: 'team',
        users: [
            {
                id: 'user_0',
                user_name: 'manish kumar',
                user_description: 'Hello, Kumar Prajapat',
            },
            {
                id: 'user_1',
                user_name: 'ravi kumar',
                user_description: 'Hello, Manish',
            }
        ]
    }
];


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
            return {...state, list: action.data.list};
        case DELETE_USER:
            return {...state, list: action.data.list};
        case SELECT_TEAM:
            return {...state, selectId: action.data.id};

        default:
            return {...state};
    }

};

export default reducer;
