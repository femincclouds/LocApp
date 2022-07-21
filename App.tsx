import React from 'react';
import {SafeAreaView} from 'react-native';
import {AppProvider} from './src/state/AppContext';
import styles from './src/styles/styles';
import Location from './src/screens/Location/Location';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <AppProvider>
        <Location />
      </AppProvider>
    </SafeAreaView>
  );
};

export default App;
