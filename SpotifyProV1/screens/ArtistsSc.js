import {
    FlatList,
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const ArtistsSc = ({ navigation, route }) => {
  const { item } = route?.params;
  const [tracks,settracks] = useState([]);
  return (
    <LinearGradient
      style={{ flex: 1, height: "100%" }}
      colors={["#040306", "#131624"]}
    >
      <ScrollView style={{ width: "100%", height: "100%" }}>
        <View style={{ justifyContent: "space-around", alignItems: "center" }}>
          <View style={{ width: "100%", height: 300 }}>
            <ImageBackground
              source={{ uri: item.image }}
              resizeMode="cover"
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 40, fontWeight: 700, color: "#fff" }}>
                {item.name}
              </Text>
            </ImageBackground>
          </View>
          <View
            style={{ width: "90%", height: 80, justifyContent: "space-around" }}
          >
            <Text style={{ color: "#fff", opacity: 0.7, fontSize: 13 }}>
              {item.view} người nghe hàng tháng
            </Text>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: "40%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Pressable
                  style={{
                    width: 100,
                    height: 30,
                    borderWidth: 2,
                    borderColor: "#fff",
                    borderRadius: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{ color: "#fff", fontSize: 13, fontWeight: "600" }}
                  >
                    Đang theo dõi
                  </Text>
                </Pressable>
                <Pressable>
                  <Image
                    source={require("../assets/icon/more.png")}
                    style={{ width: 24, height: 24 }}
                    tintColor={"#fff"}
                  />
                </Pressable>
              </View>
              <Pressable
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <FontAwesome name="play-circle" size={40} color={"#1DB954"} />
              </Pressable>
            </View>
          </View>
          <View style={{ width: "90%" }}>
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "700" }}>
              Phổ biến
            </Text>
          </View>
          <View style={{ width: "90%" }}>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default ArtistsSc;

const styles = StyleSheet.create({});
