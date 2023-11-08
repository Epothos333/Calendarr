import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export const CollapsableDates = () => {
  return (
    <View
      style={{
        paddingVertical: 10,
        borderColor: 'white',
      }}>
      <View style={styles.subDateContainer}>
        <Text style={{color: 'white', flex: 1}}>Nov 10</Text>
        <TextInput
          placeholder="Tap to edit"
          placeholderTextColor={'gray'}
          style={{
            flex: 2,
            borderBottomWidth: 1,
            borderColor: 'white',
            flex: 1,
            color: 'white',
          }}
        />
      </View>
      <View style={styles.subDateContainer}>
        <Text style={{color: 'white', flex: 1}}>Nov 11</Text>
        <TextInput
          placeholder="Tap to edit"
          placeholderTextColor={'gray'}
          style={{
            flex: 2,
            borderBottomWidth: 1,
            borderColor: 'white',
            flex: 1,
            color: 'white',
          }}
        />
      </View>
      <View style={styles.subDateContainer}>
        <Text style={{color: 'white', flex: 1}}>Nov 12</Text>
        <TextInput
          placeholder="Tap to edit"
          placeholderTextColor={'gray'}
          style={{
            flex: 2,
            borderBottomWidth: 1,
            borderColor: 'white',
            flex: 1,
            color: 'white',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 0,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: 'white',
  },
  subDateContainer: {
    marginHorizontal: 15,
    paddingVertical: 5,
    marginTop: 10,
    borderTopWidth: 2,
    borderColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
