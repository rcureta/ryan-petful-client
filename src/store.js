
import thunk from 'redux-thunk';

import { applyMiddleware, createStore } from 'redux';
//import { reducer } from './index';


import { combineReducers  } from 'redux';
import { catReducer } from './reducers/cat';
import { dogReducer } from './reducers/dog';

const reducer = combineReducers( {cat: catReducer, dog: dogReducer});

export const  store = createStore(
    reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   applyMiddleware(thunk)
);