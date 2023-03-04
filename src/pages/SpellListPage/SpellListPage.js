import React from 'react';
import { Virtuoso } from 'react-virtuoso';
import {
  Box,
  Grid,
  ListItem,
  Skeleton,
  Container,
  ListItemText,
  ListItemButton,
  CircularProgress,
} from '@mui/material';

import { Levels } from '../../common/Levels';
import Selector from '../../components/Selector';
import SpellDetail from './components/SpellDetails';
import { useFetchAllSpellsQuery, useFetchSpellByIndexQuery } from '../../redux/services/fetchSpell';

const SpellListPage = () => {
  const [selectLevel, setSelectedLevel] = React.useState('All');
  const [selectedSkill, setSelectedSkill] = React.useState('');

  const { data: spellData, isFetching: fetchingSpells } = useFetchAllSpellsQuery(selectLevel);

  const { data: spellDetails, isFetching } = useFetchSpellByIndexQuery(selectedSkill);

  const renderRow = (data, index) => {
    const item = data[index];

    return (
      <ListItem key={index} disablePadding>
        <ListItemButton onClick={() => setSelectedSkill(item.index)}>
          <ListItemText primary={item.name} />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <Container fixed>
      <h1>Spell Listings</h1>
      <Grid container>
        <Grid container xs={12} md={5}>
          <Grid item md={12} xs={12}>
            <Selector title="Levels" selectValue={selectLevel} values={Levels} selectedValue={setSelectedLevel} />
          </Grid>
          <Grid item md={12} xs={12}>
            {fetchingSpells ? (
              <Container>
                <Box sx={{ display: 'flex' }}>
                  <CircularProgress />
                </Box>
              </Container>
            ) : (
              <Virtuoso
                style={{ height: '400px', backgroundColor: 'yellow', marginLeft: 2 }}
                totalCount={spellData?.count}
                itemContent={index => renderRow(spellData?.results, index)}
              />
            )}
          </Grid>
        </Grid>
        <Grid xs={12} md={7}>
          {isFetching ? (
            <Container maxWidth="xl">
              <Skeleton variant="rectangular" width={360} height={260} />
            </Container>
          ) : (
            <SpellDetail details={spellDetails} />
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default SpellListPage;
