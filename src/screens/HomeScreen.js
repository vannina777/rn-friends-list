import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import FriendListItem from '../components/FriendListItem';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={[{ name: 'Bob' }, { name: 'Alice' }, { name: 'Jennifer' }]}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <FriendListItem
            friend={item.name}
            onPress={() =>
              navigation.navigate('FriendScreen', { friend: item.name })
            }
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.listSeperator} />}
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
  listSeperator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'lightgray',
    marginVertical: 5,
  },
});
