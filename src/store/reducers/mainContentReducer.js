import * as actionTypes from '../actions/actionTypes';

const initialState = {
    clicked: null
};

export default (state=initialState, action) => {
    switch(action.type){
        case actionTypes.FOCUS_TECH:
            return{...state, clicked: state.clicked ? state.clicked === "left" ? "left" : null : "left"};
        case actionTypes.FOCUS_PROJECTS:
            return{...state, clicked: state.clicked ? state.clicked === "right" ? "right" : null : "right"};
        default:
            return state
    }
}