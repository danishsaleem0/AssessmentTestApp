import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationRef';
import NavigationStrings from './NavigationStrings';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={NavigationStrings.AUTH_STACK}>
        <Stack.Screen name={NavigationStrings.AUTH_STACK} component={AuthStack} />
        <Stack.Screen name={NavigationStrings.MAIN_STACK} component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
