import { createStore } from 'redux';
import { reducers } from './reducers';

function configureStore(state = {}) {
  const store = createStore(
    reducers,
    state,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // To make Redux DevTools work
  );
  return store;
};

export default configureStore;