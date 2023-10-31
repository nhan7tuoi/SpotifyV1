import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import HomeScreen from "./screens/HomeSc";
import SearchScreen from "./screens/SearchSc";
import LibraryScreen from "./screens/LibrarySc";
import PremiumScreen from "./screens/PremiumSc";
import LoginScreen from "./screens/LoginSc";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "rgba(0,0,0,0.5)",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        shadowOpacity: 4,
        shadowRadius: 4,
        elevation: 4,
        shadowOffset: {
          width: 0,
          height: -4
        },
        borderTopWidth: 0
      }
    }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image style={{width:24,height:24}} source={require('./assets/icon/VectoriconHome.png')}/>
            ) : (
              <Image style={{width:24,height:24}} source={require('./assets/icon/VectoriconHome-1.png')}/>
            ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image style={{width:24,height:24}} source={require('./assets/icon/VectoriconSearch-1.png')}/>
            ) : (
              <Image style={{width:24,height:24}} source={require('./assets/icon/VectoriconSearch.png')}/>
            ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarLabel: "Library",
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image style={{width:24,height:24}} source={require('./assets/icon/VectoriconLib-1.png')}/>
            ) : (
              <Image style={{width:24,height:24}} source={require('./assets/icon/VectoriconLib.png')}/>
            ),
        }}
      />
      <Tab.Screen
        name="Premium"
        component={PremiumScreen}
        options={{
          tabBarLabel: "Premium",
          tabBarLabelStyle: { color: "white" },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image style={{width:24,height:24}} source={require('./assets/icon/VectoriconPremium.png')}/>
            ) : (
              <Image style={{width:24,height:24}} source={require('./assets/icon/VectoriconPremium.png')}/>
            ),
        }}
      />
    </Tab.Navigator>
  )
}

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={BottomTabs} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

