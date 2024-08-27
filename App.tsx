import React from "react";

import {View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import RootNavigation from "./src/Navigation/RootNavigation";
import 'react-native-screens';
import 'react-native-reanimated';
import { ToastProvider } from 'react-native-toast-notifications'
import { Provider } from "react-redux";
import { store } from "./src/store/Store";
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App=()=>{
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
    <Provider store={store}>
    <ToastProvider>
    <NavigationContainer>
      <RootNavigation/>

    </NavigationContainer>
    </ToastProvider>
    </Provider>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
export default App;