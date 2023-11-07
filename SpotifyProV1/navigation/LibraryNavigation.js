import { StyleSheet, Text, View, Pressable } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import LibrarySc from "../screens/LibrarySc";
import AlbumSc from "../screens/AlbumSc";

const stack = createNativeStackNavigator();
const LibraryNavigation = () => {
  return (
    <stack.Navigator initialRouteName="LibrarySc">
      <stack.Screen
        name="LibrarySc"
        component={LibrarySc}
        options={{
          headerTitle: "Thư viện",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitleStyle: {
            fontSize: 22,
            fontWeight: "700",
            color: "#fff",
          },
          headerLeft: () => null,
          headerRight: () => (
            <View
              style={{
                width: 100,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Pressable>
                <FontAwesome name="search" size={24} color={"#fff"} />
              </Pressable>
              <Pressable>
                <FontAwesome name="plus" size={24} color={"#fff"} />
              </Pressable>
            </View>
          ),
        }}
      />
      <stack.Screen name="ArtistsSc" component={AlbumSc}
      options={{headerShown:false}}        
      />
    </stack.Navigator>
  );
};

export default LibraryNavigation;

const styles = StyleSheet.create({});
