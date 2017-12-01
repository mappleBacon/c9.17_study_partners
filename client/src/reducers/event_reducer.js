import types from '../actions/types';

const DEFAULT_STATE = {all: [], userCreatedEvents: [], userJoinedEvents: [], };

export default (state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.GET_ALL:
            return {
                ...state,
                all: action.payload.data
            };
        case types.USER_CREATED_EVENTS:
            console.log("USER CREATED EVENTS REDUCER: ", action.payload);
            return {
                ...state, 
                userCreatedEvents: action.payload.data.data
            };
        case types.USER_JOINED_EVENTS:
            console.log("USER CREATED EVENTS REDUCER: ", action.payload);
            return {
                ...state,
                userJoinedEvents: action.payload.data.data
            };
        case types.DELETE_EVENT:
            return state;
        default:
            return state;
    }
}
