import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  SectionList,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const MusicSearch = ({ navigation, route }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, []);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://655f4f0c879575426b45130c.mockapi.io/topic/${route.params.id}/data`
    )
      .then((response) => response.json())
      .then((json) => setData(json[0].data));
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
            <SectionList
              sections={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => navigation.navigate("ArtistsSc", { item })}
                  style={{
                    width: "90%",
                    flexDirection: "row",
                    alignItems: "center",
                    margin: 10,
                  }}
                >
                  <Image
                    source={{ uri: item.img }}
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 35,
                      margin: 10,
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 15,
                        fontWeight: "400",
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 14,
                        fontWeight: "400",
                        opacity: 0.5,
                      }}
                    >
                      {item.view} views
                    </Text>
                  </View>
                </Pressable>
              )}
              stickySectionHeadersEnabled={false}
              renderSectionHeader={({ section: { title } }) => (
                <View style={{ padding: 10 }}>
                  <Text
                    style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}
                  >
                    {title}
                  </Text>
                </View>
              )}
            />
            <View style={{ height: 120 }} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default MusicSearch;
