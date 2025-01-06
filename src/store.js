import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import { listingListReducer } from './reducer/ListingReducer'; // Use the correct case

const reducer = combineReducers({listingList: listingListReducer});

const initialState = {};
const middleware = [thunk];
const store = createStore(
    reducer,initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;