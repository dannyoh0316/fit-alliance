import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
// import filter from 'lodash.filter';


const friendsData = [
  { id: '1', title: 'Adam' },
  { id: '2', title: 'Bob' },
  { id: '3', title: 'Carl' },
  { id: '4', title: 'David' },
];

const FriendsScreen = () => {
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    // const filteredData = filter(fullData, user => {
      // return contains(user, formattedQuery);
    // });
    // setData(filteredData);
    setQuery(text);
  };
  
  const contains = ({ name, email }, query) => {
    const { first, last } = name;
  
    if (first.includes(query) || last.includes(query) || email.includes(query)) {
      return true;
    }
  
    return false;
  };

  const renderHeader = () => {
    return (
      <View
        style={{
          backgroundColor: '#333333',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          placeholderTextColor='white'
          style={{ backgroundColor: '#333333', color: 'white', paddingHorizontal: 20 }}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Friends</Text>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={friendsData}
        keyExtractor={friend => friend.id}
        renderItem={({ item }) => (
          <View style={styles.friend}>
            <Text style={styles.friendText}>{item.title}</Text>
          </View>
        )}
      />
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
      fontSize:26,
      textAlign:'center',
      margin:20,
      color:'white',
      fontWeight:'bold'
  },
  friend: {
    marginTop: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%'
  },
  friendText: {
    fontSize: 18
  },
});

export default FriendsScreen;
