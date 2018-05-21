import rootReducer from '../reducers';
import {createStore, applyMiddleware} from "redux";
import reduxImmutableStateInvariat from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {

    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, reduxImmutableStateInvariat())
    );
}