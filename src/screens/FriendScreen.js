import React from 'react';
import { StyleSheet, Image, Text, ScrollView } from 'react-native';

export default function FriendScreen({ navigation }) {
  const friend = navigation.getParam('friend');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image style={styles.image} source={require('../../assets/icon.png')} />
      <Text>{friend}</Text>
    </ScrollView>
  );
}

FriendScreen.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('friend'),
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
});
