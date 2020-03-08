import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';

import GamePanel from './component/GamePanel';
import Header from './component/Header';

import {startGame, endGame} from '../../redux/actions';
import {ColorValues, MeasureValue} from '../../constant'

const styles = {
  mainPanelStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  winnerTextStyle: {
    fontSize: 30
  },

  buttonShape: {
    padding:  MeasureValue.paddingSizeM,
    backgroundColor: ColorValues.default,
    margin: 20,
  },
  buttonTitle: {
    fontSize: MeasureValue.fontSizeLarge,
    color: ColorValues.white,
  },
};

const Button = ({title, onPress}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.buttonShape}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const MainPanel = ({
  startGame,
  endGame,
  started,
  winner,
  finished,
  inputType,
}) => {
  const handleButtonPress = () => {
    if (started) {
      endGame();
    } else {
      startGame();
    }
  };
  const winnerState = () => {
    if (finished) {
      if (winner) {
        const text = winner === inputType ? 'You won!' : 'You lost!';
        return <Text style={styles.winnerTextStyle}>{text}</Text>;
      } else {
        return <Text style={styles.winnerTextStyle}>Draw!</Text>;
      }
    }
    return false;
  };
  return (
    <View style={styles.mainPanelStyle}>
      <Header />
      <GamePanel />
      {winnerState()}
      <Button
        title={started ? 'End Game' : 'Start Game'}
        onPress={handleButtonPress}
      />
    </View>
  );
};

const mapStateToProps = ({tic}) => ({...tic});

export default connect(
  mapStateToProps,
  {startGame, endGame},
)(MainPanel);
