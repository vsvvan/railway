import { connect } from 'react-redux';
import App from '../components/App';
import { Dispatch, State, TrainInfo } from '../types';
import { setChosenTrain } from '../store/chooseTrainReducer';

const mapStateToProps = (state: State) => {
  const { trains, userData } = state;
  return {
    trains,
    userData,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setChosenTrain: (train: TrainInfo) => dispatch(setChosenTrain(train)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
