import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface SelectorProps {
  values: string[];
  title: string;
  // eslint-disable-next-line no-unused-vars
  selectedValue: (value: string | number) => void;
  selectValue: string | number;
}

const Selector = ({ title, selectValue, values, selectedValue }: SelectorProps) => {
  const handleChange = (event: SelectChangeEvent<string | number>) => {
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

export default Selector;
