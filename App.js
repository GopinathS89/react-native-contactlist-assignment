import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ContactList from "./ContactList";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.inc = this.inc.bind(this);
    this.dec = this.dec.bind(this);
  }
  inc() {
    this.setState({counter: this.state.counter+1});
  }
  dec() {
    this.setState({counter: this.state.counter-1});
  }
  render() {
    return (
      <View style={styles.container}>
      {/* <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: 400, height: 400}} />
        <Text style={styles.label} onPress={this.inc}>INC</Text>
        <Text style={[styles.result, {alignSelf:'flex-end'}]}>{this.state.counter}</Text>
        <Text style={styles.label} onPress={this.dec}>DEC</Text> */}
        <ContactList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  label: {
    fontSize: 32,
    color: 'red'
  },
  result: {
    fontSize: 32,
    color: 'green'
  }
});
