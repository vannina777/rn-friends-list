import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

export default function FriendListItem({ friend, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/icon.png')} />
        <Text>{friend}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
});
