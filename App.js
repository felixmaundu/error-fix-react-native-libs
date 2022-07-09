import React from 'react';
// import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
// import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack'
import RootScreen from './src/tabs/screens/RootScreen';

const Stack = createStackNavigator();
function  App() {
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  // <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="RootScreen" component={RootScreen} options={({ route }) => ({ headerShown: false })} />
     </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
