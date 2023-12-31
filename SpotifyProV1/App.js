import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, View } from 'react-native';
import HomeNavigation from './navigation/HomeNavigation';
import PremiumScreen from "./screens/PremiumSc";
import LoginScreen from "./screens/LoginSc";
import ThanhNhac from './components/ThanhNhac';
import miniScrollMusic from './components/MiniScrollMusic';
import macroScrollMusic from './components/MacroScrollMusic';
import { PlayerContext, Player } from './PlayerContext';
import AlbumSc from './screens/AlbumSc';
import SearchNavigation from './navigation/SearchNavigation';
import LibraryNavigation from './navigation/LibraryNavigation';
import ProfileSc from './screens/ProfileSc';
import SignUpNavigation from './navigation/SignUpNavigation';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottomTabs() {
  const { currentTrack, setCurrentTrack } = useContext(Player);
  return (
    <>
      {
        currentTrack && (
          <ThanhNhac />
        )
      }
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "rgba(0,0,0,0.65)",
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
          borderTopWidth: 0,
          //chinh tuy phone
          height: 80,
        },
        tabBarActiveTintColor: 'white',
      }}>
        <Tab.Screen
          name="Home"
          component={HomeNavigation}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image style={{ width: 24, height: 24 }} source={require('./assets/icon/VectoriconHome.png')} />
              ) : (
                <Image style={{ width: 24, height: 24 }} source={require('./assets/icon/VectoriconHome-1.png')} />
              ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchNavigation}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image style={{ width: 24, height: 24 }} source={require('./assets/icon/VectoriconSearch-1.png')} />
              ) : (
                <Image style={{ width: 24, height: 24 }} source={require('./assets/icon/VectoriconSearch.png')} />
              ),
          }}
        />
        <Tab.Screen
          name="Library"
          component={LibraryNavigation}
          options={{
            tabBarLabel: "Library",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image style={{ width: 24, height: 24 }} source={require('./assets/icon/VectoriconLib-1.png')} />
              ) : (
                <Image style={{ width: 24, height: 24 }} source={require('./assets/icon/VectoriconLib.png')} />
              ),
          }}
        />
        <Tab.Screen
          name="Premium"
          component={PremiumScreen}
          options={{
            tabBarLabel: "Premium",
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Image style={{ width: 24, height: 24 }} source={require('./assets/icon/VectoriconPremium.png')} />
              ) : (
                <Image style={{ width: 24, height: 24 }} source={require('./assets/icon/VectoriconPremium.png')} />
              ),
          }}
        />
      </Tab.Navigator >
    </>
  )
}

function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={BottomTabs} />
      <Stack.Screen name="Profile" component={ProfileSc} />
      <Stack.Screen name="SignUp" component={SignUpNavigation} />
      {/*  */}
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <PlayerContext>
        <StackNavigation />
      </PlayerContext>
    </NavigationContainer>
  );
}

