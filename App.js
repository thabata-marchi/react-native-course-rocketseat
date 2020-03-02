import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Olá React Native
        </Text>
        <View style={styles.box} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: '10'
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: '#F00'
  }
});

export default App;
