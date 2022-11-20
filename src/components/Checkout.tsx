import { Button, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { PassengerData } from './checkout/PassengerData';
import { TrainTicketSelection } from './checkout/TrainTicketSelection';
import { Payment } from './checkout/Payment';
import { useNavigate } from 'react-router-dom';

export const Checkout = () => {
  const navigate = useNavigate();
  const navigateToOrder = () => {
    navigate('/checkout-order');
  };
  const navigateToInfo = () => {
    navigate('/');
  };
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
          <PassengerData />
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
            >
              Continue
            </Button>
          </div>
        </Grid>
        <Grid item xs={4}>
          <span>Summary</span>
        </Grid>
      </Grid>
    </div>
  );
};
