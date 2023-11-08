import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {EmptyDate} from './EmptyDate';

const weekends = [
  'Nov 3 - Nov 5',
  'Nov 10 - Nov 12',
  'Nov 17 - Nov 19',
  'Nov 24 - Nov 26',
  'Dec 1 - Dec 3',
  'Dec 8 - Dec 10',
  'Dec 15 - Dec 17',
  'Dec 22 - Dec 24',
];

export const DateList = () => {
  return (
    <>
      {weekends.map((date, index) => (
        <>
          {index === 1 ? (
            <OtherDate date={date} />
          ) : (
            <EmptyDate index={index} date={date} />
          )}
        </>
      ))}
    </>
  );
};

const OtherDate = ({date}) => (
  <View
    style={{
      paddingVertical: 10,
      borderColor: 'white',
      borderBottomWidth: 1,
    }}>
    <Text style={{color: 'white'}}>{date}</Text>

    <View style={styles.subDateContainer}>
      <Text style={{color: 'white'}}>Nov 10</Text>
      <Text style={{color: 'white'}}>🐴 Horse Meat Disco</Text>
    </View>
    <View style={styles.subDateContainer}>
      <Text style={{color: 'white'}}>Nov 11</Text>
      <Text style={{color: 'white'}}>🦅 Eagle</Text>
    </View>
    <View style={styles.subDateContainer}>
      <Text style={{color: 'white'}}>Nov 12</Text>
      <Text style={{color: 'white'}}>🪩 UltraMaroon</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {},
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
