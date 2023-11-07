import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SearchSc from '../screens/SearchSc';
import { FontAwesome } from "@expo/vector-icons";
import SearchSca from '../screens/SearchSca';
import AlbumSc from '../screens/AlbumSc';

const stack = createNativeStackNavigator();
const SearchNavigation = () => {
  return (
    <stack.Navigator initialRouteName='SearchSc'>
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
      <stack.Screen name='SearchSca' component={SearchSca}
        options={{headerShown:false}}
      />
      <stack.Screen name='ArtistsSc' component={AlbumSc} options={{headerShown:false}}/>
    </stack.Navigator>
  );
}

export default SearchNavigation

const styles = StyleSheet.create({})