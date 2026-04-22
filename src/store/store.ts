import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import favoriteReducer from '../services/addToFavourite';
import { spellApi } from '../services/fetchSpell';

// Combine reducers
const reducers = combineReducers({
  favorites: favoriteReducer,
  [spellApi.reducerPath]: spellApi.reducer,
});

// Configure persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'],
};

// Wrap reducers with persistReducer
const persistedReducer = persistReducer(persistConfig, reducers);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/PURGE',
          'persist/REGISTER',
          'persist/FLUSH',
        ],
      },
    }).concat(spellApi.middleware),
});

export type RootState = ReturnType<typeof reducers>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
