import * as React from 'react';
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Appnavigation from './src/navigation/Appnavigation';

export default function App(){
    return (
    <NavigationContainer>
      <Appnavigation />
    </NavigationContainer>
    )
  
}
