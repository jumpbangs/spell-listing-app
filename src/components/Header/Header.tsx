import * as React from 'react';
import { Link } from 'react-router-dom';

import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';

import { ROUTE_FAVORITE, ROUTE_HOME } from 'routes/routes';

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<HTMLButtonElement | null>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container fixed>
        <Toolbar disableGutters data-testid="navbar">
          {/* Logo  */}
          <AutoFixHighIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Link to={ROUTE_HOME} className="header-text">
            Spell Listing
          </Link>

          {/* Menu Contents */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={event => handleOpenNavMenu(event)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Button>
                  <Link to={ROUTE_FAVORITE} style={{ textDecoration: 'none' }}>
                    Favorites
                  </Link>
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          {/* Logo Responsive */}
          <AutoFixHighIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Link className="header-responsive-text" to={ROUTE_HOME}>
            Spell Listing
          </Link>

          {/* Left Menu Responsive */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

          {/* Right Menu Responsive */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Button onClick={handleCloseNavMenu}>
              <Link
                to={ROUTE_FAVORITE}
                style={{ marginRight: 8, color: 'white', display: 'block', textDecoration: 'none' }}
              >
                Favorites
              </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
