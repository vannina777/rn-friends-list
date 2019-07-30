import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import FriendListItem from '../components/FriendListItem';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { firstName: 'Bob', lastName: 'Doe', email: 'text1@example.com' },
          { firstName: 'Alice', lastName: 'Doe', email: 'text2@example.com' },
          {
            firstName: 'Jennifer',
            lastName: 'Doe',
            email: 'text3@example.com',
          },
        ]}
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
  },
  listSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'lightgray',
    marginVertical: 5,
  },
});
