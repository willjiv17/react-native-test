export const SET_USER_INPUT_TYPE = 'SET_USER_INPUT_TYPE';
export const SET_USER_INPUT = 'SET_USER_INPUT';
export const RESET_BOARD = 'RESET_BOARD';
export const START_GAME = 'START_GAME';
export const END_GAME = 'END_GAME';

export const resetBoard = () => dispatch => dispatch({type: RESET_BOARD});

export const startGame = () => dispatch => dispatch({type: START_GAME});

export const endGame = () => dispatch => dispatch({type: END_GAME});

export const setUserInput = pos => dispatch =>
  dispatch({type: SET_USER_INPUT, payload: pos});

export const setUserInputType = inputType => dispatch =>
  dispatch({type: SET_USER_INPUT_TYPE, payload: inputType});
