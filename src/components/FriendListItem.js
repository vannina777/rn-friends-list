import React from 'react';
import { Button } from 'react-native';

export default function FriendListItem({ friend, onPress }) {
  return <Button title={`View ${friend}`} onPress={onPress} />;
}
