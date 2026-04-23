import React from 'react';

import { Box, Container } from '@mui/material';

import SpellDetail from 'pages/SpellListPage/components/SpellDetails';
import { useAppSelector } from 'store/store';

const FavoriteSpellPage = () => {
  const favoriteSpells = useAppSelector(state => state.favorites?.savedSpells);

  return (
    <Container fixed>
      <h1 style={{ color: 'whitesmoke' }}>Favorite Spell Page</h1>

      {favoriteSpells.length > 0 ? (
        favoriteSpells.map((spell, index) => {
          return (
            <React.Fragment key={index}>
              <Box sx={{ borderRadius: 2, marginTop: 2, marginBottom: 5 }}>
                <SpellDetail details={spell} />
              </Box>
            </React.Fragment>
          );
        })
      ) : (
        <Box sx={{ height: '60vh' }}>
          <div className="center-content">
            <h2>No favorite spell saved 😔</h2>
          </div>
        </Box>
      )}
    </Container>
  );
};

export default FavoriteSpellPage;
