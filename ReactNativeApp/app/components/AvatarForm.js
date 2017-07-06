import React, { Component } from 'react';
import { TextInput, Slider, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import {
  changeTypeAction,
  changeNameAction,
  changeSizeAction,
  changeBorderRadiusAction,
} from '../actions';

const styles = StyleSheet.create({
  label: {
    alignSelf: 'flex-start',
    fontSize: 12,
  }
});

class AvatarForm extends Component {
  render() {
    return (
      <View style={{alignSelf:'center', width: 280}}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={{
            height: 40,
            width: 280,
            marginBottom: 20,
            marginLeft: -5,
          }}
          onChangeText={(text) => this.props.changeName(text)}
          placeholder='your name here'
          keyboardType= 'default'
        />
        <Text style={styles.label}>Size</Text>
        <Slider
           style={{ width: 300, marginBottom: 20, marginLeft: -15 }}
           step={1}
           minimumValue={100}
           maximumValue={270}
           value={this.props.face.size}
           onValueChange={val => this.props.changeSize(val)}
          />
        <Text style={styles.label}>Rounded</Text>
        <Slider
           style={{ width: 300, marginBottom: 20, marginLeft: -15 }}
           step={1}
           minimumValue={0}
           maximumValue={50}
           value={this.props.face.borderRadius}
           onValueChange={val => this.props.changeBorderRadius(val)}
          />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeType: (type) => dispatch(changeTypeAction(type)),
    changeName: (name) => dispatch(changeNameAction(name)),
    changeSize: (size) => dispatch(changeSizeAction(size)),
    changeBorderRadius: (value) => dispatch(changeBorderRadiusAction(value)),
  }
}

const mapStateToProps = (state) => {
  return {
    face: state.face,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AvatarForm);
