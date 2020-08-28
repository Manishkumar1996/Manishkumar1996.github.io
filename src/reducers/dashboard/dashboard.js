import {
    FETCH_REPORT_SHEETS,
    FETCH_REPORT_SHEETS_RESULT,
    FETCH_REPORT_SHEETS_ERROR,
    FETCH_REPORT_SHEETS_RETRY,

    FETCH_REPORT_SHEET,
    FETCH_REPORT_SHEET_RESULT,
    FETCH_REPORT_SHEET_ERROR,
    FETCH_REPORT_SHEET_RETRY,
} from '../../actions/dashboard/dashboard';


const initialState = {
    detail: {},
    list: [],
    isFetchingList: false,
    isFetching: false,
    error: false,
    message: null,
    retry: false,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_REPORT_SHEETS:
            return {...state, isFetchingList: true, error: false, message: null, retry: false};
        case FETCH_REPORT_SHEETS_RESULT:
            return {...state, isFetchingList: false, list: action.data};
        case FETCH_REPORT_SHEETS_ERROR:
            return {...state, isFetchingList: false, error: true, message: action.message};
        case FETCH_REPORT_SHEETS_RETRY:
            return {...state, isFetchingList: false, retry: true, message: action.message};

        case FETCH_REPORT_SHEET:
            return {...state, isFetching: true, error: false, message: null, retry: false};
        case FETCH_REPORT_SHEET_RESULT:
            return {...state, isFetching: false, detail: action.data};
        case FETCH_REPORT_SHEET_ERROR:
            return {...state, isFetching: false, error: true, message: action.message};
        case FETCH_REPORT_SHEET_RETRY:
            return {...state, isFetching: false, retry: true, message: action.message};

        default:
            return {...state};
    }

};

export default reducer;
