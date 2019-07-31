import React from 'react';
import { StyleSheet, Dimensions, Image, Text, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import capitalizeFirstLetter from '../helper';

export default function FriendScreen({ navigation }) {
  const friend = navigation.getParam('friend');

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      <Image style={styles.image} source={{ uri: friend.picture.large }} />
      <Text>{capitalizeFirstLetter(friend.name.first)}</Text>
    </ScrollView>
  );
}

FriendScreen.navigationOptions = ({ navigation }) => {
  const friend = navigation.getParam('friend');
  return {
    title: `${capitalizeFirstLetter(friend.name.first)} ${capitalizeFirstLetter(friend.name.last)}`,
  };
};

const width = Dimensions.get('window').width * 0.6;

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
    borderRadius: 10,
  },
});

FriendScreen.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};
