import { useEffect, useState } from "react";
import { FlatList, Image, Pressable, SafeAreaView, Text, View } from "react-native";
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
export default function SearchSc() {
  const [listTopic, setListTopic] = useState([]);
  useEffect(() => {
    fetch("https://6545ccbefe036a2fa954ce8f.mockapi.io/Topic")
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
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              width: "90%",
              height: 45,
              backgroundColor: "#fff",
              borderRadius: 5,
              marginBottom:'2%'
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
        <FlatList
          style={{ width: "100%" }}
          data={listTopic}
          numColumns={2}
          renderItem={({ item }) => (
            <Pressable
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
              }}
            >
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: "400" }}>
                {item.title}
              </Text>
              <Image
                source={{ uri: item.image }}
                style={{ width: "40%", height: "70%", borderRadius: 10 }}
              />
            </Pressable>
          )}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}
