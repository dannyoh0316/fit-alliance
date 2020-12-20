import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import FriendsList from './FriendsList';
import SearchBar from './SearchBar';
import axios from 'axios';


const FriendsScreen = () => {
  const [query, setQuery] = useState('');
  const [allFriends, setAllFriends] = useState([]);

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = async () => {
    const res = await axios.post('https://us-central1-aiot-fit-xlab.cloudfunctions.net/fitalliancegetfriends', {
      useremail: 'danny@gmail.com'
    });
    setAllFriends(res.data.friends);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Friends</Text>
      <SearchBar query={query} setQuery={setQuery} />
      <FriendsList allFriends={allFriends} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor:'#000',
  },
  header: {
      fontSize: 26,
      textAlign: 'center',
      margin: 20,
      color: 'white',
      fontWeight: 'bold',
  },
});

export default FriendsScreen;
