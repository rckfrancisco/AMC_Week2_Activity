import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView
    style={{
        justifyContent: 'center',
        alignItems: 'center',
    }} >
      <Text
      style={{
        textAlign: 'center',
    }}>Rickmer Aivan Francisco</Text>
    <View>
      <Text
      style={{
        textAlign: 'center',
    }}>AMC - IT 302</Text>
    <Image
      source={{
        url: 'https://cdn.nba.com/headshots/nba/latest/1040x760/203648.png',
        }}
        style={{width: 200, height: 200}}
      />
      </View>
      <TextInput
      style={{
        textAlign: 'center',
        height:40,
        borderColor: 'gray',
        borderWidth: 1,
      }}
      defaultValue="You can type in me"
      />
      </ScrollView>
  );
};

export default App;
