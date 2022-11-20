import {
  FormControl,
  Grid,
  Select,
  TextField,
  Typography,
} from '@mui/material';

export const UserInfo = () => {
  return (
    <Grid
      style={{ margin: '20px 0 0 0' }}
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid item xs={6}>
        <FormControl sx={{ minWidth: 210 }}>
          <Select
            defaultValue={4}
            variant="outlined"
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}
          >
            <option value={1}>Child (0-5 yrs)</option>
            <option value={2}>Child (6-15 yrs)</option>
            <option value={3}>Youth (16-25 yrs)</option>
            <option value={4}>Adult (26-61 yrs)</option>
            <option value={5}>Adult (62+ yrs)</option>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl variant="standard" sx={{ minWidth: 210 }}>
          <Select
            defaultValue={1}
            variant="outlined"
            inputProps={{
              name: 'discount',
              id: 'uncontrolled-native',
            }}
          >
            <option value={1}>NO DISCOUNT</option>
            <option value={2}>ISIC card</option>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField id="name-field" label="Name" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
        <TextField id="surname-field" label="Surname" variant="outlined" />
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
        />
      </Grid>
    </Grid>
  );
};
