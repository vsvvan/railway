import { connect } from 'react-redux';
import { Dispatch } from '../types';
import { SeatPreferences } from '../components/checkout/SeatPreferences';
import { changePreferences, removePreferences } from '../store/userReducer';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changePreferences: (preference: string) =>
    dispatch(changePreferences(preference)),
  removePreferences: (preference: string) =>
    dispatch(removePreferences(preference)),
});

export default connect(null, mapDispatchToProps)(SeatPreferences);
