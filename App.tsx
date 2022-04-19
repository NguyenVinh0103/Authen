// import { } from 'react-native'
import React, { useEffect, useState } from 'react';
import { LogBox, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigation } from './src/navigation';
import { Store } from './src/redux';
import { Provider } from 'react-redux';
import { MODE } from './src/enum';
LogBox.ignoreAllLogs();
const App = () => {
  const isDarkModeStore = Store.getState().util?.theme;
  useEffect(() => {
    const unsubscribe = Store.subscribe(() => {
      setIsDarkMode(Store.getState().util.theme)
    })
    return unsubscribe
  }, [])

  const [isDarkMode, setIsDarkMode] = useState(isDarkModeStore)

  return (
    <Provider store={Store}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={isDarkMode !== MODE.LIGHT ? "light-content" : "dark-content"}
          translucent
          backgroundColor={'transparent'}
        />
        <RootNavigation />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
