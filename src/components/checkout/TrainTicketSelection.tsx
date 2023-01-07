import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import './TrainTicketSelection.css';
import Sheet from '@mui/joy/Sheet';
import { TrainInfo } from '../../types';
import dayjs from 'dayjs';
import './TrainTicketSelection.css';
import { SeatPreferences } from './SeatPreferences';

type Props = {
  trainInfo: TrainInfo;
  changeClass: (type: string) => void;
  changeSeat: (seat: string, preferences?: string[]) => void;
};

export const TrainTicketSelection = ({
  trainInfo,
  changeSeat,
  changeClass,
}: Props) => {
  const [seatValue, setSeatValue] = useState('no-pref-seat');
  const [seatType, setSeatType] = useState('2nd-class');
  const[visible, setVisible]=useState(false);

  const handleChangeSeat = (event: ChangeEvent<HTMLInputElement>) => {
    setSeatValue((event.target as HTMLInputElement).value);
    changeSeat(event.target.value);
  };
  const handleChangeType = (event: ChangeEvent<HTMLInputElement>) => {
    setSeatType((event.target as HTMLInputElement).value);
    changeClass(event.target.value);
  };
  return (
    <Sheet
      variant="outlined"
      style={{ padding: '30px 20px 20px 20px', margin: '0px 0px 30px 0px' }}
    >
      <Typography
        sx={{
          width: '33%',
          flexShrink: 0,
          whiteSpace: 'nowrap',
        }}
      >
        <h3>Train ticket selection</h3>
      </Typography>
      <Grid container spacing={0.5}>
        <Grid item xs={4}>
          <Typography>
            {trainInfo?.date || dayjs(new Date()).format('DD.MM.YYYY')}{' '}
            {trainInfo.trainType} {trainInfo.trainNumber}
            <br /> {trainInfo.departureTime} {trainInfo.fromDestination} <br />
            {trainInfo.arrivalTime} {trainInfo.toDestination}
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
              <span style={{ color: 'red', float: 'right' }}>
                no additional price
              </span>
            </div>
            <div className="TrainClassBox">
              <FormControlLabel
                value="1st-class"
                control={<Radio />}
                label="1st Class"
              />
              <span style={{ color: 'red', float: 'right', fontWeight: '600' }}>
                +8.10€
              </span>
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
            onClick={()=>setVisible(false)}

          />
        </div>
        <div className="TrainSeatBox">
          <FormControlLabel
            value="choose-seat"
            control={<Radio />}
            label="Choose certain reservation"
            onClick={()=>setVisible(true)}
          />
        </div>
    </RadioGroup>
    {visible && <SeatPreferences/>}
    </Sheet >
  );
};
