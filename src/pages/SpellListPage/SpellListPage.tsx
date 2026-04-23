import React from 'react';
import { Virtuoso } from 'react-virtuoso';
import Fuse from 'fuse.js';

import CasinoRoundedIcon from '@mui/icons-material/CasinoRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  ListItem,
  ListItemButton,
  ListItemText,
  Skeleton,
  TextField,
} from '@mui/material';
import Grid from '@mui/material/Grid';

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
  const spellRef = React.useRef<HTMLDivElement | null>(null);

  const [selectedSkill, setSelectedSkill] = React.useState('');
  const [selectLevel, setSelectedLevel] = React.useState('All');
  const favoriteSpells = useAppSelector(state => state.favorites?.savedSpells);

  const { data: spellData, isFetching: fetchingSpells } = useFetchAllSpellsQuery(selectLevel);

  const { data: spellDetails, isFetching } = useFetchSpellByIndexQuery(selectedSkill);

  const fuseIndex = React.useMemo(() => {
    if (spellData?.results) return null;
    return new Fuse(spellData?.results, searchOptions);
  }, [spellData]);

  const [searchInput, setSearchInput] = React.useState('');
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    const t = setTimeout(() => setSearchQuery(searchInput), 150);
    return () => clearTimeout(t);
  }, [searchInput]);

  // Memoize filter result using the prebuilt index
  const searchResult = React.useMemo(() => {
    const results = spellData?.results ?? [];
    if (!searchQuery.trim() || !fuseIndex) return results;
    const matches = fuseIndex.search(searchQuery).map(v => v.item);
    return matches.length > 0 ? matches : results;
  }, [spellData, searchQuery, fuseIndex]);

  // Favorites lookup in O(1)
  const favoriteSet = React.useMemo(() => new Set(favoriteSpells.map(s => s.index)), [favoriteSpells]);

  const renderRow = React.useCallback(
    (_index: number, value: SpellTypes) => {
      const isFavorite = favoriteSet.has(value.index);
      return (
        <ListItem key={value.index} disablePadding>
          <ListItemButton onClick={() => setSelectedSkill(value.index)}>
            <ListItemText primary={value.name} />
          </ListItemButton>
          {isFavorite && <FavoriteIcon sx={{ color: 'red' }} />}
        </ListItem>
      );
    },
    [favoriteSet],
  );

  // Simplified handler — just updates the input
  const handleSearchSpell = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSearchInput(event.target.value);
  };

  React.useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (spellDetails && isMobile && spellRef.current) {
      spellRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [spellDetails]);

  const randomSkillSelect = () => {
    const numberOfSkills = searchResult.length;
    const randomSkillIndex = Math.floor(Math.random() * Math.floor(numberOfSkills));
    const selectedRandomSkill = spellData.results[randomSkillIndex].index;

    setSelectedSkill(selectedRandomSkill);
  };

  return (
    <Container fixed>
      <h1 style={{ color: 'whitesmoke' }}>Spell Listings</h1>
      <Grid container spacing={5}>
        <Grid container size={{ xs: 12, md: 5 }}>
          <div style={{ minHeight: '50vh', width: '100%' }}>
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
              <Grid container size={{ md: 12, xs: 12 }} spacing={2}>
                {/* Level Selector */}
                <Grid size={9}>
                  <Selector
                    title="Levels"
                    selectValue={selectLevel}
                    values={Levels}
                    selectedValue={value => setSelectedLevel(String(value))}
                  />
                </Grid>
                <Grid size={3}>
                  <Button onClick={randomSkillSelect}>
                    <CasinoRoundedIcon
                      sx={{
                        fontSize: '40px',
                        color: 'red',
                      }}
                    />
                  </Button>
                </Grid>
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
          </div>
        </Grid>

        <Grid size={{ md: 7, xs: 12 }} ref={spellRef}>
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
