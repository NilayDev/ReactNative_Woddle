import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screen/View/Splash';
import Routes from './Routes';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();
export default function StackNavigation() {
    const stackData: any[] = [
        { name: Routes.Splash, component: Splash },
        { name: Routes.BottomNavigation, component: BottomNavigation },
    ];
    return (
        <Stack.Navigator
            initialRouteName={Routes.Splash}
            screenOptions={{
                headerShown: false,
            }}>
            {stackData.map((item, index) => {
                return (
                    <Stack.Screen
                        key={index}
                        name={item.name}
                        component={item.component}
                        options={{
                            gestureEnabled: false
                        }}
                    />
                );
            })}
        </Stack.Navigator>
    );
}
