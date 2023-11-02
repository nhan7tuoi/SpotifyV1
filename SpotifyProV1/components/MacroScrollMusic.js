import React from "react";
import { View, ScrollView, Text, Dimensions, Pressable, Image, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ProgressBar } from 'react-native-paper';

const { width: wWidth, height: wHeight } = Dimensions.get("window");

function MacroScrollMusic({ click }) {
    return (
        <LinearGradient style={{ flex: 1 }} colors={["#320026", "#29323c"]}>
            <SafeAreaView>
                <ScrollView>
                    <View>
                        <View style={{ width: wWidth, height: 90, flexDirection: 'row', justifyContent: 'space-between', padding: 10, paddingTop: 20 }}>
                            <Pressable onPress={() => {
                                click();
                            }}>
                                <AntDesign name="down" size={24} color="white" />
                            </Pressable>
                            <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 18 }}>Xin Đừng Nhấc Máy</Text>
                            <Pressable>
                                <MaterialCommunityIcons name="dots-horizontal" size={24} color="white" />
                            </Pressable>
                        </View>
                        <View style={{ justifyContent: 'center', width: wWidth, alignItems: 'center' }}>
                            <Image style={{ width: wWidth - 40, height: wHeight * 0.4, borderRadius: 10 }} source={require('../assets/img/xindungnhacmay.jpg')} />
                        </View>
                        <View style={{ padding: 20 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', paddingBottom: 5 }}>Xin Đừng Nhấc Máy</Text>
                                    <Text style={{ color: '#ccc', fontSize: 16, fontWeight: '500' }}>B Ray, Han Sara, Masew</Text>
                                </View>
                                <View style={{ justifyContent: 'center' }}>
                                    <AntDesign name="checkcircle" size={32} color="green" />
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 15 }}>
                            <ProgressBar progress={0.5} color={'#fff'} style={{ borderRadius: 20, backgroundColor: '#29323c' }} />
                        </View>
                        <View style={{ flexDirection: 'row', padding: 15, width: wWidth, justifyContent: 'space-between', marginTop: -5 }}>
                            <Text style={{ color: '#fff' }}>1:00</Text>
                            <Text style={{ color: '#fff' }}>2:00</Text>
                        </View>
                        <View style={{ padding: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Pressable>
                                <AntDesign name="retweet" size={32} color="white" />
                            </Pressable>
                            <Pressable>
                                <AntDesign name="stepbackward" size={32} color="white" />
                            </Pressable>
                            <Pressable>
                                <AntDesign name="play" size={60} color="white" />
                            </Pressable>
                            <Pressable>
                                <AntDesign name="stepforward" size={32} color="white" />
                            </Pressable>
                            <Pressable>
                                <AntDesign name="minuscircleo" size={32} color="white" />
                            </Pressable>
                        </View>
                        <View style={{ padding: 15, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: wWidth - 30, height: 350, backgroundColor: 'gray', borderRadius: 20, padding: 10 }}>
                                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Lời bài hát</Text>
                                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '70%' }}>
                                    <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
                                        Không thể tải lời bài hát vì bạn chưa nâng cấp tài khoản Premium
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{height:100}}/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}
export default MacroScrollMusic;