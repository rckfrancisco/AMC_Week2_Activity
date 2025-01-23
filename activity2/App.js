import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Rickmer Aivan");
  const bodyText = 'Im an IT student at Global Reciprocal Colleges. And I enjoy studying because I know on myself that I excell in this field. I also enjoy this because of my friend who help me. :)';

  const onPressTitle = () => {
    setTitleText("Francisco");
  };

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <Text style={styles.baseText}>
    <Text style={styles.titleText} onPress={onPressTitle}>
    {titleText}
    {'\n'}
    {'\n'}
    </Text>
    <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  baseText: {
    fontFamily: 'Cochin',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TextInANest;