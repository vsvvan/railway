import { Button, Grid, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import TrainIcon from '@mui/icons-material/Train';
import ScheduleIcon from '@mui/icons-material/Schedule';
import { TrainInfo } from '../types';

type Props = {
  trainInfo: TrainInfo;
};

export const Order = ({ trainInfo }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="TrainConnectionsContainer">
        <div className="DayStyle">
          <span>Today 07.11.2022</span>
        </div>
        <div className="OrderContainer">
          <div>
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <div className="Align">
                  <span>
                    {trainInfo.departureTime} {trainInfo.fromDestination}
                    <br /> {trainInfo.arrivalTime} {trainInfo.toDestination}
                  </span>
                  <div className="TrainName">
                    <TrainIcon />
                    <br />
                    <span>
                      {trainInfo.trainType} {trainInfo.trainNumber}
                    </span>
                  </div>
                </div>
              </Grid>
              <Grid item xs={9}>
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
              </Grid>
            </Grid>
          </div>
          <div>
            <Typography>Name Surname</Typography>
            <Typography>1*Youth(16-26 yrs) (ISIC card)</Typography>
            <Typography>
              {trainInfo.trainType} {'  '}
              {trainInfo.trainNumber} 1*2ndClass
            </Typography>
          </div>
          <div className="AlignButton">
            <Typography>Summary</Typography>
            <Typography>Total sum: 9.34</Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/summary')}
            >
              Payment
            </Button>
          </div>
        </div>
        <div>
          <Button
            variant="outlined"
            size="large"
            startIcon={<ArrowBackIosIcon />}
            onClick={() => {
              navigate('/checkout');
            }}
          >
            Back
          </Button>
        </div>
      </div>
    </>
  );
};
