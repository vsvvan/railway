import { Button, Chip, Grid, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import TrainIcon from '@mui/icons-material/Train';
import ScheduleIcon from '@mui/icons-material/Schedule';
import {
  AgeGroups,
  DiscountType,
  PassengerInformation,
  TrainInfo,
  UserData,
} from '../types';
import { getDescDay } from '../util';

type Props = {
  trainInfo: TrainInfo;
  userData: UserData;
  searchInfo: any;
};

export const Order = ({ trainInfo, userData, searchInfo }: Props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="TrainConnectionsContainer">
        <div className="DayStyle">
          <span>
            <h1>Train ticket information</h1>
            <h2>
              {getDescDay(searchInfo.date)} {searchInfo?.date}
            </h2>
          </span>
        </div>
        <div className="OrderContainer">
          <div className="ContentContainer">
            <Grid container spacing={2}>
              <Grid item xs={11}>
                <div className="ContentOfSummary">
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
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  color="primary"
                  size="large"
                  onClick={() => navigate('/connections')}
                >
                  <EditIcon />
                </IconButton>
              </Grid>
            </Grid>
          </div>
          <div className="ContentContainer">
            <Grid container spacing={2}>
              <Grid item xs={11}>
                <div className="ContentOfSummary">
                  <Typography>
                    <strong>Personal Information</strong>{' '}
                  </Typography>
                  <div
                    className={`${
                      userData.passengerInformation.length > 1
                        ? 'MultipleUsers'
                        : 'SingleUser'
                    }`}
                  >
                    {userData.passengerInformation.map(
                      (passenger: PassengerInformation) => {
                        return (
                          <div>
                            <Typography>
                              {passenger.name} {passenger.surname}
                            </Typography>
                            <Typography>
                              1*{AgeGroups[passenger.passengerGroup]} (
                              {DiscountType[+passenger.discount]})
                            </Typography>
                          </div>
                        );
                      },
                    )}
                  </div>
                  <Typography>Email: {userData.email}</Typography>
                </div>
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  color="primary"
                  size="large"
                  onClick={() => navigate('/checkout')}
                >
                  <EditIcon />
                </IconButton>
              </Grid>
            </Grid>
          </div>
          <div className="ContentContainer">
            <Grid container spacing={2}>
              <Grid item xs={11}>
                <div className="ContentOfSummary">
                  <Typography>
                    <strong>Train ticket selection</strong>{' '}
                  </Typography>
                  <Typography>
                    {trainInfo.trainType} {'  '}
                    {trainInfo.trainNumber} 1*
                    {userData.trainTicketSelection.ticketClass}
                  </Typography>
                  <Typography>
                    Seat selection:{' '}
                    {userData.trainTicketSelection.seatSelection ===
                    'choose-seat'
                      ? userData.trainTicketSelection.preferences.map(
                          (preference) => (
                            <Chip
                              variant="outlined"
                              color="primary"
                              size="small"
                              label={preference}
                            />
                          ),
                        )
                      : userData.trainTicketSelection.seatSelection}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  color="primary"
                  size="large"
                  onClick={() => navigate('/checkout')}
                >
                  <EditIcon />
                </IconButton>
              </Grid>
            </Grid>
          </div>
          <div className="ContentContainer">
            <Grid container spacing={2}>
              <Grid item xs={11}>
                <div className="ContentOfSummary">
                  <Typography>
                    <strong>Payment method:</strong>{' '}
                  </Typography>
                  <Typography>{userData.payment.paymentMethod}</Typography>
                  <Typography>
                    Card number: {userData.payment.cardNumber}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={1}>
                <IconButton
                  color="primary"
                  size="large"
                  onClick={() => navigate('/checkout')}
                >
                  <EditIcon />
                </IconButton>
              </Grid>
            </Grid>
          </div>
          <div className="ContentContainer">
            <div className="ContentOfSummary">
              <Typography>
                <strong>Summary</strong>
              </Typography>
              <Typography>
                Total sum: {userData.trainTicketSelection.price}
              </Typography>
            </div>
            <strong></strong>
            <div className="AlignButton">
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/summary')}
              >
                Pay
              </Button>
            </div>
          </div>
        </div>
        <div className="BackButton">
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
