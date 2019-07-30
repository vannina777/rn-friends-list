import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import FriendListItem from '../components/FriendListItem';

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=20');
      const users = await response.json();
      setData(users.results);
      setIsLoading(false);
    } catch (err) {
      alert('Network connection error');
      setIsLoading(false);
    }
  };

  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="mediumvioletred" />
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.email}
        renderItem={({ item }) => (
          <FriendListItem
            friend={item}
            onPress={() =>
              navigation.navigate('FriendScreen', { friend: item })
            }
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>Unable to load data.</Text>
        )}
      />
    </View>
  );
}

// hide top bar
HomeScreen.navigationOptions = { header: null };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    justifyContent: 'center',
  },
  listSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'lightgray',
    marginVertical: 5,
  },
  listEmpty: {
    paddingTop: 100,
    fontSize: 32,
    textAlign: 'center',
  },
});
