import { connect } from 'react-redux';
import { Dispatch } from '../types';
import { UserInfo } from '../components/checkout/UserInfo';
import {
  setDiscount,
  setRegistrationNumber,
  setGroupAge,
  setName,
  setSurname,
} from '../store/userReducer';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setName: (name: string) => dispatch(setName(name)),
  setSurname: (surname: string) => dispatch(setSurname(surname)),
  setGroupAge: (groupAge: number) => dispatch(setGroupAge(groupAge)),
  setDiscount: (discount: string) => dispatch(setDiscount(discount)),
  setRegistrationNumber: (number: string) =>
    dispatch(setRegistrationNumber(number)),
});

export default connect(null, mapDispatchToProps)(UserInfo);
