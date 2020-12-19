import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Leaderboard from './Leaderboard';
import Selector from './Selector';


const LeaderboardScreen = () => {
  const [selected, setSelected] = useState('weekly');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Leaderboard</Text>
      <Selector selected={selected} setSelected={setSelected} />
      <Leaderboard selected={selected} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#000',
  },
  header: {
      fontSize: 26,
      textAlign: 'center',
      margin: 20,
      color: 'white',
      fontWeight: 'bold'
  },
});

export default LeaderboardScreen;
