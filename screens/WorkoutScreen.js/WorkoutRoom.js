import { filter } from 'lodash';
import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import BonusQuests from './BonusQuests';


const WorkoutRoom = ({ navigation }) => {
  const [selected, setSelected] = useState([]);

  const toggleSelect = quest => setSelected(selected => (selected.includes(quest) ? selected.filter(q => q !== quest) : [...selected, quest]));

  const isSelected = quest => selected.includes(quest);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Workout Room</Text>
      <Text style={styles.bonusText}>
        Check out these bonus workouts to gain extra points!
      </Text>
      <BonusQuests selected={selected} toggleSelect={toggleSelect} isSelected={isSelected} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
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
    fontWeight: 'bold',
  },
  bonusText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#8d9ba1',
  }
});

export default WorkoutRoom;
