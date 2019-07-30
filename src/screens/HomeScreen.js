import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello from Home!</Text>
      <Button
        title="View Bob"
        onPress={() => navigation.navigate('FriendScreen', { friend: 'Bob' })}
      />
      <Button
        title="View Alice"
        onPress={() => navigation.navigate('FriendScreen', { friend: 'Alice' })}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
