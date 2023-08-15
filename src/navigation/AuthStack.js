import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from '../screens';
import NavigationStrings from './NavigationStrings';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={NavigationStrings.SIGNIN}>
      <Stack.Screen name={NavigationStrings.SIGNIN} component={Screens.SignIn} />
      <Stack.Screen name={NavigationStrings.OTP} component={Screens.Otp} />
      <Stack.Screen name={NavigationStrings.TYPE_OF_SERVICES} component={Screens.TypeOfServices} />
      <Stack.Screen name={NavigationStrings.COMPANY_DETAILS} component={Screens.CompanyDetails}
      />
    </Stack.Navigator>
  );
}
