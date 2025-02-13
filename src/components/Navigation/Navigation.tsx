import { Route, Routes } from 'react-router-dom';

import FavoriteSpellPage from 'pages/FavouriteSpellPage';
import NotFound from 'pages/NotFound';
import SpellListPage from 'pages/SpellListPage/SpellListPage';
import { ROUTE_FAVORITE, ROUTE_HOME } from 'routes/routes';

const Navigation = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path={ROUTE_HOME} element={<SpellListPage />} />
        <Route path={ROUTE_FAVORITE} element={<FavoriteSpellPage />} />
      </Routes>
    </div>
  );
};

export default Navigation;
