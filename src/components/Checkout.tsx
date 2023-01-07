import { Button, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { PassengerData } from './checkout/PassengerData';
import TrainTicketSelection from '../containers/TrainTicketSelection';
import { useNavigate } from 'react-router-dom';
import { PassengerInformation, TrainInfo, UserData } from '../types';
import Payment from '../containers/Payment';

type Props = {
  userData: UserData;
  trainInfo: TrainInfo;
  setEmail: (email: string) => void;
  addPassenger: (passenger: PassengerInformation) => void;
};

export const Checkout = ({ userData, setEmail, addPassenger }: Props) => {
  const navigate = useNavigate();
  const navigateToOrder = () => {
    navigate('/checkout-order');
  };
  const navigateToInfo = () => {
    navigate('/connections');
  };

  const isPSValid = userData.passengerInformation
    .map(
      (pas: PassengerInformation) =>
        pas.name.length > 0 &&
        pas.surname.length > 0 &&
        (pas.discount === 0 ||
          (pas.discount === 1 && (pas.registrationNumber || '').length > 0)),
    )
    .every((val) => val === true);
  const isTSValid =
    userData.trainTicketSelection.ticketClass &&
    (userData.trainTicketSelection.seatSelection === 'no-pref-seat' ||
      (userData.trainTicketSelection.seatSelection === 'choose-seat' &&
        userData.trainTicketSelection.preferences.length > 0));
  const idPValid =
    (userData.payment.paymentMethod === 'credit-account' ||
      (userData.payment.paymentMethod === 'credit-card' &&
        userData.payment.cardNumber.length === 16 &&
        userData.payment.month &&
        userData.payment.year &&
        userData.payment.value)) &&
    userData.payment.agree;

  return (
    <div style={{ padding: '40px 0 0 0' }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        spacing={6}
        columns={20}
      >
        <Grid item xs={10}>
          <PassengerData
            userData={userData.passengerInformation}
            userEmail={userData.email}
            setEmail={setEmail}
            addPassenger={addPassenger}
          />
          <TrainTicketSelection />
          <Payment />
          <div className="AlignSecondButton">
            <Button
              variant="outlined"
              size="large"
              startIcon={<ArrowBackIosIcon />}
              onClick={navigateToInfo}
            >
              Back
            </Button>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIosIcon />}
              onClick={navigateToOrder}
              disabled={!isPSValid || !isTSValid || !idPValid}
            >
              Continue
            </Button>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="SummaryInCheckout">
            <span>Price: {userData.trainTicketSelection.price} €</span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
