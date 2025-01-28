import React from 'react';
import { Virtuoso } from 'react-virtuoso';
import Fuse from 'fuse.js';

import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  Box,
  CircularProgress,
  Container,
  ListItem,
  ListItemButton,
  ListItemText,
  Skeleton,
  TextField,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

import Selector from 'components/Selector';
import { useFetchAllSpellsQuery, useFetchSpellByIndexQuery } from 'services/fetchSpell';
import { useAppSelector } from 'store/store';
import { SpellTypes } from 'types/spellTypes';
import { Levels } from 'utils/constant';

import SpellDetail from './components/SpellDetails';

const searchOptions = {
  includeScore: true,
  includeMatches: true,
  threshold: 0.5,
  keys: ['name', 'index'],
};

const SpellListPage = () => {
  const [selectedSkill, setSelectedSkill] = React.useState('');
  const [selectLevel, setSelectedLevel] = React.useState('All');
  const favoriteSpells = useAppSelector(state => state.favorites?.savedSpells);
  const [searchResult, setSearchResult] = React.useState([]);

  const { data: spellData, isFetching: fetchingSpells } = useFetchAllSpellsQuery(selectLevel);

  const { data: spellDetails, isFetching } = useFetchSpellByIndexQuery(selectedSkill);

  React.useEffect(() => {
    if (!isFetching && spellData) {
      setSearchResult(spellData?.results);
    }
  }, [isFetching, spellData]);

  const handleSearchSpell = (event: React.ChangeEvent<HTMLInputElement>) => {
    const spellDataList = new Fuse(spellData.results, searchOptions);
    const searchResult = spellDataList.search(event.target.value);
    const mappedSearchResults = searchResult.map(value => value.item);
    setSearchResult(mappedSearchResults.length > 0 ? mappedSearchResults : spellData?.results);
  };

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
        <Grid container size={{ xs: 12, md: 5 }}>
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
            <Grid size={{ md: 12, xs: 12 }}>
              {/* Level Selector */}
              <Selector
                title="Levels"
                selectValue={selectLevel}
                values={Levels}
                selectedValue={value => setSelectedLevel(String(value))}
              />
              <TextField
                variant="outlined"
                fullWidth
                sx={{ marginY: '8px' }}
                label={'Search for Spells'}
                onChange={handleSearchSpell}
              />
            </Grid>
            {/* Spell Listing */}
            <Grid size={{ md: 12, xs: 12 }}>
              {fetchingSpells ? (
                <Container>
                  <Box sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center', marginY: '30px' }}>
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
                    data={searchResult}
                    itemContent={(index, value) => renderRow(index, value)}
                  />
                </Box>
              )}
            </Grid>
          </Box>
        </Grid>

        <Grid size={{ md: 7, xs: 12 }}>
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
