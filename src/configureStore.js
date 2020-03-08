import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import {persistStore} from 'redux-persist';

import reducers from './redux/reducer';

const store = createStore(reducers, compose(applyMiddleware(ReduxThunk)));

export default store;
export const Persistor = persistStore(store);
