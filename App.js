import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Provider store={store}>
          <NavigationContainer>
          <SafeAreaProvider>
           <KeyboardAvoidingView 
            behavior={Platform.OS ==="ios" ? "padding" : "height"}
            style={{flex:1}}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}>
           <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} 
        options={{headerShown:false}}
        />
         <Stack.Screen name="MapScreen" component={MapScreen} 
        options={{headerShown:false}}
        />
      </Stack.Navigator>
           </KeyboardAvoidingView>
      </SafeAreaProvider>
          </NavigationContainer>
    </Provider>
  );
}

