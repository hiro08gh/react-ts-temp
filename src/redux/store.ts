import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

const dev = process.env.NODE_ENV === 'development';

const store = createStore(
  rootReducer,
  dev ? composeWithDevTools(applyMiddleware(thunk)) : compose(applyMiddleware(thunk))
);

export default store;
