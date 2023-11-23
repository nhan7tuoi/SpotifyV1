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

const Podcastsc = ({ route }) => {
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
        <ScrollView style={{ width: "90%" }}>
          <View
            style={{
              width: "100%",
              height: 150,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: route.params.item.image }}
              style={{ height: "100%", width: "40%", borderRadius:10}}
            />
            <View
              style={{
                height: "100%",
                width: "55%",
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "700", color: "#fff" }}>
                {route.params.item.title}
              </Text>
              <Text style={{ color: "#fff" }}>{route.params.item.author}</Text>
            </View>
          </View>
          {/* <View>
            {follow ? (
              <Pressable
                onPress={() => {
                  fetch(
                    "https://6545ccbefe036a2fa954ce8f.mockapi.io/Library/1",
                    {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        podcastID:[],
                      }),
                    }
                  ).then((response) => {
                    if (response.ok) {
                      fetch(
                        "https://6545e7e8fe036a2fa954f228.mockapi.io/artists/" +
                          idArtists,
                        {
                          method: "PUT",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            follow: !follow,
                          }),
                        }
                      ).then((response) => {
                        if (response.ok) {
                          console.log("ok");
                          setFollow(!follow);
                        }
                      });
                    }
                  });
                }}
                style={{
                  width: 120,
                  height: 40,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  Đang theo dõi
                </Text>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  fetch(
                    "https://6545ccbefe036a2fa954ce8f.mockapi.io/Library/1",
                    {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        PodcastID: [...arrArtists, idArtists],
                      }),
                    }
                  ).then((response) => {
                    if (response.ok) {
                      fetch(
                        "https://6545e7e8fe036a2fa954f228.mockapi.io/artists/" +
                          idArtists,
                        {
                          method: "PUT",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            follow: !follow,
                          }),
                        }
                      ).then((response) => {
                        if (response.ok) {
                          console.log("ok");
                          setFollow(!follow);
                        }
                      });
                    }
                  });
                }}
                style={{
                  width: 120,
                  height: 40,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    color: "#fff",
                  }}
                >
                  Theo dõi
                </Text>
              </Pressable>
            )}
          </View> */}
          <View>
            <FlatList
              data={route.params.item.data}
              renderItem={({ item }) => (
                <View
                  style={{
                    width: "100%",
                    height: 150,
                    justifyContent: "space-around",
                    marginBottom: 10,
                    borderBottomWidth:1,
                    borderBottomColor:'grey'
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      width: "100%",
                      height: "40%",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={{ height: "100%", width: "25%"}}
                      resizeMode="contain"
                    />
                    <Text
                      style={{ fontSize: 18, fontWeight: "500", color: "#fff" }}
                    >
                      {item.title}
                    </Text>
                  </View>
                  <Text style={{ color: "#fff", opacity: 0.6 }}>
                    {item.content}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        width: "50%",
                        justifyContent: "space-around",
                      }}
                    >
                      <FontAwesome
                        name="plus-circle"
                        size={20}
                        color={"#fff"}
                      />
                      <FontAwesome
                        name="arrow-circle-o-down"
                        size={20}
                        color={"#fff"}
                      />
                      <FontAwesome name="share-alt" size={20} color={"#fff"} />
                    </View>
                    <FontAwesome name="play-circle" size={24} color={"#fff"} />
                  </View>
                </View>
              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Podcastsc;
