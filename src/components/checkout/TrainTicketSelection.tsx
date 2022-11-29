import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import './TrainTicketSelection.css';
import Sheet from "@mui/joy/Sheet";

export const TrainTicketSelection = () => {
  const [seatValue, setSeatValue] = useState('no-pref-seat');
  const [seatType, setSeatType] = useState('2nd-class');

  const handleChangeSeat = (event: ChangeEvent<HTMLInputElement>) => {
    setSeatValue((event.target as HTMLInputElement).value);
  };
  const handleChangeType = (event: ChangeEvent<HTMLInputElement>) => {
    setSeatType((event.target as HTMLInputElement).value);
  };
  return (
      <Sheet variant="outlined" style={{padding: '30px 20px 20px 20px'}}>
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
      </Sheet>
  );
};
