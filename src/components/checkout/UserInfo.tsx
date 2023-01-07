import {
  FormControl,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { PassengerInformation } from '../../types';
import CloseIcon from '@mui/icons-material/Close';

type Props = {
  passengerInfo: PassengerInformation;
  isMultipleUsers: boolean;
  setName: (name: string, id: number) => void;
  setSurname: (name: string, id: number) => void;
  setGroupAge: (groupAge: number, id: number) => void;
  setDiscount: (discount: number, id: number) => void;
  setRegistrationNumber: (number: string, id: number) => void;
  removePassenger: (passengerId: number) => void;
};

export const UserInfo = ({
  passengerInfo,
  isMultipleUsers,
  setName,
  setSurname,
  setGroupAge,
  setDiscount,
  setRegistrationNumber,
  removePassenger,
}: Props) => {
  const [age, setAge] = useState(passengerInfo.passengerGroup.toString());
  const [discount, setDiscountValue] = useState(passengerInfo.discount);
  const [name, setN] = useState(passengerInfo.name);
  const [surname, setS] = useState(passengerInfo.surname);
  const [regNum, setRegNum] = useState(passengerInfo.registrationNumber);

  useEffect(() => {
    setAge(passengerInfo.passengerGroup.toString());
    setDiscountValue(passengerInfo.discount);
    setN(passengerInfo.name);
    setS(passengerInfo.surname);
    setRegNum(passengerInfo.registrationNumber);
  }, [passengerInfo]);

  const handleChangeAge = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
    setGroupAge(+event.target.value, passengerInfo.id);
  };
  const handleChangeDiscount = (event: SelectChangeEvent) => {
    // @ts-ignore
    setDiscountValue(event.target.value);
    setDiscount(parseInt(event.target.value), passengerInfo.id);
  };
  return (
    <div style={{ display: 'flex', margin: '0 0  25px 0' }}>
      <div>
        <Grid
          style={{ margin: '20px 0 0 0' }}
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={4}>
            <FormControl sx={{ minWidth: 210 }}>
              <Select
                value={age}
                variant="outlined"
                inputProps={{
                  name: 'age',
                  id: 'uncontrolled-native',
                }}
                onChange={handleChangeAge}
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
                value={discount.toString()}
                variant="outlined"
                inputProps={{
                  name: 'discount',
                  id: 'uncontrolled-native',
                }}
                onChange={handleChangeDiscount}
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
              value={name}
              onChange={(event) => {
                setN(event.target.value);
                setName(event.target.value, passengerInfo.id);
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="surname-field"
              label="Surname"
              variant="outlined"
              value={surname}
              onChange={(event) => {
                setS(event.target.value);
                setSurname(event.target.value, passengerInfo.id);
              }}
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
              value={regNum || ''}
              onChange={(event) => setRegNum(event.target.value)}
              onBlur={(event) =>
                setRegistrationNumber(event.target.value, passengerInfo.id)
              }
            />
          </Grid>
        </Grid>
      </div>
      {isMultipleUsers ? (
        <CloseIcon
          style={{ margin: '20px', cursor: 'pointer' }}
          onClick={() => {
            removePassenger(passengerInfo.id);
          }}
        />
      ) : null}
    </div>
  );
};
