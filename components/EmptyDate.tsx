import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CollapsableDates} from './CollapsableDates';

export const EmptyDate = ({date}: {date: string}) => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.text}>{date}</Text>
        <TouchableOpacity
          onPress={() => {
            setShow(!show);
          }}>
          <Text style={styles.text}>open</Text>
        </TouchableOpacity>
      </View>
      {show && (
        <View>
          <CollapsableDates />
        </View>
      )}
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
