import React from 'react';
import { View, TextInput } from 'react-native';


const SearchBar = ({ query, setQuery }) => {
    const handleSearch = text => {
        const formattedQuery = text.toLowerCase();
        const filteredData = filter(fullData, user => {
          return contains(user, formattedQuery);
        });
        setFullData(filteredData);
        setQuery(text);
    };

    const contains = ({ name, email }, query) => {
        const { first, last } = name;
        if (first.includes(query) || last.includes(query) || email.includes(query)) {
          return true;
        }
        return false;
    };

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
          placeholderTextColor='grey'
          style={{ backgroundColor: '#333333', color: 'white', width: 320 }}
        />
      </View>
    );
};

export default SearchBar;
