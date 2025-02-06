import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { MuiMarkdown } from 'mui-markdown';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { Box, Card, CardActions, CardContent, Divider,Grid2, IconButton, Typography } from '@mui/material';

import InLineIconText from 'components/InlineIconText';
import { addToFavorite, removeFromFavorite } from 'services/addToFavourite';
import { useAppSelector } from 'store/store';
import { DamageTypes, SpellTypes } from 'types/spellTypes';

import 'react-toastify/dist/ReactToastify.css';

interface SpellDetailProps {
  details: SpellTypes;
  isFetching?: boolean;
}

const SpellDetail = ({ details }: SpellDetailProps) => {
  const spellItem = details;
  const dispatch = useDispatch();
  const favoriteSpells = useAppSelector(state => state.favorites.savedSpells);

  const attackType = spellItem?.attack_type;
  const material = spellItem?.material;
  const description = spellItem?.desc;

  const saveSpell = (spellToSave: SpellTypes) => {
    dispatch(addToFavorite(spellToSave));
    toast.success('Added to favorites ❤️', {
      position: 'bottom-right',
      autoClose: 500,
      draggable: true,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      hideProgressBar: false,
    });
  };

  const removeSpell = (spellToRemove: object) => {
    dispatch(removeFromFavorite(spellToRemove));
    toast.success('Removed to from favorites 💔', {
      position: 'bottom-right',
      autoClose: 500,
      draggable: true,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      hideProgressBar: false,
    });
  };

  const contentStyle = {
    border: 1,
    borderRadius: 2,
    borderColor: '#B8B5B2',
    backgroundColor: '#EFECE7',
    boxShadow: '0 3px 10px rgb(0 0 0 / 0.2)',
  };

  const renderDescriptionAccordion = (values: string[]) => {
    const description = values.join('\n');
    return (
      <div className="mt-2">
        <MuiMarkdown>{description}</MuiMarkdown>
      </div>
    );
  };

  const renderSpellLevelStar = (title: string, level: number) => {
    const stars = new Array(level).fill(null);
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <div className="title-text" style={{ marginRight: '10px' }}>
          <span className="title">{title}</span>
          <Typography sx={{ textAlign: 'center', fontSize: '18px' }}>{String(level)}</Typography>
        </div>
        {stars.map((_, index) => (
          <StarIcon key={index} color="primary" />
        ))}
      </div>
    );
  };

  const renderDamageDetails = (value: DamageTypes) => {
    const damage_name = value.damage_type?.name || 'Unknown';
    const damage_slot = value.damage_at_slot_level as { [key: string]: string };

    return (
      <Grid2 container spacing={2} sx={{ marginY: '10px' }}>
        <Grid2 size={{ xs: 4 }}>
          <Typography
            sx={{
              color: 'black',
              fontSize: '18px',
              marginRight: '5px',
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}
          >
            Damage Type:
          </Typography>
          <Typography>{damage_name}</Typography>
        </Grid2>
        <Grid2 size={{ xs: 8 }}>
          <Typography
            sx={{
              color: 'black',
              fontSize: '18px',
              marginRight: '5px',
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}
          >
            Damage Level:
          </Typography>
          {damage_slot ? (
            Object.entries(damage_slot).map(([key, value]) => (
              <div key={`damage-${key}`}>
                <strong>{Number(key)}:</strong> {value}
              </div>
            ))
          ) : (
            <div>No damage slots available</div>
          )}
        </Grid2>
      </Grid2>
    );
  };

  return (
    <>
      {spellItem?.name && (
        <Card sx={contentStyle}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <InLineIconText Title="Spell name :" Text={`${spellItem.name}`} />
            </Typography>
            <Grid2 container spacing={2} marginY="10px">
              <Grid2 size={{ md: 8, sm: 6 }}>{renderSpellLevelStar('Spell Level :', spellItem.level)}</Grid2>
              <Grid2 size={{ md: 4, sm: 6 }}>
                <InLineIconText Title="Range :" Text={`${spellItem.range} `} />
              </Grid2>
              <Grid2 size="grow">
                <InLineIconText Title="Spell Duration :" Text={`${spellItem.duration} `} />
              </Grid2>
              <Grid2 size="grow">
                <InLineIconText Title="Casting time :" Text={`${spellItem?.casting_time} `} />
              </Grid2>
            </Grid2>

            <Grid2 container spacing={1} marginY="10px">
              {attackType && (
                <Grid2 size={10}>
                  <Box marginY="10px">
                    <InLineIconText Title="Attack type :" Text={`${attackType} `} />
                  </Box>
                </Grid2>
              )}

              {material && (
                <Grid2 size={10}>
                  <Box marginY="10px">
                    <span className="title">Material :</span>
                    <Typography>{material}</Typography>
                  </Box>
                </Grid2>
              )}
            </Grid2>

            {spellItem && spellItem?.damage !== undefined && renderDamageDetails(spellItem?.damage)}
            {spellItem.higher_level[0] && (
              <Box>
                <Divider sx={{ marginBottom: '10px' }} />
                <Typography
                  sx={{
                    color: 'black',
                    fontSize: '18px',
                    marginRight: '5px',
                    fontWeight: 'bold',
                    textTransform: 'capitalize',
                  }}
                >
                  Higher Level:
                </Typography>
                <Typography>{spellItem.higher_level}</Typography>
              </Box>
            )}
            <div>
              <Divider sx={{ paddingY: '10px' }} />
              <span className="title">Description :</span>
              {description.length > 0 && renderDescriptionAccordion(description)}
            </div>
          </CardContent>

          <CardActions>
            {favoriteSpells.find((spell: { index: string }) => spell.index === spellItem.index) ? (
              <>
                <IconButton onClick={() => removeSpell(spellItem)}>
                  <FavoriteIcon sx={{ color: 'red' }} />
                </IconButton>
              </>
            ) : (
              <>
                <IconButton onClick={() => saveSpell(spellItem)}>
                  <FavoriteBorderIcon />
                </IconButton>
              </>
            )}
          </CardActions>
        </Card>
      )}
    </>
  );
};

export default SpellDetail;
