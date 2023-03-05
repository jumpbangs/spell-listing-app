import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from '@mui/material';

const InLineIconText = ({ Icon, Text, Title }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      {Icon}
      <div className="title-text">
        <span className="title">{Title}</span>
        <Typography>{Text}</Typography>
      </div>
    </div>
  );
};

InLineIconText.propTypes = {
  Icon: PropTypes.object,
  Text: PropTypes.string,
  Title: PropTypes.string,
};

export default InLineIconText;
