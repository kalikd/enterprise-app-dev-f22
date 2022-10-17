import {INCREMENT_ONE, DECREMENT_ONE} from '../Actions'
const initialState = {
    count:0
}
function reducer(state = initialState, actions) {

    switch(actions.type) {
        case INCREMENT_ONE:{
            return {count: state.count + 1}
        }
        case DECREMENT_ONE:{
            return {count: state.count - 1}
        }
        default:{
            return state
        }
    }

}
export default reducer;