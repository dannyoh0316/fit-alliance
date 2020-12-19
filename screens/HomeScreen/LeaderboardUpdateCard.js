import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';


const LeaderboardUpdateCard = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.leaderboardUpdateCard} onPress={() => navigation.navigate('Leaderboard')}>
            <Text style={styles.leaderboardUpdateCardText}>
                You are the champ this week! Keep it up!
            </Text>
            <Text style={styles.leaderboardUpdateCardSubText}>
                See more
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    leaderboardUpdateCard: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 130,
        padding: 10,
        minWidth: 320,
        maxWidth: 320,
        backgroundColor: '#333333',
    },
    leaderboardUpdateCardText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white',
    },
    leaderboardUpdateCardSubText: {
        fontSize: 15,
        color: '#fe6813',
    },
});

export default LeaderboardUpdateCard;
