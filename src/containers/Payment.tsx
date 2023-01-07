import { connect } from 'react-redux';
import { Dispatch, State } from '../types';
import {
  changeCardNumber,
  setCV,
  setM,
  setY,
  setAgree,
  changePM,
} from '../store/userReducer';
import { Payment } from '../components/checkout/Payment';

const mapStateToProps = (state: State) => {
  return { cardNumber1: state.userData.payment.cardNumber };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeCardNumber: (number: string) => dispatch(changeCardNumber(number)),
  setM: (month: string) => dispatch(setM(month)),
  setY: (year: string) => dispatch(setY(year)),
  setCV: (value: string) => dispatch(setCV(value)),
  setAgree: (value: boolean) => dispatch(setAgree(value)),
  changePM: (value: string) => dispatch(changePM(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
