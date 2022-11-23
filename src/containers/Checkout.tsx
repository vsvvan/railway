import { connect } from 'react-redux';
import { Dispatch, State } from '../types';
import { setEmail } from '../store/userReducer';
import { Checkout } from '../components/Checkout';

const mapStateToProps = (state: State) => ({
   userData: state.userData
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setEmail: (email: string) => dispatch(setEmail(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
