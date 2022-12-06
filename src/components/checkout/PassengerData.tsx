import { Button, TextField, Typography } from '@mui/material';
import Sheet from '@mui/joy/Sheet';
import AddIcon from '@mui/icons-material/Add';
import UserInfo from '../../containers/UserInfo';
import { PassengerInformation } from '../../types';

type Props = {
  userData: PassengerInformation;
  setEmail: (email: string) => void;
};

export const PassengerData = ({ userData, setEmail }: Props) => {
  return (
    <>
      <Sheet
        variant="outlined"
        style={{ padding: '30px 20px 20px 20px', margin: '0px 0px 30px 0px' }}
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
          Passenger information
        </Typography>
        <span>
          Please, fill in the passenger data to avoid abuse of your documents.
          The name will be directly on your travel document.
        </span>
        <br />
        <UserInfo passengerInfo={userData} />
        <Button style={{ padding: '15px 0 0 25px' }} startIcon={<AddIcon />}>
          Add next passenger
        </Button>
        <br />
        <Typography style={{ padding: '15px 0 0 15px' }}>
          The purchased tickets will be sent to the entered e-mail address.
        </Typography>
        <div style={{ padding: '7px 0 0 30px' }}>
          <TextField
            style={{ width: '270px' }}
            id="email-field"
            label="e-mail"
            variant="outlined"
            size="small"
            value={userData.email}
            onBlur={(event) => setEmail(event.target.value)}
          />
        </div>
      </Sheet>
    </>
  );
};
