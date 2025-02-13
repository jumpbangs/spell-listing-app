import FavoriteIcon from '@mui/icons-material/Favorite';
import { Container, Stack, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Container fixed>
        <div className="center-content" style={{ minHeight: 120 }}>
          <Stack direction="row" color="white">
            <Typography>Made with </Typography>
            <FavoriteIcon sx={{ color: 'red', marginX: 1 }} />
            <Typography> using MaterialUI and React</Typography>
          </Stack>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
