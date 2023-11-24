import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const Podcastsb = ({navigation,route}) => {
    useEffect(() => {
      navigation.setOptions({
        headerTitle: route.params.item.title,
      });
    }, []);
    const [listPodcast, setListPodcast] = useState([]);
    useEffect(() => {
      fetch(`https://65572970bd4bcef8b61227ce.mockapi.io/topics/${route.params.item.id}/podcasts`)
        .then((response) => response.json())
        .then((json) => setListPodcast(json));
    }, []);
  return (
    <LinearGradient
      style={{ flex: 1, height: "100%" }}
      colors={["#040306", "#131624"]}
    >
      <SafeAreaView
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          height: "100%",
        }}
      >
        <ScrollView style={{ width: "100%" }}>
          <View>
            <FlatList
              data={listPodcast}
              numColumns={2}
              renderItem={({ item }) => (
                <Pressable
                onPress={()=> navigation.navigate("Podcastsc",{item})}
                  style={{
                    width: "45%",
                    height: 200,
                    padding: 10,
                    margin: "2%",
                    borderRadius: 10,
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View style={{width:"100%",height:"80%"}}>
                    <Image
                      source={{ uri: item.img }}
                      style={{ width: "100%", height: "100%" }}
                      resizeMode="contain"
                    />
                  </View>
                  <Text style={{fontWeight:'500', color:'#fff',textAlign:'center'}}>{item.name}</Text>
                  <Text style={{color:"#fff",opacity:0.6,textAlign:'center'}}>{item.author}</Text>
                </Pressable>
              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Podcastsb;
