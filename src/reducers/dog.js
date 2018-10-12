
import { FETCH_DOG_REQUEST, FETCH_DOG_SUCCESS, FETCH_DOG_ERROR, ADOPT_DOG_REQUEST,  ADOPT_DOG_ERROR } from '../actions'

const initialState = {
    loading: false,
    data: null,
    error: null
}


export const dogReducer = (state=initialState, action) => {
    if( action.type===FETCH_DOG_REQUEST){
        return Object.assign({}, state, {
            loading: true
        })
    } else if( action.type===FETCH_DOG_SUCCESS){
        //console.log(action.data);
        return Object.assign({}, state, {
            loading: false,
            data: action.data
        })
    } else if( action.type===FETCH_DOG_ERROR){
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        })
    } else if( action.type===ADOPT_DOG_REQUEST){
        return Object.assign({}, state, {
            loading: true
           
        })
    }  else if( action.type===ADOPT_DOG_ERROR){
        return Object.assign({}, state, {
            loading: false
           
        })
    } return state;

};
