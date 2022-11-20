import { connect } from 'react-redux';
import App from '../components/App';
import { State } from '../types';

const mapStateToProps = (state: State) => {
  const { trains } = state;
  return {
    trains,
  };
};

export default connect(mapStateToProps)(App);
