import React from 'react';
import { useSelector } from 'react-redux';
import { Box,Container, Divider } from '@mui/material';

import SpellDetail from 'pages/SpellListPage/components/SpellDetails';

const FavoriteSpellPage = () => {
  const favoriteSpells = useSelector(state => state.favorites?.savedSpells);

  return (
    <Container fixed>
      <h1 style={{ color: 'whitesmoke' }}>Favorite Spell Page</h1>

      {favoriteSpells.length > 0 ? (
        favoriteSpells.map((spell, index) => {
          return (
            <React.Fragment key={index}>
              <Box mt={2} mb={5} sx={{ borderRadius: 2 }}>
                <SpellDetail details={spell} />
                {index >= 0 && <Divider mb={2} />}
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
