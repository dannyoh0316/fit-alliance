import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';


const leaderboardData = [
    { id: '1', title: 'Adam' },
    { id: '2', title: 'Bob' },
    { id: '3', title: 'Carl' },
    { id: '4', title: 'David' },
    { id: '5', title: 'Ethan' },
    { id: '6', title: 'Frank' },
    { id: '7', title: 'Gareth' },
    { id: '8', title: 'Harry' },
];

const Leaderboard = ({ selected }) => {
    return (
        <FlatList
            data={leaderboardData}
            keyExtractor={friend => friend.id}
            renderItem={({ item }) => (
                <View style={styles.friend}>
                    <Image
                        source={require('./../../assets/icon.png')}
                        style={styles.friendImage}
                    />
                    <View style={styles.metaInfo}>
                        <Text style={styles.friendName}>{item.title}</Text>
                    </View>
                    <View style={styles.metaInfo}>
                        <Text style={styles.friendName}>{item.id}</Text>
                    </View>
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    friend: {
      marginTop: 10,
      paddingVertical: 10,
      paddingHorizontal: 10,
      backgroundColor: '#000',
      flexDirection: 'row',
    },
    friendName: {
      fontSize: 20,
      width: 200,
      top: 25,
      color: 'white',
    },
    friendImage: {
      width: 75,
      height: 75,
      borderRadius: 50,
    },
    metaInfo: {
      marginLeft: 40,
    },
});

export default Leaderboard;
