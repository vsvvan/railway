import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import { SyntheticEvent, useState } from 'react';
import UserInfo from '../../containers/UserInfo';
import { UserData } from '../../types';

type Props = {
  userData: UserData;
  setEmail: (email: string) => void;
};

export const PassengerData = ({ setEmail }: Props) => {
  const [expanded, setExpanded] = useState<string | false>('personal-data');

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const isDataMissed = false;

  return (
    <>
      <Accordion
        expanded={expanded === 'personal-data'}
        onChange={handleChange('personal-data')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="personal-databh-content"
          id="personal-databh-header"
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
        </AccordionSummary>
        <AccordionDetails>
          <span>
            Please, fill in the passenger data to avoid abuse of your documents.
            The name will be directly on your travel document.
          </span>
          <br />
          <UserInfo />
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
              onBlur={(event) => setEmail(event.target.value)}
            />
          </div>
          <br />
          <div className="AlignButton">
            <Button variant="contained" size="large" disabled={isDataMissed}>
              Continue
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
