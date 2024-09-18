import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import * as React from 'react';
import navigationServices from './NavigationServices';
import { localStorage } from '../utils/LocalStorageProvider';
import Strings from '../utils/Strings';
import StackNavigation from './StackNavigation';
// import { AuthProvider } from '../utils/AuthContext';
import { StatusBar } from 'react-native';
import PlatformType from '../utils/PlatformType';
import Colors from '../utils/Colors';
export default function Navigation() {
    const NewDefaultTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: Colors.white,
        },
    };

    return (
        <NavigationContainer
            ref={(navigatorRef: any) => {
                navigationServices.setTopLevelNavigator(navigatorRef);
            }}
            theme={NewDefaultTheme}>
            <StatusBar
                animated
                translucent={false}
                backgroundColor={Colors.white}
                barStyle={PlatformType.ios ? "dark-content" : "light-content"}
            />
            <StackNavigation />
        </NavigationContainer>
    );
}

