import React from 'react';
import { StyleSheet, Dimensions, Image, Text, ScrollView } from 'react-native';

export default function FriendScreen({ navigation }) {
  const friend = navigation.getParam('friend');

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      <Image style={styles.image} source={require('../../assets/icon.png')} />
      <Text>{friend.name.first}</Text>
    </ScrollView>
  );
}

FriendScreen.navigationOptions = ({ navigation }) => {
  const friend = navigation.getParam('friend');
  return {
    title: `${friend.name.first} ${friend.name.last}`,
  };
};

const width = Dimensions.get('window').width * 0.75;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  scrollView: {
    backgroundColor: '#fff',
  },
  image: {
    width: width,
    height: width,
    marginBottom: 20,
  },
});
