import { Checkbox, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { ChangeEvent, useState } from 'react';
import Logo from '../../images/logo.svg';
import './Payment.css';
import Sheet from '@mui/joy/Sheet';

export const Payment = () => {
  const [value, setValue] = useState('');

  const handleChangePayment = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <Sheet
      variant="outlined"
      style={{ padding: '30px 20px 20px 20px', margin: '0px 0px 30px 0px' }}
    >
      <span className="PaymentTitle">Payment</span>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChangePayment}
      >
        <div className="PaymentInfoBox">
          <FormControlLabel
            value="credit-card"
            control={<Radio />}
            label="Pay from credit account"
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
            value="cards"
            control={<Radio />}
            label="Payment with the cards"
          />
          <CreditCardIcon />
        </div>
      </RadioGroup>
      <br />
      <FormControlLabel
        style={{ textDecoration: 'underline' }}
        control={<Checkbox />}
        label="I agree with the trade conditions"
      />
    </Sheet>
  );
};
