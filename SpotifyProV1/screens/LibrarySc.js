import {
  Image,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useCallback, useEffect, useRef, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

const LibrarySc = ({ navigation }) => {
  const [data,setData]= useState([]);
  useFocusEffect(
    useCallback(() => {
      fetch("https://6545ccbefe036a2fa954ce8f.mockapi.io/Library/1")
        .then((response) => response.json())
        .then((json) => {
          const promises = json.artistID.map((element) => {
            var url =
              "https://6545e7e8fe036a2fa954f228.mockapi.io/artists/" + element;
            return fetch(url).then((response) => response.json());
          });
          Promise.all(promises).then((results) => {
            setData(results);
            console.log(results);
          });
        }); 
    }, [])
  );

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
        <View
          style={{
            flexDirection: "row",
            width: "90%",
            alignItems: "center",
            height: "5%",
          }}
        >
          <Image
            source={require("../assets/icon/iconupdown.png")}
            style={{ width: 16, height: 16 }}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: "400",
              marginLeft: 10,
              color: "#fff",
            }}
          >
            Gần đây
          </Text>
        </View>
        <ScrollView style={{ width: "100%" }}>
          <View>
            {data.length != 0 ? (
              <FlatList
                data={data}
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
                        {item.role}
                      </Text>
                    </View>
                  </Pressable>
                )}
              />
            ) : null}
            <Pressable
              style={{
                width: "90%",
                flexDirection: "row",
                alignItems: "center",
                margin: 10,
              }}
            >
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: "#333",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 10,
                }}
              >
                <FontAwesome name="plus" size={24} color={"#fff"} />
              </View>
              <Text style={{ fontSize: 15, fontWeight: 400, color: "#fff" }}>
                Thêm nghệ sĩ
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: "90%",
                flexDirection: "row",
                alignItems: "center",
                margin: 10,
              }}
            >
              <View
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 5,
                  backgroundColor: "#333",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 10,
                }}
              >
                <FontAwesome name="plus" size={24} color={"#fff"} />
              </View>
              <Text style={{ fontSize: 15, fontWeight: 400, color: "#fff" }}>
                Thêm podcast và chương trình
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LibrarySc;

const styles = StyleSheet.create({});
