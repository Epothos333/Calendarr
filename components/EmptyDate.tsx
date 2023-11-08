import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CollapsableDates} from './CollapsableDates';
import Animated, {
  Easing,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export const EmptyDate = ({date, index}: {date: string; index: number}) => {
  const height = useSharedValue(0);
  const opacity = useSharedValue(0);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text}>{date}</Text>
        <TouchableOpacity
          onPress={() => {
            if (height.value === 0) {
              height.value = withTiming(undefined);
              opacity.value = withTiming(1, {duration: 500});
            } else {
              height.value = withTiming(0);
              opacity.value = withTiming(0, {duration: 500});
            }
          }}>
          <Text style={styles.text}>open</Text>
        </TouchableOpacity>
      </View>

      <Animated.View style={{height, opacity}}>
        <CollapsableDates />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderColor: 'white',
    borderBottomWidth: 1,
  },
  text: {
    color: 'gray',
  },
});
