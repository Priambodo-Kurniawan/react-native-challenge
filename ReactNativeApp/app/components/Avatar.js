import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class Avatar extends Component {
  render() {
    console.log(this.props.face.name);
    return (
      <View style={{
        alignItems: 'center',
        paddingTop: 20,
      }}>
        <Image
          style={{
            width: this.props.face.size,
            height: this.props.face.size,
            borderRadius: this.props.face.borderRadius,
            margin: 'auto',
          }}
          source={{uri: `https://api.adorable.io/avatars/${this.props.face.size}/${this.props.face.name}`}}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    face: state.face,
  };
}

export default connect(mapStateToProps, null)(Avatar);
