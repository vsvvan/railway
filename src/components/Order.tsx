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
          <div className="ContentConainer">
              <div className='ContentOfSummary'>
                <div className="Align">
                  <span>
                  <Typography>{trainInfo.departureTime} {trainInfo.fromDestination}</Typography>
                    <Typography>{trainInfo.arrivalTime} {trainInfo.toDestination}</Typography>
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
            
            <div className='AlignButton'>

              <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/summary')}
              >
              Edit
              </Button>
              </div>             
        </div>

          <div className="ContentConainer">
          <div className='ContentOfSummary'>
          <Typography><strong>Personal Information</strong> </Typography>
          <Typography>Name Surname</Typography>
            <Typography>1*Youth(16-26 yrs) (ISIC card)</Typography>
            <Typography>Name.Surname@gmail.com</Typography>
            <Typography>
              {trainInfo.trainType} {'  '}
              {trainInfo.trainNumber} 1*2ndClass
            </Typography>
          </div>
            <div className='AlignButton'>

              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/summary')}
                >
                Edit
                </Button>
            </div>

          </div>
          <div className="ContentConainer">
                  <div className='ContentOfSummary'>
                  <Typography><strong>Method of payment:</strong> </Typography>
                  <Typography>Credit card</Typography>
                  <Typography>Card number: SK44 **** 0044</Typography>

                  </div>
            <div className='AlignButton'>

              <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/summary')}
            >
              Edit
            </Button>
            </div>
          </div>
          <div className="ContentConainer">
          <div className='ContentOfSummary'>
            <Typography><strong>Summary</strong></Typography>
            <Typography>Total sum: 9.34</Typography>
          </div>
          <strong></strong>
          <div className="AlignButton">
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/summary')}
            >
              Payment
            </Button>
          </div>
        </div>
        </div>
        <div className='BackButton'>
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
