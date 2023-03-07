import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter, useNavigate } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import App from '../App';
import store from '../redux/store';

test('full app rendering/navigating', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  // verify page content for default route
  expect(screen.getByText(/Spell Listings/i)).toBeInTheDocument();

  // verify page content for expected route after navigating
  fireEvent.click(await screen.getAllByText(/Favorites/i)[0]);
  expect(screen.getByText(/Favorite Spell Page/i)).toBeInTheDocument();
});
