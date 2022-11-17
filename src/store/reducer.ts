// THIRD-PARTY IMPORTS
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// PROJECT IMPORTS
import userReducer from '~/store/slices/user';

const reducer = combineReducers({
  user: persistReducer(
    {
      key: 'user',
      storage,
      keyPrefix: 'proctoring-'
    },
    userReducer
  )
});

export default reducer;
