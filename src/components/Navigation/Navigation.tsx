import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { CircularProgress } from '@mui/material';

import FavoriteSpellPage from 'pages/FavouriteSpellPage';
import { ROUTE_FAVORITE, ROUTE_HOME } from 'routes/routes';

const SpellListPageLazy = lazy(() => import('pages/SpellListPage'));
const NoFoundLazy = lazy(() => import('pages/NotFound'));

const Navigation = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        <Route path="*" element={<NoFoundLazy />} />
        <Route path={ROUTE_HOME} element={<SpellListPageLazy />} />
        <Route path={ROUTE_FAVORITE} element={<FavoriteSpellPage />} />
      </Routes>
    </Suspense>
  );
};

export default Navigation;
