import {useReducer} from 'react';

const initialState = {name:'KD', count:0};
const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':{
            return {...state, count:state.count+action.payload}
        }
        case 'DECREMENT':{
            return {...state, count:state.count-action.payload}
        }
        default:
            return state;  
    }
}
function Counter(){
    const [state, dispatch] = useReducer(reducer, initialState)
    return (<>
    <h3>This is a Counter!</h3>
    <button onClick={()=> dispatch({type:'DECREMENT', payload:5})}>-</button>
    <span>Count: {state.count}</span>
    <button onClick={()=> dispatch({type:'INCREMENT', payload:10})}>+</button>
    </>)
}
export default Counter;