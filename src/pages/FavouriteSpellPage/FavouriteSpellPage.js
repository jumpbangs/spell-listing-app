import React from 'react';
import { Container, Divider } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import SpellDetail from 'pages/SpellListPage/components/SpellDetails';

const FavoriteSpellPage = () => {
  const favoriteSpells = useSelector(state => state.favorites.savedSpells);

  return (
    <div>
      <Container fixed>
        <h1>Favorite Spell Page</h1>

        {favoriteSpells.map((spell, index) => {
          return (
            <>
              <SpellDetail details={spell} key={index} />
              {index >= 0 && <Divider mb={2} />}
            </>
          );
        })}
      </Container>
    </div>
  );
};

export default FavoriteSpellPage;
