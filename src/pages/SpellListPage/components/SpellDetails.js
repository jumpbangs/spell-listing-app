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

import InLineIconText from '../../../components/InlineIconText';

const SpellDetail = ({ details }) => {
  const spellItem = details;

  // console.log(spellItem);

  const attackType = spellItem.attack_type;
  const material = spellItem.material;
  const description = spellItem.desc;

  const renderDescriptionAccordion = values => {
    return (
      <div className="mt-2">
        {values.map((item, index) => {
          return (
            <>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                  <Typography>{`Description ${index} `}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item}</Typography>
                </AccordionDetails>
              </Accordion>
            </>
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

            <IconButton>
              <FavoriteIcon />
            </IconButton>
          </CardContent>
        </Card>
      )}
    </>
  );
};

SpellDetail.propTypes = {
  details: PropTypes.object,
};

export default SpellDetail;
