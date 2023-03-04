import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';

import { spellApi } from './services/fetchSpell';
import favoriteReducer from './services/addToFavorite';

const reducers = combineReducers({
  favorites: favoriteReducer,
  [spellApi.reducerPath]: spellApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, spellApi.middleware],
  // middleware: getDefaultMiddleware => {
  //   getDefaultMiddleware().concat([thunk, logger, spellApi.middleware]);
  // },
});

export default store;
