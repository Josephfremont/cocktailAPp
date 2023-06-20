import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Views/Home';
import Favoris from './Views/Favoris';
import Account from './Views/Account';
import CockTailInfo from './Views/CockTailInfo';

// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';

// SplashScreen.preventAutoHideAsync();


const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();


function Root() {
  return (
    
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{ 
            headerTitleAlign: 'center'
          }}
        />
        <Tab.Screen 
          name="Favoris" 
          component={Favoris} 
          options={{ 
            headerTitleAlign: 'center'
          }}
        />
        <Tab.Screen 
          name="Account" 
          component={Account}
          options={{ 
            title: 'Mon profil',
            headerTitleAlign: 'center'
          }}
        />
        {/* <Tab.Screen 
          name="Cocktail" 
          component={CockTailInfo}
          options={{ 
            title: 'Cocktail',
            headerTitleAlign: 'center',
            headerShown: false
          }}
        /> */}
      </Tab.Navigator>
  );
}



function App() {

  // const [fontsLoaded] = useFonts({
  //   'Bayshore': require('./assets/fonts/Bayshore.otf'),
  // });
  
  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);
  
  // if (!fontsLoaded) {
  //   return null;
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cocktail"
          component={CockTailInfo}
          options={{ headerShown: false }}
        />
        {/* <Tab.Screen 
          name="Cocktail" 
          component={CockTailInfo}
          options={{ 
            title: 'Cocktail',
            headerTitleAlign: 'center',
            headerShown: false
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;