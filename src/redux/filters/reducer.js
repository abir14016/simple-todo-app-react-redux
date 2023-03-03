import { STATUSCHANGED, COLORCHANGED } from "./actionTypes";
import { initialState } from "./initialState";

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATUSCHANGED:
            return {
                ...state,
                status: action.payLoad
            }

        case COLORCHANGED:
            const { color, changeType } = action.payLoad;
            switch (changeType) {
                case "added":
                    return {
                        ...state,
                        colors: [
                            ...state.colors,
                            color
                        ]
                    }
                case "removed":
                    return {
                        ...state,
                        colors: state.colors.filter(existingColor => existingColor !== color)
                    }

                default:
                    return state;
            }

        default:
            return state;
    }
}

export default filterReducer;