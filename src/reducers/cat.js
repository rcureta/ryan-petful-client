import {  FETCH_CAT_REQUEST, FETCH_CAT_SUCCESS, FETCH_CAT_ERROR, ADOPT_CAT_REQUEST,  ADOPT_CAT_ERROR } from '../actions';
 
  
 const initialState = {
     loading: false,
     data: null,
     error: null
 }
 
 export const catReducer = (state=initialState, action) => {
     if( action.type===FETCH_CAT_REQUEST){
         return Object.assign({}, state, {
             loading: true
         })
     } else if( action.type===FETCH_CAT_SUCCESS){
         return Object.assign({}, state, {
             loading: false,
             data: action.data
         })
     } else if( action.type===FETCH_CAT_ERROR){
         return Object.assign({}, state, {
             loading: false,
             error: action.error
         })
     } else if( action.type===ADOPT_CAT_REQUEST){
         return Object.assign({}, state, {
             loading: true
            
         })
     }  else if( action.type===ADOPT_CAT_ERROR){
         return Object.assign({}, state, {
             loading: false
            
         })
     } return state;
 
 };
 
 
