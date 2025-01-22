import { ReactNode } from 'react';

import { Typography } from '@mui/material';

interface InLineIconTextProps {
  Icon?: ReactNode;
  Text: string;
  Title: string;
}

const InLineIconText = ({ Icon, Text, Title }: InLineIconTextProps) => {
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

export default InLineIconText;
