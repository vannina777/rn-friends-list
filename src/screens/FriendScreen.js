import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function FriendScreen({ navigation }) {
  const friend = navigation.getParam('friend');

  return (
    <View style={styles.container}>
      <Text>{friend}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

FriendScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('friend'),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
