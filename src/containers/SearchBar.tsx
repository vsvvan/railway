import { connect } from 'react-redux';
import {Dispatch, State} from '../types';
import { SearchBar } from '../components/SearchBar';
import {
    setFrom, setTo,
} from '../store/searchInfoReducer';

const mapStateToProps = (state: State) => {
  return {
      from: state?.searchInfo?.from,
      to: state?.searchInfo?.to,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setFrom: (from: string) => dispatch(setFrom(from)),
    setTo: (to: string) => dispatch(setTo(to)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
