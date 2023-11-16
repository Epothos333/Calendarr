import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export const CollapsableDates = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subDateContainer}>
        <Text style={styles.dateLabel}>Nov 10</Text>
        <TextInput
          placeholder="Tap to edit"
          placeholderTextColor={'gray'}
          style={styles.textInput}
        />
      </View>
      <View style={styles.subDateContainer}>
        <Text style={styles.dateLabel}>Nov 11</Text>
        <TextInput
          placeholder="Tap to edit"
          placeholderTextColor={'gray'}
          style={styles.textInput}
        />
      </View>
      <View style={styles.subDateContainer}>
        <Text style={styles.dateLabel}>Nov 12</Text>
        <TextInput
          placeholder="Tap to edit"
          placeholderTextColor={'gray'}
          style={styles.textInput}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderColor: 'white',
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: 'white',
    flex: 1,
    color: 'white',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
  },
  subDateContainer: {
    marginHorizontal: 15,
    paddingVertical: 10,
    borderTopWidth: 2,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateLabel: {
    color: 'white',
    flex: 1,
  },
});
