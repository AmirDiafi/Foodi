/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import Container from './src/navigations/stacks'
import {Provider} from 'react-redux'
import store from './src/store/store'
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {SafeAreaProvider} from 'react-native-safe-area-context'
// import {LogBox} from 'react-native'

// LogBox.ignoreLogs(["exported from 'deprecated-react-native-prop-types'."])

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Provider store={store}>
            <Container />
          </Provider>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

export default App
