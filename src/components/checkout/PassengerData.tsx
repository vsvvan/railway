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
import { UserInfo } from './UserInfo';

export const PassengerData = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

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
          <Typography>
            The purchased tickets will be sent to the entered e-mail address.
          </Typography>
          <TextField
            style={{ padding: '7px 0 0 7px' }}
            id="email-field"
            label="e-mail"
            variant="outlined"
            size="small"
          />
          <br />
          <div className="AlignButton">
            <Button variant="contained" size="large">
              Continue
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
