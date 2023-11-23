import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchSc from "../screens/SearchSc";
import { FontAwesome } from "@expo/vector-icons";
import SearchSca from "../screens/SearchSca";
import AlbumSc from "../screens/AlbumSc";
import Podcastsa from "../screens/Podcastsa";
import Podcastsb from "../screens/Podcastsb";
import MusicSearch from "../screens/MusicSearch";
import Podcastsc from "../screens/Podcastsc";

const stack = createNativeStackNavigator();
const SearchNavigation = () => {
  return (
    <stack.Navigator
      initialRouteName="SearchSc"
      screenOptions={{ headerStyle: { backgroundColor: "black" } }}
    >
      <stack.Screen
        name="SearchSc"
        component={SearchSc}
        options={{
          headerTitle: "Tìm kiếm",
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
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Pressable>
                <FontAwesome name="camera" size={24} color={"#fff"} />
              </Pressable>
            </View>
          ),
        }}
      />
      <stack.Screen
        name="SearchSca"
        component={SearchSca}
        options={{ headerShown: false }}
      />
      <stack.Screen
        name="Podcastsa"
        component={Podcastsa}
        options={({ navigation }) => ({
          headerTitle: "Podcasts",
          headerTitleStyle: { fontWeight: "700", color: "#fff" },
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <FontAwesome name="angle-left" size={24} color={"#fff"} />
            </Pressable>
          ),
        })}
      />
      <stack.Screen
        name="Podcastsb"
        component={Podcastsb}
        options={({ navigation }) => ({
          headerTitleStyle: { fontWeight: "700", color: "#fff" },
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <FontAwesome name="angle-left" size={24} color={"#fff"} />
            </Pressable>
          ),
        })}
      />
      <stack.Screen
        name="Podcastsc"
        component={Podcastsc}
        options={({ navigation }) => ({
          headerTitle:"",
          headerTitleStyle: { fontWeight: "700", color: "#fff" },
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <FontAwesome name="angle-left" size={24} color={"#fff"} />
            </Pressable>
          ),
        })}
      />
      <stack.Screen
        name="MusicSearch"
        component={MusicSearch}
        options={({ navigation }) => ({
          headerTitleStyle: { fontWeight: "700", color: "#fff" },
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <FontAwesome name="angle-left" size={24} color={"#fff"} />
            </Pressable>
          ),
        })}
      />
      <stack.Screen
        name="ArtistsSc"
        component={AlbumSc}
        options={{ headerShown: false }}
      />
    </stack.Navigator>
  );
};

export default SearchNavigation;

const styles = StyleSheet.create({});
