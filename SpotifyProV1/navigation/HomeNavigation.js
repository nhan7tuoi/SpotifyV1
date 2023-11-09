import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeSc";
import AlbumScreen from "../screens/AlbumSc";
import ProfileSc from "../screens/ProfileSc";

const Stack = createNativeStackNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home1">
      <Stack.Screen
        name="Home1"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Album"
        component={AlbumScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileSc}
        options={{
          headerTitle: "Cá Nhân",
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: "700",
            color: "#fff",
          },
          headerStyle: {
            backgroundColor: "black",
          }
        }}
      />
    </Stack.Navigator>
  );
}
export default HomeNavigation;