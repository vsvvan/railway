import { connect } from 'react-redux';
import { Dispatch, State } from '../types';
import {
  changeSeat,
  changeClass,
  changePreferences,
} from '../store/userReducer';
import { TrainTicketSelection } from '../components/checkout/TrainTicketSelection';

const mapStateToProps = (state: State) => ({
  trainInfo: state.chosenTrain,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeClass: (type: string) => dispatch(changeClass(type)),
  changeSeat: (seat: string) => dispatch(changeSeat(seat)),
  changePreferences: (preference: string) =>
    dispatch(changePreferences(preference)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrainTicketSelection);
