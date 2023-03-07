import { dummySpellData } from 'common/dummyData';
import reducer, { addToFavorite, removeFromFavorite } from 'redux/services/addToFavorite';

const initialState = {
  savedSpells: [],
};

test('should return the initial state', () => {
  expect(reducer(undefined, { type: undefined })).toEqual(initialState);
});

test('Add new spell to favorite', () => {
  const previousState = initialState;

  expect(reducer(previousState, addToFavorite(dummySpellData[0]))).toEqual({ savedSpells: [dummySpellData[0]] });
});

test('Does not add the same spell twice', () => {
  const previousState = { savedSpells: [dummySpellData[0]] };

  expect(reducer(previousState, addToFavorite(dummySpellData[0]))).toEqual({ savedSpells: [dummySpellData[0]] });
});

test('Remove spell from favorite', () => {
  const previousState = { savedSpells: [dummySpellData[0]] };

  expect(reducer(previousState, removeFromFavorite(dummySpellData[0]))).toEqual({ savedSpells: [] });
});

test('Remove spell from favorite list', () => {
  const previousState = { savedSpells: [dummySpellData[0], dummySpellData[1]] };

  expect(reducer(previousState, removeFromFavorite(dummySpellData[0]))).toEqual({ savedSpells: [dummySpellData[1]] });
});
