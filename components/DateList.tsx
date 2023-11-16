import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {EmptyDate} from './EmptyDate';
import {getDatesInRange, getWeekendsInRange} from '../utils/createDates';
import moment from 'moment';

// const weekends = [
//   'Nov 3 - Nov 5',
//   'Nov 10 - Nov 12',
//   'Nov 17 - Nov 19',
//   'Nov 24 - Nov 26',
//   'Dec 1 - Dec 3',
//   'Dec 8 - Dec 10',
//   'Dec 15 - Dec 17',
//   'Dec 22 - Dec 24',
// ];

const dates = getDatesInRange();
const weekends = getWeekendsInRange();

export const DateList = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={styles.containerStyle}>
      <View style={{flex: 1}}>
        {weekends.map((weekend, index) => {
          console.log(weekend);
          return (
            <>
              {/* <OtherDate date={date} empty={false} /> */}
              <OtherDate
                date={`${moment(weekend[0].date)
                  .add(1, 'day')
                  .format('MMM Do')}-${moment(weekend[weekend.length - 1].date)
                  .add(1, 'day')
                  .format('MMM Do')}`}
                empty={false}
              />
            </>
          );
        })}
      </View>
    </ScrollView>
  );
};

const OtherDate = ({date, empty}: {date: string; empty: boolean}) => {
  return <EmptyDate date={date} />;
  if (!empty) {
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>{date}</Text>

      <View style={styles.subDateContainer}>
        <Text style={styles.textColor}>Nov 10</Text>
        <Text style={styles.textColor}>🐴 Horse Meat Disco</Text>
      </View>
      <View style={styles.subDateContainer}>
        <Text style={styles.textColor}>Nov 11</Text>
        <Text style={styles.textColor}>🦅 Eagle</Text>
      </View>
      <View style={styles.subDateContainer}>
        <Text style={styles.textColor}>Nov 12</Text>
        <Text style={styles.textColor}>🪩 UltraMaroon</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderColor: 'white',
    borderBottomWidth: 1,
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
  textColor: {
    color: 'white',
  },
  containerStyle: {
    // flex: 1,
    // padding: 20,
    backgroundColor: '#181D27',
  },
});
