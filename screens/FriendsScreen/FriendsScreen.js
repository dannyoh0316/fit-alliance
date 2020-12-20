import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FriendsList from './FriendsList';
import SearchBar from './SearchBar';


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
      <View style={styles.header}>
        <Text style={styles.headerText}>Friends</Text>
        <TouchableOpacity style={{left: 80, top: 25}}>
          <Image source={require('../../assets/add-friend.png')}></Image>
        </TouchableOpacity>
      </View>
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
      flexDirection: 'row',
  },
  headerText: {
      fontSize: 26,
      textAlign: 'center',
      margin: 20,
      color: 'white',
      fontWeight: 'bold',
  },
});

export default FriendsScreen;
