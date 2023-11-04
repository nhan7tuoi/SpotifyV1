import { Image, StyleSheet, Text, View, SafeAreaView, FlatList, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";

const LibrarySc = () => {
  const [library, setLibrary] = useState([]);
  useEffect(() => {
    fetch("https://6545ccbefe036a2fa954ce8f.mockapi.io/Library")
      .then((response) => response.json())
      .then((json) => {
        json.forEach(element => {
            const temp = [];
             var url =
               "https://6545e7e8fe036a2fa954f228.mockapi.io/artists/" +
                element.artistID;
             fetch(url)
               .then((response) => response.json())
               .then((json) => {
                temp.push(json)
                setLibrary(temp)
            });
        });
      });
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
        <View style={{flexDirection:'row',width:'90%', alignItems:'center'}}>
          <Image
            source={require("../assets/icon/iconupdown.png")}
            style={{ width: 16, height: 16 }}
          />
          <Text style={{fontSize:14,fontWeight:'400',marginLeft:10,color:"#fff"}}>Gần đây</Text>
        </View>
        <View>
            <FlatList data={library}
                renderItem={({item})=>(
                    <Pressable>
                    <Image source={{uri:item.image}} style={{width:70,height:70,borderRadius:35}}/>
                        <Text style={{color:"#fff"}}>{item.name}</Text>
                    </Pressable>
                )}
            />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LibrarySc;

const styles = StyleSheet.create({});

