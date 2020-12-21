import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Leaderboard from './Leaderboard';
import Selector from './Selector';
import axios from 'axios';


const LeaderboardScreen = () => {
  const [selected, setSelected] = useState('weekly');
  const [allFriends, setAllFriends] = useState([]);

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = async () => {
    const res = await axios.post('https://us-central1-aiot-fit-xlab.cloudfunctions.net/fitalliancegetfriends', {
      useremail: 'danny@gmail.com'
    });
    const friends = res.data.friends;
    friends.unshift({friendemail: "danny@gmail.com", friendid: -1, friendname: "Danny", friendpic: ""});
    setAllFriends(friends);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Leaderboard</Text>
      <Selector selected={selected} setSelected={setSelected} />
      <Leaderboard selected={selected} allFriends={allFriends} />
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
