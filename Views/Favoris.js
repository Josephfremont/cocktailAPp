import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Favoris({ navigation, route }) {
  // const { user } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      {/* <Text>{user}</Text> */}
      {/* <Button
        title='Go to Details... again'
        onPress={() => navigation.push('CockTailInfo')}
      /> */}
      <Button
        title='Go to Home'
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title='Go to Home'
        onPress={() => navigation.navigate('Cocktail')}
      />
      <Button
        title='Go Back'
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default Favoris;