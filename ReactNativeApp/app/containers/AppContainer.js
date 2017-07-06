import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Action from '../actions'

import Avatar from '../components/Avatar'
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Action, dispatch)
}

class AppContainer extends React.Component {
  constructor(){
    super()
  }
  render() {
    return (
      <View>
        <Avatar />
      </View>
    );
  }
}

export default connect(null, mapDispatchToProps)(AppContainer);
