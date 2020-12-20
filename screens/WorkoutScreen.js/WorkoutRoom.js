import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BonusQuests from './BonusQuests';
import TargetSummary from './TargetSummary';


const WorkoutRoom = ({ navigation }) => {
  const [selected, setSelected] = useState([]);

  const toggleSelect = quest => setSelected(selected => (selected.includes(quest) ? selected.filter(q => q !== quest) : [...selected, quest]));

  const isSelected = quest => selected.includes(quest);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{right: 40, top: 15}} onPress={() => navigation.navigate('HomeScreen')}>
          <Image source={require('../Onboarding/images/prev.png')}></Image>
        </TouchableOpacity>
        <Text style={styles.headerText}>Workout Room</Text>
      </View>
      <TargetSummary />
      <Text style={styles.bonusText}>
        Choose some of this week's bonus workouts to gain extra points!
      </Text>
      <BonusQuests selected={selected} toggleSelect={toggleSelect} isSelected={isSelected} />
      <TouchableOpacity style={styles.connectDevices} onPress={() => navigation.navigate('WorkoutConnect')}>
        <Text style={styles.connectDevicesText}>Connect Devices</Text>
      </TouchableOpacity>
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
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 26,
    textAlign: 'center',
    margin: 20,
    color: 'white',
    fontWeight: 'bold',
    right: 20,
  },
  bonusText: {
    fontSize: 17,
    textAlign: 'center',
    color: '#8d9ba1',
  },
  connectDevices: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 40,
    padding: 10,
    minWidth: 320,
    maxWidth: 320,
    backgroundColor: '#34F4F9',
  },
  connectDevicesText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
});

export default WorkoutRoom;
