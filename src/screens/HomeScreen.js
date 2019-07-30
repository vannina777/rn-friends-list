import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import FriendListItem from '../components/FriendListItem';

export default function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = [
      { firstName: 'Bob', lastName: 'Doe', email: 'text1@example.com' },
      { firstName: 'Alice', lastName: 'Doe', email: 'text2@example.com' },
      {
        firstName: 'Jennifer',
        lastName: 'Doe',
        email: 'text3@example.com',
      },
    ];
    await new Promise(test => setTimeout(test, 3000));
    setData(data);
    setIsLoading(false);
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
});
