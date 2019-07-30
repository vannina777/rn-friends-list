import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function FriendListItem({ text }) {
  return <Text style={styles.item}>{text}</Text>;
}

const styles = StyleSheet.create({
  item: {
    color: 'dimgray',
    fontSize: 18,
    padding: 5,
  },
});
