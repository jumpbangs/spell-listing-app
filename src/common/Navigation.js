import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROUTE_HOME, ROUTE_FAVORITE } from './Routes';
import FavoriteSpellPage from 'pages/FavouriteSpellPage';
import SpellListPage from 'pages/SpellListPage/SpellListPage';

const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route path={ROUTE_HOME} element={<SpellListPage />} />
        <Route path={ROUTE_FAVORITE} element={<FavoriteSpellPage />} />
      </Routes>
    </div>
  );
};

export default Navigation;
