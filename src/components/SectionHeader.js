import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function FriendListItem({ text }) {
  return <Text style={styles.section}>{text}</Text>;
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: 'whitesmoke',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    fontSize: 18,
    padding: 5,
  },
});
