import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Item from "./Item";
import styles from './styles';


const Settings = ({ navigation }) => {
    const DATA = [
        {
            title: 'My account',
            content: 'Acount details and profile'
        },
        {
            title: 'Security',
            content: 'Security options & controls'
        },
        {
            title: 'Privacy',
            content: 'Information collected & usage'
        },
        {
            title: 'Communication',
            content: 'Emails, invites and notifications'
        },
        {
            title: 'Help & Support',
            content: 'FAQ & help desk'
        }, {
            title: 'Log out',
            content: 'Log out of your account'
        },
    ]

    const renderItem = ({ item }) => (
        <Item title={item.title} content={item.content} />
    );

    return (
        <View style={styles.container}>
            <Text style={[styles.header]}>Settings</Text>
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Text style={{color: 'white'}}>logout</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Onboarding3')}>
                <Text style={{color: 'white'}}>logout</Text>
            </TouchableOpacity>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.title}
            />


        </View>
    )
}

export default Settings;