/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';

import MainPanel from './container/MainPanel';
import Store, {Persistor} from './configureStore';

const App = () => {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <SafeAreaView>
          <MainPanel />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
