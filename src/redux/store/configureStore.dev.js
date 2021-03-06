import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger'

// const thunk = (store) => (next) => (action) =>
//   typeof action === 'function' ?
//   action(store.dispatch) :
//   next(action);


const middleware = [promise, thunk, ];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const enhancer = compose(
  applyMiddleware(...middleware),
  window.devToolsExtension ? window.devToolsExtension() : nope => nope
);

export default function (initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
