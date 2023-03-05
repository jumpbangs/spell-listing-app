import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { useSelector, useDispatch } from 'react-redux';
import InLineIconText from 'components/InlineIconText';
import { addToFavorite, removeFromFavorite } from 'redux/services/addToFavorite';

const SpellDetail = ({ details }) => {
  const spellItem = details;
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(false);
  const favoriteSpells = useSelector(state => state.favorites.savedSpells);

  const attackType = spellItem?.attack_type;
  const material = spellItem?.material;
  const description = spellItem?.desc;

  const handleChange = panel => isExpanded => {
    setExpanded(isExpanded ? panel : false);
  };

  const saveSpell = spellToSave => {
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

  const removeSpell = spellToRemove => {
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

  const renderDescriptionAccordion = values => {
    return (
      <div className="mt-2">
        {values.map((item, index) => {
          return (
            <Accordion
              key={index}
              sx={contentStyle}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>{`Spell Description ${index + 1} `}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {spellItem?.name && (
        <Card sx={contentStyle}>
          <CardContent>
            <InLineIconText Title="Spell name :" Text={`${spellItem.name}`} />
            <InLineIconText Title="Spell Level :" Text={`${spellItem.level}`} />
            <InLineIconText Title="Range :" Text={`${spellItem.range} `} />
            <InLineIconText Title="Spell Duration :" Text={`${spellItem.duration} `} />
            <InLineIconText Title="Casting time :" Text={`${spellItem?.casting_time} `} />
            {attackType && <InLineIconText Title="Attack type :" Text={`${attackType} `} />}
            {attackType && <InLineIconText Title="Material :" Text={`${material} `} />}
            <div>
              <span className="title">Description :</span>
              {description.length > 1 ? (
                renderDescriptionAccordion(description)
              ) : (
                <Typography>{description}</Typography>
              )}
            </div>

            {favoriteSpells.find(spell => spell.index === spellItem.index) ? (
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
          </CardContent>
        </Card>
      )}
    </>
  );
};

SpellDetail.propTypes = {
  details: PropTypes.object,
  isFetching: PropTypes.bool,
};

export default SpellDetail;
