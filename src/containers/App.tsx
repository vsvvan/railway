import { connect } from 'react-redux';
import App from '../components/App';
import { Dispatch, State, TrainInfo } from '../types';
import { setChosenTrain } from '../store/chooseTrainReducer';
import { setPrice } from '../store/userReducer';

const mapStateToProps = (state: State) => {
  const { trains, userData, searchInfo, chosenTrain } = state;
  return {
    trains,
    userData,
    searchInfo,
    chosenTrain,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setChosenTrain: (train: TrainInfo) => dispatch(setChosenTrain(train)),
  setPrice: (price: number) => dispatch(setPrice(price)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
