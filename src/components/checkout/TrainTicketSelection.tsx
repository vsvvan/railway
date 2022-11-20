import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextField,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { UserInfo } from './UserInfo';
import AddIcon from '@mui/icons-material/Add';
import { SyntheticEvent, useState } from 'react';

export const TrainTicketSelection = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  return (
    <Accordion
      expanded={expanded === 'ticket-data'}
      onChange={handleChange('ticket-data')}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="train-databh-content"
        id="train-databh-header"
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
          Train ticket selection
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
  );
};
