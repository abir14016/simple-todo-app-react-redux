import { ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELECTED, DELETED, TOGGLED } from "./actionTypes"


//action creators for todos features
export const added = (todoText) => {
    return {
        type: ADDED,
        payLoad: todoText
    };
};

export const toggled = (todoId) => {
    return {
        type: TOGGLED,
        payLoad: todoId
    };
};

export const colorSelected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payLoad: {
            todoId,
            color
        }
    };
};

export const deleted = (todoId) => {
    return {
        type: DELETED,
        payLoad: todoId
    };
};

export const allCompleted = () => {
    return {
        type: ALLCOMPLETED
    };
};

export const clearCompleted = () => {
    return {
        type: CLEARCOMPLETED
    };
};