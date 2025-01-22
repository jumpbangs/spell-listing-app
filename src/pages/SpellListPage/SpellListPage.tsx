import React from 'react';
import { Virtuoso } from 'react-virtuoso';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  ListItem,
  ListItemButton,
  ListItemText,
  Skeleton,
} from '@mui/material';
import { useAppSelector } from 'store/store';

import Selector from 'components/Selector';
import { SpellTypes } from 'types/spellTypes';

import { useFetchAllSpellsQuery, useFetchSpellByIndexQuery } from '../../services/fetchSpell';
import { Levels } from '../../utils/constant';

import SpellDetail from './components/SpellDetails';

const SpellListPage = () => {
  const [selectedSkill, setSelectedSkill] = React.useState('');
  const [selectLevel, setSelectedLevel] = React.useState('All');
  const favoriteSpells = useAppSelector(state => state.favorites?.savedSpells);

  const { data: spellData, isFetching: fetchingSpells } = useFetchAllSpellsQuery(selectLevel);

  const { data: spellDetails, isFetching } = useFetchSpellByIndexQuery(selectedSkill);

  const renderRow = (index: number, value: SpellTypes) => {
    const isFavorite = favoriteSpells.find((spell: SpellTypes) => spell.index === value.index);

    return (
      <ListItem key={index} disablePadding>
        <ListItemButton onClick={() => setSelectedSkill(value.index)}>
          <ListItemText primary={value.name} />
        </ListItemButton>
        {isFavorite && <FavoriteIcon sx={{ color: 'red' }} />}
      </ListItem>
    );
  };

  return (
    <Container fixed>
      <h1 style={{ color: 'whitesmoke' }}>Spell Listings</h1>
      <Grid container spacing={5}>
        <Grid container item xs={12} md={5}>
          <Box
            sx={{
              padding: 2,
              marginY: 2,
              width: '100%',
              borderRadius: 4,
              backgroundColor: '#EFECE7',
              boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
            }}
          >
            <Grid item md={12} xs={12}>
              <Selector
                title="Levels"
                selectValue={selectLevel}
                values={Levels}
                selectedValue={value => setSelectedLevel(String(value))}
              />
            </Grid>
            <Grid item md={12} xs={12}>
              {fetchingSpells ? (
                <Container>
                  <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                  </Box>
                </Container>
              ) : (
                <Box
                  sx={{
                    border: 1,
                    marginY: 2,
                    borderRadius: 2,
                    borderColor: '#B8B5B2',
                    overflow: 'overlay',
                    height: {
                      xs: '350px',
                      md: '550px',
                    },
                  }}
                >
                  <Virtuoso
                    style={{ height: '100%' }}
                    data={spellData?.results}
                    itemContent={(index, value) => renderRow(index, value)}
                  />
                </Box>
              )}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          {isFetching ? (
            <Skeleton variant="rectangular">
              <SpellDetail details={spellDetails} isFetching={true} />
            </Skeleton>
          ) : (
            <Box
              sx={{
                padding: 1,
                marginY: 1,
                width: '100%',
              }}
            >
              <SpellDetail details={spellDetails} />
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SpellListPage;
