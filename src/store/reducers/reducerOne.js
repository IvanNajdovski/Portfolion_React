import * as actionTypes from '../actions/actionTypes';

const initialState = {
    number: 0,
    activeIn: true
};

export default (state = initialState, action) => {
    switch (action.type){
        case actionTypes.UPDATE_STATE:
            return{...state, number: action.payload.number};
        case actionTypes.FADE_IN:
            return{...state, activeIn: !state.activeIn};
        default:
            return state
    }
};