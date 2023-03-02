import { COLORCHANGED, STATUSCHANGED } from "./actionTypes"


//action creators for filters features
export const statusChanged = (status) => {
    return {
        type: STATUSCHANGED,
        payLoad: status
    };
};

export const colorChanged = (color, changeType) => {
    return {
        type: COLORCHANGED,
        payLoad: {
            color,
            changeType
        }
    };
};