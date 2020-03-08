import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import Piece from './Piece';
import {setUserInput} from '../../../redux/actions';

const styles = {
  wrapper: {
    flexDirection: 'column',
    width: 300,
    height: 300,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const Row = ({tics, row, handlePress, started}) => {
  return (
    <View style={styles.row}>
      {[0, 1, 2].map(idx => {
        const pos = row * 3 + idx;
        return (
          <Piece
            status={tics[pos]}
            started={started}
            onPress={() => handlePress(pos)}
            key={`tile_${row}_${idx}`}
          />
        );
      })}
    </View>
  );
};

const GamePanel = ({started, tics, setUserInput}) => {
  const handlePress = pos => {
    setUserInput(pos);
  };
  return (
    <View style={styles.wrapper}>
      {[0, 1, 2].map(idx => (
        <Row
          tics={tics}
          row={idx}
          started={started}
          handlePress={handlePress}
          key={`row-${idx}`}
        />
      ))}
    </View>
  );
};

const mapStateToProps = state => ({...state.tic});
const mapDispatchToProps = {setUserInput};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GamePanel);
