import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';

const Selector = ({ title, selectValue, values, selectedValue }) => {
  const handleChange = event => {
    selectedValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{title}</InputLabel>
        <Select
          label="value"
          value={selectValue}
          id="demo-simple-select"
          onChange={handleChange}
          labelId="demo-simple-select-label"
        >
          {values.map((value, index) => {
            return (
              <MenuItem key={index} value={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

Selector.propTypes = {
  values: PropTypes.array,
  title: PropTypes.string,
  selectedValue: PropTypes.func,
  selectValue: PropTypes.string || PropTypes.number,
};

export default Selector;
