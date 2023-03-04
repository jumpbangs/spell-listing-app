import React from 'react';
import PropTypes from 'prop-types';
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
import StraightenIcon from '@mui/icons-material/Straighten';
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
  };

  const removeSpell = spellToRemove => {
    dispatch(removeFromFavorite(spellToRemove));
  };

  const renderDescriptionAccordion = values => {
    return (
      <div className="mt-2">
        {values.map((item, index) => {
          return (
            <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography>{`Description ${index} `}</Typography>
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
        <Card>
          <CardContent>
            <Typography>{`Spell name: ${spellItem.name}`}</Typography>
            <Typography>{`Spell Level:${spellItem.level}`}</Typography>
            <InLineIconText Icon={<StraightenIcon />} Text={`Range: ${spellItem.range} `} />
            <Typography>{`Spell Duration: ${spellItem?.duration}`}</Typography>
            <Typography>{`Casting time: ${spellItem?.casting_time}`}</Typography>
            {attackType && <Typography>{`Attack type: ${spellItem?.attack_type}`}</Typography>}
            {material && <Typography> {`Material : ${material}`}</Typography>}
            {description.length > 1 ? renderDescriptionAccordion(description) : <Typography>{description}</Typography>}

            {favoriteSpells.find(spell => spell.index === spellItem.index) ? (
              <>
                <IconButton onClick={() => removeSpell(spellItem)}>
                  <FavoriteIcon />
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
