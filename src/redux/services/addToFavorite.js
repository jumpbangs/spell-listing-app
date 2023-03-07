import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedSpells: [],
};

export const saveToFavoriteSlice = createSlice({
  name: 'favoriteSpellList',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const spellToAdd = action.payload;
      if (state.savedSpells.length > 0) {
        const checkIfSpellSaved = state.savedSpells.findIndex(item => item.index === spellToAdd.index);
        if (checkIfSpellSaved === -1) {
          state.savedSpells.push(spellToAdd);
        }
      } else {
        state.savedSpells.push(spellToAdd);
      }
    },
    removeFromFavorite: (state, action) => {
      const spellToRemove = action.payload;
      const findIndex = state.savedSpells.findIndex(item => item.index === spellToRemove.index);
      if (findIndex !== -1) {
        return {
          ...state,
          savedSpells: state.savedSpells.filter(item => item.index !== spellToRemove.index),
        };
      }
    },
  },
});

export const { addToFavorite, removeFromFavorite } = saveToFavoriteSlice.actions;

export default saveToFavoriteSlice.reducer;
