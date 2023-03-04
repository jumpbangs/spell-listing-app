import React from 'react';
import PropTypes from 'prop-types';

const InLineIconText = ({ Icon, Text }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      {Icon}
      <span>{Text}</span>
    </div>
  );
};

InLineIconText.propTypes = {
  Icon: PropTypes.object,
  Text: PropTypes.string,
};

export default InLineIconText;
