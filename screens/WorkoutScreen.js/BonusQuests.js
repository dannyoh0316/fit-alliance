import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';


const BonusQuests = ({ navigation, toggleSelect, isSelected }) => {
  return (
    <View>
        <Text>Bonus quests</Text>
        <TouchableOpacity style={isSelected('lunges') ? styles.questSelected : styles.questUnselected} onPress={() => toggleSelect('lunges')}>
            <Text style={styles.questText}>Lunges x10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={isSelected('run') ? styles.questSelected : styles.questUnselected} onPress={() => toggleSelect('run')}>
            <Text style={styles.questText}>Run 5km x10</Text>
        </TouchableOpacity>
        <TouchableOpacity style={isSelected('dumbbell') ? styles.questSelected : styles.questUnselected} onPress={() => toggleSelect('dumbbell')}>
            <Text style={styles.questText}>Dumbbell rows x10</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        textAlign:'center',
        margin: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    questUnselected: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 40,
        padding: 10,
        minWidth: 320,
        maxWidth: 320,
        backgroundColor: '#333333',
    },
    questSelected: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        height: 40,
        padding: 10,
        minWidth: 320,
        maxWidth: 320,
        backgroundColor: '#fe6813',
    },
    questText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white',
    },
});

export default BonusQuests;
