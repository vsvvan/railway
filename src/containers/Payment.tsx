import { connect } from 'react-redux';
import { Dispatch, State } from '../types';
import { changeCardNumber } from '../store/userReducer';
import { Payment } from '../components/checkout/Payment';

const mapStateToProps = (state: State) => {
  return { cardNumber1: state.userData.payment.cardNumber };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeCardNumber: (number: string) => dispatch(changeCardNumber(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
