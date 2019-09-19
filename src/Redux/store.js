import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export default createStore(combineReducers(),composeWithDevTools(applyMiddleware(thunk)));
