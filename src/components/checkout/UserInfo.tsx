import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';

type Props = {
  setName: (name: string) => void;
  setSurname: (name: string) => void;
  setGroupAge: (groupAge: number) => void;
  setDiscount: (discount: string) => void;
  setRegistrationNumber: (number: string) => void;
};

export const UserInfo = ({
  setName,
  setSurname,
  setGroupAge,
  setDiscount,
  setRegistrationNumber,
}: Props) => {
  const [age, setAge] = useState('3');
  const [discount, setDiscountValue] = useState('0');

  const handleChangeAge = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const handleChangeDiscount = (event: SelectChangeEvent) => {
    setDiscountValue(event.target.value as string);
  };
  return (
    <Grid
      style={{ margin: '20px 0 0 0' }}
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={4}>
        <FormControl sx={{ minWidth: 210 }}>
          <Select
            defaultValue={age}
            variant="outlined"
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}
            onChange={handleChangeAge}
            onBlur={(event) => setGroupAge(+event.target.value)}
          >
            <MenuItem value={0}>Child (0-5 yrs)</MenuItem>
            <MenuItem value={1}>Child (6-15 yrs)</MenuItem>
            <MenuItem value={2}>Youth (16-25 yrs)</MenuItem>
            <MenuItem value={3}>Adult (26-61 yrs)</MenuItem>
            <MenuItem value={4}>Adult (62+ yrs)</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl sx={{ minWidth: 210 }}>
          <Select
            defaultValue={discount}
            variant="outlined"
            inputProps={{
              name: 'discount',
              id: 'uncontrolled-native',
            }}
            onChange={handleChangeDiscount}
            onBlur={(event) => setDiscount(event.target.value)}
          >
            <MenuItem value={0}>NO DISCOUNT</MenuItem>
            <MenuItem value={1}>ISIC card</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <TextField
          id="name-field"
          label="Name"
          variant="outlined"
          type="text"
          onBlur={(event) => setName(event.target.value)}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          id="surname-field"
          label="Surname"
          variant="outlined"
          onBlur={(event) => setSurname(event.target.value)}
        />
      </Grid>
      <Grid item xs={12} style={{ padding: '15px 0 0 20px' }}>
        <Typography
          style={{ textDecoration: 'underline', padding: '0 0 7px 0' }}
        >
          Assign the travel document to the customer account
        </Typography>
        <TextField
          id="registration-number"
          size="small"
          label="Registration number"
          onBlur={(event) => setRegistrationNumber(event.target.value)}
        />
      </Grid>
    </Grid>
  );
};
