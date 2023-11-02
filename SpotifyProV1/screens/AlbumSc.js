import React,{useState} from "react";
import { View, Text, SafeAreaView, ScrollView, Image, Pressable, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import ItemMusic from "../components/ItemMusic";


function AlbumSc({ navigation,route }) {
    const { arrMusic,nameItem,imgItem } = route?.params;
    const [listMusic, setListMusic] = useState(arrMusic);
    console.log(listMusic)
    return (
        <LinearGradient style={{ flex: 1 }} colors={["#131624", "#040306"]}>
            <SafeAreaView>
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', width: '100%', height: 350 }}>
                            <View style={{ position: 'absolute', zIndex: 2, top: 20, left: 20 }}>
                                <Pressable onPress={() => {
                                    navigation.goBack();
                                }}>
                                    <AntDesign name="left" size={24} color="white" />
                                </Pressable>
                            </View>
                            <Image style={{ width: '100%', height: '100%', alignSelf: 'center' }} source={imgItem} />
                            <Text numberOfLines={1} style={{ width:350,color: '#fff', fontSize: 50, fontWeight: 'bold', position: 'absolute', zIndex: 2, bottom: 0, left: 20 }}>{nameItem}</Text>
                        </View>
                        <LinearGradient colors={["#131624", "#040306"]}>
                            <View style={{ width: '100%', height: 90, padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ width: '75%' }}>
                                    <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'gray' }}>999,9 N người nghe hàng tháng</Text>
                                    <View style={{ width: 120, height: 40, borderRadius: 20, borderWidth: 1, borderColor: '#fff', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#fff' }}>Đang theo dõi</Text>
                                    </View>
                                </View>
                                <View style={{ width: '25%',height:90, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                    <AntDesign name="retweet" size={24} color="green" />
                                    <AntDesign name="play" size={50} color="green" />
                                </View>
                            </View>
                            <View style={{ padding: 10 }}>
                                <Text style={{ color: '#fff' }}>Phổ biến</Text>
                                <ItemMusic arr={listMusic}/>
                            </View>
                        </LinearGradient>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}
export default AlbumSc;