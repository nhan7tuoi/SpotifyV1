import { useEffect, useState } from "react";
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const randomColor = () => {
  while (true) {
    const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
    if (color !== "#ffffff") {
      return color;
    }
  }
};
export default function SearchSc({navigation}) {
  const [listTopic, setListTopic] = useState([]);
  useEffect(() => {
    fetch("https://655f4f0c879575426b45130c.mockapi.io/topic")
      .then((response) => response.json())
      .then((json) => setListTopic(json));
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
        <Pressable
        onPress={()=>navigation.navigate("SearchSca")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            width: "90%",
            height: 45,
            backgroundColor: "#fff",
            borderRadius: 5,
            marginBottom: "2%",
            marginTop: "5%",
          }}
        >
          <FontAwesome name="search" size={24} />
          <Text style={{ fontSize: 15, fontWeight: "400", marginLeft: 10 }}>
            Bạn muốn nghe gì?
          </Text>
        </Pressable>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "700",
            color: "#fff",
            width: "90%",
            height: "5%",
          }}
        >
          Duyệt tìm tất cả
        </Text>
        <ScrollView style={{ width: "100%"}}>
          <View>
            <FlatList
              style={{ width: "100%" }}
              data={listTopic}
              numColumns={2}
              renderItem={({ item }) => (
                <Pressable
                onPress={()=>{
                  if(item.title === 'Podcasts'){
                    navigation.navigate("Podcastsa");
                  }
                  else {
                    navigation.navigate("MusicSearch",{id: item.id,title:item.title});
                  }
                }}
                  style={{
                    width: "45%",
                    height: 105,
                    flexDirection: "row",
                    backgroundColor: randomColor(),
                    padding: 10,
                    margin: "2%",
                    borderRadius: 10,
                    justifyContent: "space-between",
                    alignItems: "center",
                    overflow: "hidden", // Ẩn phần tràn ra ngoài
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 16,
                      fontWeight: "400",
                      width: 80,
                    }}
                  >
                    {item.title}
                  </Text>
                  <View
                    style={{
                      width: "50%",
                      height: "90%",
                      borderRadius: 10,
                      overflow: "hidden", // Ẩn phần tràn ra ngoài
                      transform: [{ rotate: "30deg" }], // Xoay 45 độ
                      right: -25,
                      bottom: -15,
                    }}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </View>
                </Pressable>
              )}
            />
            <View style={{ height: 120 }} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
