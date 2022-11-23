import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import Logo from '../../images/logo.svg';
import './Payment.css';

export const Payment = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [value, setValue] = useState('');

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const handleChangePayment = (event: ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <Accordion
      expanded={expanded === 'payment-data'}
      onChange={handleChange('payment-data')}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="payment-databh-content"
        id="payment-databh-header"
      >
        <span className="PaymentTitle">Payment</span>
      </AccordionSummary>
      <AccordionDetails>
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
      </AccordionDetails>
    </Accordion>
  );
};
