import { Button } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { TrainCard } from './TrainCard';
import { TrainInfo } from '../types';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { getDescDay } from '../util';

type Props = {
  trains: TrainInfo[];
  searchInfo: any;
  setChosenTrain: (train: TrainInfo) => void;
};

export const TrainConnections = ({
  trains,
  searchInfo,
  setChosenTrain,
}: Props) => {
  const navigate = useNavigate();
  const navigateToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <>
      <div className="TrainConnectionsContainer">
        <span className="DayStyle">
          <h2>
            {getDescDay(searchInfo.date)} {searchInfo.date}
          </h2>
        </span>
        <Button
          id="previousConnections"
          variant="outlined"
          endIcon={<ExpandLessIcon />}
        >
          Previous connections
        </Button>
        <div className="DayStyle"></div>
      </div>
      <div className="TrainConnectionsContainer">
        {trains
          .filter((train) => {
            const date1 = new Date('2020-01-01 ' + train.departureTime);
            const date2 = new Date(
              '2020-01-01 ' +
                (
                  searchInfo.time.hours +
                  ':' +
                  searchInfo.time.minutes
                ).toString(),
            );
            return date1.getTime() > date2.getTime();
          })
          .map((train: TrainInfo) => {
            return (
              <div className="TrainCard">
                {' '}
                <TrainCard
                  train={train}
                  navigateToCheckout={navigateToCheckout}
                  setChosenTrain={setChosenTrain}
                />{' '}
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
      <div className="TrainConnectionsContainer">
        <Button
          variant="outlined"
          size="large"
          startIcon={<ArrowBackIosIcon />}
          onClick={() => navigate('/railway')}
        >
          Back
        </Button>
      </div>
    </>
  );
};
