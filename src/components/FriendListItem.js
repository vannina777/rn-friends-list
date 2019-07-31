import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import capitalizeFirstLetter from '../helper';

export default function FriendListItem({ friend, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: friend.picture.medium }} />
        <View style={styles.info}>
          <Text style={styles.name}>
            {capitalizeFirstLetter(friend.name.first)}{' '}
            {capitalizeFirstLetter(friend.name.last)}
          </Text>
          <Text style={styles.email}>{friend.email}</Text>
        </View>
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
    borderRadius: 40,
  },
  info: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  name: {
    fontSize: 20,
  },
  email: {
    fontSize: 16,
    fontWeight: '100',
  },
});

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }),
    email: PropTypes.string.isRequired,
    picture: PropTypes.shape({
      medium: PropTypes.string.isRequired,
    }),
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};
