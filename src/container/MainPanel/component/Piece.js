import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const styles = {
  wrapper: {
    width: 100,
    height: 100,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileStatus: {
    fontSize: 36,
  },
};

const Piece = ({ started, status, onPress }) => {
  return (
    <TouchableHighlight
      disabled={!started || (status === 'X' || status === 'O')}
      onPress={onPress}>
      <View style={styles.wrapper}>
        <Text style={styles.tileStatus}>{status || ''}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Piece;