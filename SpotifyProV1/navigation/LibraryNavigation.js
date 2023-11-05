import { StyleSheet, Text, View, Pressable } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import LibrarySc from "../screens/LibrarySc";
import ArtistsSc from "../screens/ArtistsSc";

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
                width: "35%",
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
      <stack.Screen name="ArtistsSc" component={ArtistsSc}
        options={({navigation})=>({
          headerTitle:"",
          headerStyle:{backgroundColor:"black"},
          headerLeft:()=>(
            <Pressable onPress={()=>navigation.goBack()} style={{marginLeft:20}}>
              <FontAwesome name="chevron-left" size={24} color={"#fff"}/>
            </Pressable>
          )
        })}
      />
    </stack.Navigator>
  );
};

export default LibraryNavigation;

const styles = StyleSheet.create({});
