import { connect } from 'react-redux';
import { Dispatch, State } from '../types';
import { SearchBar } from '../components/SearchBar';
import { setDate, setFrom, setTime, setTo } from '../store/searchInfoReducer';
import { updateDestinations } from '../store/trainReducer';

const mapStateToProps = (state: State) => {
  return {
    from: state?.searchInfo?.from,
    to: state?.searchInfo?.to,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setFrom: (from: string) => dispatch(setFrom(from)),
  setTo: (to: string) => dispatch(setTo(to)),
  setdate: (date: string) => dispatch(setDate(date)),
  setTime: (hours: number, minutes: number) =>
    dispatch(setTime({ hours, minutes })),
  updateDestinations: (from: string, to: string) =>
    dispatch(updateDestinations({ from, to })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
