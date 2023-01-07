import {
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  NativeSelect,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { ChangeEvent, useState } from 'react';
import Logo from '../../images/logo.svg';
import './Payment.css';
import Sheet from '@mui/joy/Sheet';

type Props = {
  cardNumber1: string;
  changeCardNumber: (number: string) => void;
  setM: (month: string) => void;
  setY: (year: string) => void;
  setCV: (value: string) => void;
  setAgree: (value: boolean) => void;
  changePM: (value: string) => void;
};

export const Payment = ({
  cardNumber1,
  changeCardNumber,
  setM,
  setY,
  setCV,
  setAgree,
  changePM,
}: Props) => {
  const [value, setValue] = useState('credit-card');
  const [cardNumber, setCardNumber] = useState(cardNumber1);
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleChangePayment = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    changePM((event.target as HTMLInputElement).value);
  };
  return (
    <Sheet
      variant="outlined"
      style={{ padding: '30px 20px 20px 20px', margin: '0px 0px 30px 0px' }}
    >
      <Typography>
        <h3 className="PaymentTitle">Payment method</h3>
      </Typography>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChangePayment}
      >
        <div className="PaymentInfoBox">
          <FormControlLabel
            value="credit-account"
            control={<Radio />}
            label="Credit account"
          />
          <img
            src={Logo}
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#002664',
            }}
            alt=""
          />
        </div>
        <div className="PaymentInfoBox">
          <FormControlLabel
            value="credit-card"
            control={<Radio />}
            label="Credit card"
          />
          <CreditCardIcon />
        </div>
      </RadioGroup>
      {value === 'credit-card' ? (
        <div style={{ margin: '15px 0 0 25px' }}>
          <Typography>Card number</Typography>
          <TextField
            id="outlined-basic"
            label=""
            value={cardNumber}
            error={cardNumber.length !== 16}
            helperText="Card number must have 16 characters"
            variant="outlined"
            size="small"
            onChange={(e) => setCardNumber(e.target.value)}
            onBlur={(e) => changeCardNumber(e.target.value)}
          />
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography>Expiration date</Typography>
              <FormControl sx={{ m: 1 }} variant="standard">
                <NativeSelect
                  id="demo-customized-select-native"
                  value={month}
                  onChange={(e) => {
                    setMonth(e.target.value);
                    setM(e.target.value);
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>01</option>
                  <option value={2}>02</option>
                  <option value={3}>03</option>
                  <option value={4}>04</option>
                  <option value={5}>05</option>
                  <option value={6}>06</option>
                  <option value={7}>07</option>
                  <option value={8}>08</option>
                  <option value={9}>09</option>
                  <option value={10}>10</option>
                  <option value={11}>11</option>
                  <option value={12}>12</option>
                </NativeSelect>
              </FormControl>
              <FormControl sx={{ m: 1 }} variant="standard">
                <NativeSelect
                  id="demo-customized-select-native"
                  value={year}
                  onChange={(e) => {
                    setYear(e.target.value);
                    setY(e.target.value);
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>2023</option>
                  <option value={2}>2024</option>
                  <option value={3}>2025</option>
                  <option value={4}>2026</option>
                  <option value={5}>2027</option>
                  <option value={6}>2028</option>
                </NativeSelect>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <Typography style={{ marginBottom: '8px' }}>CVV</Typography>
              <TextField
                id="standard-password-input"
                variant="standard"
                type="password"
                autoComplete="current-password"
                size="small"
                onChange={(e) => setCV(e.target.value)}
              />
            </Grid>
          </Grid>
        </div>
      ) : null}
      <br />
      <FormControlLabel
        style={{ textDecoration: 'underline' }}
        control={
          <Checkbox onChange={(event) => setAgree(event.target.checked)} />
        }
        label="I agree with the trade conditions"
      />
    </Sheet>
  );
};
