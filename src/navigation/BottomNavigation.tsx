import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import TabHome from '../screen/View/TabHome';
import TabMore from '../screen/View/TabMore';
import TabAdd from '../screen/View/TabAdd';

import PlatformType from '../utils/PlatformType';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './Routes';
import { TabBarIcon } from '../utils/LocalImages';
import Responsive from '../utils/Responsive';
import Colors from '../utils/Colors';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  const menudata = [
    { name: Routes.TabHome, component: TabHomeNavigator, label: "Home" },
    { name: Routes.TabAdd, component: TabAddNavigator, label: "" },
    { name: Routes.TabMore, component: TabMoreNavigator, label: "More" },
  ];

  return (
    <Tab.Navigator
      initialRouteName={'TabHome'}
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.darkGrey,
        tabBarInactiveTintColor: Colors.darkBlack,
        tabBarHideOnKeyboard: false,
        tabBarShowLabel: true,
        tabBarBackground: () => (
          <View
            style={{
              backgroundColor: Colors.tabBarBg,
              width: "100%",
              alignSelf: "center",
              height: Responsive.hp(6),
            }}
          />
        ),
      }}>
      {menudata.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={({ route }) => ({
            tabBarIcon: ({ color }) => bottomIconsChange(item.name, color),
            tabBarLabel: item.label,
          })}
        />
      ))}
    </Tab.Navigator>
  );
};
export default BottomNavigation;

const TabHomeStack = createNativeStackNavigator();
function TabHomeNavigator() {
  const stackData: any[] = [
    { name: Routes.TabHome, component: TabHome },
  ];

  return (
    <TabHomeStack.Navigator
      initialRouteName={Routes.TabHome}
      screenOptions={{
        headerShown: false,
      }}>
      {stackData.map((item: any, index: any) => {
        return (
          <TabHomeStack.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{
              gestureEnabled: false
            }}
          />
        );
      })}
    </TabHomeStack.Navigator>
  );
}

const TabAddStack = createNativeStackNavigator();
function TabAddNavigator() {
  const stackData: any[] = [
    { name: Routes.TabAdd, component: TabAdd },
  ];

  return (
    <TabAddStack.Navigator
      initialRouteName={Routes.TabAdd}
      screenOptions={{
        headerShown: false,
      }}>
      {stackData.map((item: any, index: any) => {
        return (
          <TabAddStack.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{
              gestureEnabled: false
            }}
          />
        );
      })}
    </TabAddStack.Navigator>
  );
}

const TabMoreStack = createNativeStackNavigator();
function TabMoreNavigator() {

  const stackData: any[] = [
    { name: Routes.TabMore, component: TabMore },
  ];

  return (
    <TabMoreStack.Navigator
      initialRouteName={Routes.TabMore}
      screenOptions={{
        headerShown: false,
      }}>
      {stackData.map((item: any, index: any) => {
        return (
          <TabMoreStack.Screen
            key={index}
            name={item.name}
            component={item.component}
            initialParams={item?.data}
            options={{
              gestureEnabled: false
            }}
          />
        );
      })}
    </TabMoreStack.Navigator>
  );
}

/**
 * Design Custom Tabbar
 * @param props 
 * @returns 
 */

const CustomTabBar = (props: any) => {
  return (
    <View
      style={Style.tabBgContainer}>
      <BottomTabBar {...props} />
    </View>
  );
};

/** Setup Bottom Tab Icon
 * 
 * @param tab 
 * @param color 
 * @returns 
 */
export const bottomIconsChange = (tab: any, color: any) => {
  switch (tab) {
    case Routes.TabHome:
      return (
        <Image source={(Colors.darkGrey == color) ? TabBarIcon.stab1 : TabBarIcon.tab1} style={ImageStyle.tabBarIcon} />
      )
    case Routes.TabAdd:
      return (
        <View style={Style.centerImgContainer}>
          <Image source={TabBarIcon.tab2} style={ImageStyle.centerIcon} />
        </View>
      );
    case Routes.TabMore:
      return (
        <Image source={(Colors.darkGrey == color) ? TabBarIcon.stab3 : TabBarIcon.tab3} style={ImageStyle.tabBarIcon} />
      );
    default:
      break;
  }
};

export const ImageStyle = StyleSheet.create({
  tabBarIcon: {
    width: Responsive.hp(3),
    height: Responsive.hp(3)
  },
  centerIcon: {
    width: Responsive.hp(6.5),
    height: Responsive.hp(6.5)
  },
})

export const Style = StyleSheet.create({
  centerImgContainer: {
    top: PlatformType.ios ? - Responsive.hp(2) : -20,
    width: PlatformType.ios ? Responsive.hp(8) : 77,
    height: PlatformType.ios ? Responsive.hp(8) : 77,
    borderRadius: PlatformType.ios ? Responsive.hp(5) : 50,
    backgroundColor: Colors.tabBarBg,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabBgContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.tabBarBg
  },
})