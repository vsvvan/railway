import { Button, Typography } from '@mui/material';
import TrainIcon from '@mui/icons-material/Train';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { TrainInfo } from '../types';
import Sheet from '@mui/joy/Sheet';
import { useNavigate } from 'react-router-dom';

type Props = {
  trainInfo: TrainInfo;
};

export const Summary = ({ trainInfo }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <Sheet
        className="TrainConnectionsContainer"
        style={{ border: '1px solid #002664', padding: '0px 30px 30px' }}
      >
        <h1 style={{ color: '#002664' }}>Order summary</h1>
        <h4 style={{ color: '#002664' }}>
          All information was sent to your email
        </h4>
        <br />
        <span>16.10.2022 14:13 Bratislava-Košice</span>
        <div
          className="ContentOfSummary"
          style={{ border: '1px solid #002664' }}
        >
          <div className="Align">
            <span>
              <Typography>
                {trainInfo.departureTime} {trainInfo.fromDestination}
              </Typography>
              <Typography>
                {trainInfo.arrivalTime} {trainInfo.toDestination}
              </Typography>
            </span>
            <div className="TrainName">
              <TrainIcon />
              <br />
              <span>
                {trainInfo.trainType} {trainInfo.trainNumber}
              </span>
            </div>
          </div>
          <div className="AlignTime">
            <div className="AlignClocks">
              <ScheduleIcon />
              <span>
                {trainInfo.travelDuration.split(':')[0]} hrs.{' '}
                {trainInfo.travelDuration.split(':')[1]} min.
              </span>
            </div>
            <div>{trainInfo.distance} km</div>
          </div>
        </div>
      </Sheet>
      <Button
        size="large"
        style={{ color: '#002664', margin: '30px auto auto', width: '100%' }}
        onClick={() => navigate('/')}
      >
        {' '}
        Go to main page
      </Button>
      <div className='Margin-div'>
      </div>
    </>
  );
};
