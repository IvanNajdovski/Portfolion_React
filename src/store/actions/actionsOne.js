import * as actionTypes from './actionTypes';

const setNewState = (number) => {
    return{
        type: actionTypes.UPDATE_STATE,
        payload: {
            number
        }
    }
};

export const updateState = (number) => {
    return dispatch => {
        const update = setInterval(()=>{
            console.log(number);
            number = number + 20;
            if(number+20 > 100){
                clearInterval(update)
                console.log("[INTERVAL CLEAR]")
            }
            dispatch(setNewState(number))

        }, 1000);

    }
};
// const fadeIn = () => {
//     return{
//         type: actionTypes.FADE_IN,
//     }
// };
// export const fadeInInit = () => {
//     return dispatch => {
//         setTimeout(() => {
//             console.log("[FADE UB]")
//             dispatch(fadeIn())
//         },3000)
//     }
// };