import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from '../screens';
import NavigationStrings from './NavigationStrings';

const Stack = createStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={NavigationStrings.HOME}>
            <Stack.Screen name={NavigationStrings.HOME} component={Screens.Home} />
        </Stack.Navigator>
    );
}
