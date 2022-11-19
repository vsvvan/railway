import { Button } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { TrainCard } from './TrainCard';

export const TrainConnections = () => {
    return (
        <>
        <div className="TrainConnectionsContainer">
            <Button id="previousConnections" variant="outlined" endIcon={<ExpandLessIcon/>}>
                Previous connections
            </Button>
            <div className="DayStyle">
                <span>Today 07.11.2022</span>
            </div>
        </div>
            <div className="TrainConnectionsContainer TrainCard">
                <TrainCard/>
            </div>
        </>
    );
};
