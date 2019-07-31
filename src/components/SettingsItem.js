import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

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

FriendListItem.propTypes = {
  text: PropTypes.string.isRequired,
};
