import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Infoscreen from '../screens/Infoscreen';
import Loading from '../screens/Loading';
import Productinfo from '../screens/Productinfo';
import Scanscreen from '../screens/Scanscreen';
import Splashscreen from '../screens/Splashscreen';
const Stack = createStackNavigator();

const Appnavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Splash"
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Splash" component={Splashscreen} />
      <Stack.Screen name="Info" component={Infoscreen}/>
      <Stack.Screen name="Scan" component={Scanscreen} />
      <Stack.Screen name="Load" component={Loading} />
      <Stack.Screen name="Product" component={Productinfo} />
    </Stack.Navigator>
  );
};

export default Appnavigation;