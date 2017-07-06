import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, Text } from 'react-native';
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
    if(this.props.face.type === 'robo'){
      return (
        <View style={{
          alignItems: 'center',
          paddingTop: 20,
          minHeight: 320,
          justifyContent: 'center',
        }}>
          <Image
            style={{
              width: this.props.face.size,
              height: this.props.face.size,
              borderRadius: this.props.face.borderRadius,
              margin: 'auto',
              alignSelf: 'center',
              backgroundColor: '#eee'
            }}
            source={{uri: `https://robohash.org/${this.props.face.name}`}}
          />
        </View>
      )
    } else if (this.props.face.type == 'female-pixel') {
      return (
        <View style={{
          alignItems: 'center',
          paddingTop: 20,
          minHeight: 320,
          justifyContent: 'center',
        }}>
          <Image
            style={{
              width: this.props.face.size,
              height: this.props.face.size,
              borderRadius: this.props.face.borderRadius,
              margin: 'auto',
              alignSelf: 'center',
              backgroundColor: '#eee'
            }}
            source={{uri: `https://avatars.dicebear.com/v1/female/${this.props.face.name}/200.png`}}
          />
        </View>
      )
    } else if (this.props.face.type === 'male-pixel') {
      return (
        <View style={{
          alignItems: 'center',
          paddingTop: 20,
          minHeight: 320,
          justifyContent: 'center',
        }}>
        <Image
        style={{
          width: this.props.face.size,
          height: this.props.face.size,
          borderRadius: this.props.face.borderRadius,
          margin: 'auto',
          alignSelf: 'center',
          backgroundColor: '#eee'
        }}
        source={{uri: `https://avatars.dicebear.com/v1/male/${this.props.face.name}/200.png`}}
        />
        </View>
      )
    } else {
      return (
        <View style={{
          alignItems: 'center',
          paddingTop: 20,
          minHeight: 320,
          justifyContent: 'center',
        }}>
        <Image
        style={{
          width: this.props.face.size,
          height: this.props.face.size,
          borderRadius: this.props.face.borderRadius,
          margin: 'auto',
          alignSelf: 'center',
        }}
        source={{uri: `https://api.adorable.io/avatars/285/${this.props.face.name}`}}
        />
        </View>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    face: state.face,
  };
}

export default connect(mapStateToProps, null)(Avatar);
