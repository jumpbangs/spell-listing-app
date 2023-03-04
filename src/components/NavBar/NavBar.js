import * as React from 'react';
import { Box, Menu, AppBar, Button, Toolbar, MenuItem, Container, IconButton, Typography } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { ROUTE_HOME, ROUTE_FAVORITE } from 'common/Routes';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container fixed>
        <Toolbar disableGutters>
          {/* Logo  */}
          <AutoFixHighIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            noWrap
            href={ROUTE_HOME}
            component="a"
            variant="h6"
            sx={{
              mr: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              letterSpacing: '.1rem',
              fontFamily: 'monospace',
              display: { xs: 'none', md: 'flex' },
            }}
          >
            Spell Listing
          </Typography>

          {/* Menu Contents */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
                <Button href={ROUTE_FAVORITE}>
                  <Typography textAlign="center">Favorite</Typography>
                </Button>
              </MenuItem>
            </Menu>
          </Box>

          {/* Logo Responsive */}
          <AutoFixHighIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            href={ROUTE_HOME}
            noWrap
            variant="h5"
            component="a"
            sx={{
              mr: 2,
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              letterSpacing: '.3rem',
              textDecoration: 'none',
              fontFamily: 'monospace',
              display: { xs: 'flex', md: 'none' },
            }}
          >
            Spell Listing
          </Typography>

          {/* Left Menu Responsive */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

          {/* Right Menu Responsive */}
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }} href={ROUTE_FAVORITE}>
              Favorites
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
