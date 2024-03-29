import { ADDED, ALLCOMPLETED, COLORSELECTED, DELETED, TOGGLED, CLEARCOMPLETED } from "./actionTypes";
import { initialState } from "./initialState";

const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return [
                ...state,
                {
                    id: nextTodoId(state)
                }
            ];

        case TOGGLED:
            return state.map(todo => {
                if (todo.id !== action.payLoad) {
                    return todo
                }
                else {
                    return {
                        ...todo,
                        completed: !todo.completed
                    };
                };
            });

        case COLORSELECTED:
            const { todoId, color } = action.payLoad;
            return state.map(todo => {
                if (todo.id !== todoId) {
                    return todo
                }
                else {
                    return {
                        ...todo,
                        color: color
                    };
                };
            });

        case DELETED:
            return state.filter(todo => todo.id !== action.payLoad);

        case ALLCOMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                };
            })

        case CLEARCOMPLETED:
            return state.filter(todo => !todo.completed);

        default:
            return state;
    }
};


export default todoReducer;