import { useState } from 'react';
import './TrainTicketSelection.css';
import { FormControlLabel, Checkbox, FormGroup } from '@mui/material';

type Props = {
  changePreferences: (preference: string) => void;
  removePreferences: (preference: string) => void;
};

export const SeatPreferences = ({
  changePreferences,
  removePreferences,
}: Props) => {
  const [preferences, setPreferences] = useState<string[]>([]);

  const handleChangeSeatPreferences = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const index = preferences.indexOf(event.target.value);
    if (index === -1) {
      setPreferences([...preferences, event.target.value]);
      changePreferences(event.target.value);
    } else {
      setPreferences(
        preferences.filter((preference) => preference !== event.target.value),
      );
      removePreferences(event.target.value);
    }
  };

  return (
    <FormGroup
      sx={{
        marginLeft: 1.37,
      }}
    >
      <FormControlLabel
        className="TrainPreferences"
        label="Wifi"
        control={
          <Checkbox
            value={'Wifi'}
            checked={preferences.includes('Wifi')}
            onChange={handleChangeSeatPreferences}
          />
        }
      />
      <FormControlLabel
        className="TrainPreferences"
        label="Railway car with coupe"
        control={
          <Checkbox
            value={'Railway car with coupe'}
            checked={preferences.includes('Railway car with coupe')}
            onChange={handleChangeSeatPreferences}
          />
        }
      />
      <FormControlLabel
        className="TrainPreferences"
        label="In direction of travel"
        control={
          <Checkbox
            value={'In direction of travel'}
            checked={preferences.includes('In direction of travel')}
            onChange={handleChangeSeatPreferences}
          />
        }
      />
      <FormControlLabel
        className="TrainPreferences"
        label="Against direction of travel"
        control={
          <Checkbox
            value={'Against direction of travel'}
            checked={preferences.includes('Against direction of travel')}
            onChange={handleChangeSeatPreferences}
          />
        }
      />
      <FormControlLabel
        className="TrainPreferences"
        label="With table"
        control={
          <Checkbox
            value={'With table'}
            checked={preferences.includes('With table')}
            onChange={handleChangeSeatPreferences}
          />
        }
      />
    </FormGroup>
  );
};
