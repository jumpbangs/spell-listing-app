import { useDispatch, useSelector } from 'react-redux';

import { DarkModeOutlined, WbSunnyOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { RootState } from 'store/store';
import { toggleTheme } from 'store/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <>
      <IconButton onClick={() => dispatch(toggleTheme())}>
        {mode === 'light' ? <DarkModeOutlined sx={{ color: '#FFF' }} /> : <WbSunnyOutlined sx={{ color: '#FFC000' }} />}
      </IconButton>
    </>
  );
};

export default ThemeToggle;
