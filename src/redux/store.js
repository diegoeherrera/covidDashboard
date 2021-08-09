import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducer'
import {initialState} from './reducer'
import thunk from 'redux-thunk';
const store = createStore(
    rootReducer,
    initialState, applyMiddleware(thunk)
);

export default store;