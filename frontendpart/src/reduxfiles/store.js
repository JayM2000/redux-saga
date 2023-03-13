// import {createStore,applyMiddleware} from 'redux';
// import createsagaware from 'redux-saga';
// import mysaga from './sagas';
// import reducers from './reducer';


// const sagamiddleware = createsagaware();
// const store = createStore(reducers,applyMiddleware(sagamiddleware));

// sagamiddleware.run(mysaga);

// export default store;


// *********************************************8

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createsagaware from 'redux-saga';
import mysaga from './sagas';
import reducers from './reducer';


const sagamiddleware = createsagaware();

const initialState = {};

const middleware = [thunk,sagamiddleware];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
sagamiddleware.run(mysaga);

export default store;