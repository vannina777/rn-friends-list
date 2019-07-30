import React from 'react';
import { StyleSheet, View, SectionList } from 'react-native';
import SettingsItem from '../components/SettingsItem';
import SectionHeader from '../components/SectionHeader';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: 'Version',
            data: [{ key: 1, info: '1.3' }],
          },
          {
            title: 'Theme',
            data: [{ key: 3, info: 'Light' }, { key: 4, info: 'Dark' }],
          },
        ]}
        renderItem={({ item }) => <SettingsItem text={item.info} />}
        renderSectionHeader={({ section }) => (
          <SectionHeader text={section.title} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
});
