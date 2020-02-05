import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

function* Saga() {
  console.log('Hello Sagas!');
}

const dev = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  dev
    ? composeWithDevTools(applyMiddleware(thunk, sagaMiddleware))
    : compose(applyMiddleware(thunk, sagaMiddleware))
);

sagaMiddleware.run(Saga);

export default store;
