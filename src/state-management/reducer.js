import * as actions from './action';
import appState from './app-state';

function todoReducer(state = appState, action) {
    if (action.type === actions.TODODATA) {
        console.log('action.payADD', action.payload);
        return {
            ...state,
            todoData: 
            [...state.todoData, action.payload],
    
        }
    }

    if (action.type === actions.DELETE) {
        console.log('action.pay', action.payload, state.todoData.filter(el => el !== action.payload));

        return {
            ...state,
            todoData: state.todoData.filter(el => el !== action.payload)

        }



    }

    else {
        return state
    }


}


export default todoReducer;