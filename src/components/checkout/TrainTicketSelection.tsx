import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import './TrainTicketSelection.css';

export const TrainTicketSelection = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [seatValue, setSeatValue] = useState('no-pref-seat');
  const [seatType, setSeatType] = useState('2nd-class');

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleChangeSeat = (event: ChangeEvent<HTMLInputElement>) => {
    setSeatValue((event.target as HTMLInputElement).value);
  };
  const handleChangeType = (event: ChangeEvent<HTMLInputElement>) => {
    setSeatType((event.target as HTMLInputElement).value);
  };
  return (
    <Accordion
      expanded={expanded === 'ticket-data'}
      onChange={handleChange('ticket-data')}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="train-databh-content"
        id="train-databh-header"
      >
        <Typography
          sx={{
            width: '33%',
            flexShrink: 0,
            fontSize: '18px',
            fontWeight: '400',
            whiteSpace: 'nowrap',
          }}
        >
          Train ticket selection
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={0.5}>
          <Grid item xs={4}>
            <Typography>
              16.10.2022 R 609 14:13 Bratislava hl. st. 20:03 Košice
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <span>With reservation</span>
            <br />
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={seatType}
              onChange={handleChangeType}
            >
              <div className="TrainClassBox">
                <FormControlLabel
                  value="2nd-class"
                  control={<Radio />}
                  label="2nd Class"
                />
                <span style={{ color: 'red', float: 'right' }}>
                  no additional price
                </span>
              </div>
              <div className="TrainClassBox">
                <FormControlLabel
                  value="2nd-class-kid"
                  control={<Radio />}
                  label="2nd Class - Compartment for children"
                />
              </div>
              <div className="TrainClassBox">
                <FormControlLabel
                  value="1st-class"
                  control={<Radio />}
                  label="1st Class"
                />
              </div>
            </RadioGroup>
          </Grid>
        </Grid>
        <Typography variant="h6" gutterBottom>
          Seat selection
        </Typography>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={seatValue}
          onChange={handleChangeSeat}
        >
          <div className="TrainSeatBox">
            <FormControlLabel
              value="no-pref-seat"
              control={<Radio />}
              label="No preferences / Any"
            />
          </div>
          <div className="TrainSeatBox">
            <FormControlLabel
              value="choose-seat"
              control={<Radio />}
              label="Choose certain reservation"
            />
            <CreditCardIcon />
          </div>
        </RadioGroup>
        <div className="AlignButton">
          <Button variant="contained" size="large">
            Continue
          </Button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};
