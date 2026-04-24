import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeMode = 'light' | 'dark';

interface InitialStateProps {
  mode: ThemeMode;
}
const initialState: InitialStateProps = {
  mode: 'light',
};

const toggleThemeSlice = createSlice({
  name: 'toggleTheme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleTheme, setTheme } = toggleThemeSlice.actions;
export default toggleThemeSlice.reducer;
