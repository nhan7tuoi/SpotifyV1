import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
const SearchSca = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [dataSearch, setDataSearch] = useState([]);
  const [state, setState] = useState(1);
  return (
    <LinearGradient
      style={{ flex: 1, height: "100%" }}
      colors={["#040306", "#131624"]}
    >
      <SafeAreaView
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "5%",
            width: "100%",
            backgroundColor: "#333",
          }}
        >
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ position: "absolute", left: 20 }}
          >
            <FontAwesome name="angle-left" size={24} color={"#fff"} />
          </Pressable>
          <TextInput
            style={{
              width: "100%",
              paddingLeft: 40,
              height: "100%",
              fontSize: 16,
              color: "#fff",
            }}
            placeholder="Bạn muốn nghe gì?"
            placeholderTextColor={"lightgrey"}
            autoFocus={true}
            onChangeText={setSearchText}
            onSubmitEditing={() => {
              const lSearchText = searchText.toLowerCase();
              fetch(
                `https://6545e7e8fe036a2fa954f228.mockapi.io/artists?name=${lSearchText}`
              )
                .then((response) => response.json())
                .then((data) => {
                  setDataSearch(data);
                  setState(2);
                })
                .catch((error) => {
                  console.error("Error fetching data:", error);
                });
            }}
          />
        </View>
        {state == 1 ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "95%",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>
              Phát nội dung bạn thích
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "400",
                color: "#fff",
                opacity: 0.6,
                width: "70%",
                textAlign: "center",
              }}
            >
              Tìm kiếm nghệ sĩ, bài hát, podcasts và nhiều nội dung khác
            </Text>
          </View>
        ) : (
          <View
            style={{
              width: "100%",
              height: "95%",
              alignItems:'center',
              justifyContent:'center'
            }}
          >
            {dataSearch.length != 0 ? (
              <FlatList
                style={{ width: "100%" }}
                data={dataSearch}
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
                        Nghệ sĩ
                      </Text>
                    </View>
                  </Pressable>
                )}
              />
            ) : (
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  color: "#fff",
                  width: "70%",
                  textAlign: "center",
                }}
              >
                Chúng tôi không tìm thấy nội dung bạn muốn
              </Text>
            )}
          </View>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SearchSca;

const styles = StyleSheet.create({});
