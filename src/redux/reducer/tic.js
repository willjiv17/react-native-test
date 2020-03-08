import {
  SET_USER_INPUT,
  SET_USER_INPUT_TYPE,
  RESET_BOARD,
  START_GAME,
  END_GAME,
} from '../actions';

const initialState = {
  started: false,
  inputType: 'X',
  tics: new Array(9),
  finished: false,
  winner: null,
};

const isWinner = (cells) => {
  const a = cells.filter(id => id >= 0 && id <= 2);
  if (a.length === 3) {
    return true;
  }
  const b = cells.filter(id => id >= 3 && id <= 5);
  if (b.length === 3) {
    return true;
  }
  const c = cells.filter(id => id >= 6 && id <= 8);
  if (c.length === 3) {
    return true;
  }
  const d = cells.filter(id => id % 3 === 0);
  if (d.length === 3){
    return true;
  }
  const e = cells.filter(id => id % 3 === 1);
  if (e.length === 3){
    return true;
  }
  const f = cells.filter(id => id % 3 === 2);
  if (f.length === 3){
    return true;
  }
  const g = cells.filter(id => id === 0 || id === 4 || id === 8);
  if (g.length === 3){
    return true;
  }
  const h = cells.filter(id => id === 2 || id === 4 || id === 6);
  if (h.length === 3){
    return true;
  }
  return false;
}

const isFinished = (tics) => {
  const a = tics.filter(tic => tic === null);
  return a.length === 1;
}

const getWinner = (tics) => {
  const xCells = [];
  const oCells = [];
  for (let i = 0; i < tics.length; i += 1) {
    if (tics[i] === 'X') {
      xCells.push(i);
    }
    if (tics[i] === 'O') {
      oCells.push(i);
    }
  }
  if (isWinner(xCells)) {
    return 'X';
  }
  if (isWinner(oCells)) {
    return 'O';
  }
  return null;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        started: true,
        finished: false,
        tics: new Array(9),
        winner: null,
      };
    case END_GAME:
      return {
        ...state,
        finished: true,
        started: false,
        winner: null,
      };
    case SET_USER_INPUT_TYPE:
      return {
        ...state,
        inputType: action.payload,
      };
    case SET_USER_INPUT:
      const newTics = [...state.tics];
      newTics[action.payload] = state.inputType;
      const remainingTics = [];
      for (let i = 0; i < newTics.length; i += 1) {
        if (!newTics[i]) {
          remainingTics.push(i);
        }
      }
      const pos = Math.floor(Math.random() * remainingTics.length);
      newTics[remainingTics[pos]] = state.inputType === 'X' ? 'O' : 'X';
      const winner = getWinner(newTics);
      const finished = winner ? true : isFinished(newTics);
      return {
        ...state,
        tics: newTics,
        winner,
        finished,
        started: finished ? false : true,
      };
    case RESET_BOARD:
      return initialState;

    default:
      return state;
  }
};
