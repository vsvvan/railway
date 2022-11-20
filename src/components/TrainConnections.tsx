import { Button } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TrainCard } from './TrainCard';
import { TrainInfo } from '../types';

type Props = {
  trains: TrainInfo[];
};

export const TrainConnections = ({ trains }: Props) => {
  return (
    <>
      <div className="TrainConnectionsContainer">
        <Button
          id="previousConnections"
          variant="outlined"
          endIcon={<ExpandLessIcon />}
        >
          Previous connections
        </Button>
        <div className="DayStyle">
          <span>Today 07.11.2022</span>
        </div>
      </div>
      <div className="TrainConnectionsContainer">
        {trains.map((train: TrainInfo) => {
          return (
            <div className="TrainCard">
              {' '}
              <TrainCard train={train} />{' '}
            </div>
          );
        })}
      </div>
      <div className="TrainConnectionsContainer">
        <Button
          id="nextConnections"
          variant="outlined"
          endIcon={<ExpandMoreIcon />}
        >
          Next connections
        </Button>
      </div>
    </>
  );
};
