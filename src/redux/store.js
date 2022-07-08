import { createStore } from 'redux';
<<<<<<< HEAD
import initialState from './initialState';

=======
>>>>>>> c7baab8603683e39e5ce5495695568a4701b8c95
const reducer = (state, action) => {
  return state;
};

<<<<<<< HEAD
=======
const initialState = {
  columns: []
};
>>>>>>> c7baab8603683e39e5ce5495695568a4701b8c95

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

<<<<<<< HEAD
export default store;
=======
export default store;
>>>>>>> c7baab8603683e39e5ce5495695568a4701b8c95
