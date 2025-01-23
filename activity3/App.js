import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
  <SafeAreaView style={styles.container}>
  <Text style={styles.baseText}>
  Rickmer Aivan
  <Text style={styles.innerText}> Francisco</Text>
  </Text>
  <Text style={styles.baseText1}>
  BSIT
  <Text style={styles.innerText1}> Student</Text>
  </Text>
  <Text style={styles.baseText1}>
  Live in 
  <Text style={styles.innerText2}> Bulacan</Text>
  </Text>
  <Text style={styles.baseText1}>
  Favorite food is
  <Text style={styles.innerText3}> Hotdog</Text>
  </Text>
  </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    color: 'red',
    fontWeight: 'bold',
  },
  baseText1: {
    color: 'black',
    fontWeight: 'bold',
  },
  innerText: {
    color: 'blue',
  },
  innerText1: {
    color: 'green',
  },
  innerText2: {
    color: 'orange',
  },
  innerText3: {
    color: 'magenta',
  },


});

export default BoldAndBeautiful;