import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
    return (
        <LinearGradient style={{ flex: 1 }} colors={["#040306", "#131624"]}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ width: '100%', height: 200, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40 }}>
                        <Text style={{ color: '#fff', fontSize: 28, textAlign: 'center', fontWeight: 'bold' }}>
                            1 tháng dùng Premium miễn phí
                        </Text>
                    </View>
                    <View style={{ width: '100%', height: 170, paddingHorizontal: 20 }}>
                        <ScrollView horizontal={true}>
                            {arrPremium.map((item) => {
                                return (
                                    <View key={item.id} style={{ marginRight: 20 }}>
                                        <View style={{ width: 240, height: 140, flexDirection: 'row' }}>
                                            <View style={{ width: '50%', height: '100%', backgroundColor: 'gray', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10, padding: 5 }}>
                                                <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'bold' }}>MIỄN PHÍ</Text>
                                                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '80%' }}>
                                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{item.txt1}</Text>
                                                </View>
                                            </View>
                                            <LinearGradient colors={['#167046', '#49f5a5']} style={{ width: '50%', height: '100%', backgroundColor: '#5acc6d', alignItems: 'center', borderTopRightRadius: 10, borderBottomRightRadius: 10, padding: 5 }}>
                                                <Text style={{ color: '#fff', fontSize: 12 }}>PREMIUM</Text>
                                                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '80%' }}>
                                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{item.txt2}</Text>
                                                </View>
                                            </LinearGradient>
                                        </View>
                                    </View>
                                )
                            })
                            }
                        </ScrollView>
                    </View>
                    <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
                        <Text style={{ fontSize: 12, color: '#fff', textAlign: 'center' }}>Bạn không thể nâng cấp lên Premium trong ứng dụng này. Chúng tôi biết điều này thật bất tiện.</Text>
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <View style={{ width: '100%', height: 60, backgroundColor: 'gray', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', borderRadius: 10 }}>
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>Spotify Free</Text>
                            <Text style={{ color: '#fff' }}>GÓI HIỆN TẠI</Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                        <LinearGradient colors={['#167046', '#49f5a5']}
                            style={{ width: '100%', height: 250, padding: 20, justifyContent: 'space-around', borderRadius: 10, marginBottom: 20 }} >
                            <View style={{ borderRadius: 5, width: 140, height: 30, backgroundColor: '#c7cbd1', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>MIỄN PHÍ 1 THÁNG</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 24, color: '#fff', fontWeight: 'bold' }}>Premium Individual</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>
                                    1 tháng dùng Premium miễn phí - Nghe nhạc không quảng cáo - Tải xuống để nghe khi không cóa mạng - Phát nhạc theo thứ tự bất kỳ-
                                    Chất lượng âm thanh vượt trội - Hủy bất cứ lúc nào
                                </Text>
                            </View>
                        </LinearGradient>
                        <LinearGradient colors={['#ed9128', '#faa543']}
                            style={{ borderRadius: 5, width: '100%', height: 250, padding: 20, justifyContent: 'space-around', borderRadius: 10 }} >
                            <View style={{ width: 140, height: 30, backgroundColor: '#c7cbd1', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>MIỄN PHÍ 1 THÁNG</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 24, color: '#fff', fontWeight: 'bold' }}>Premium Student</Text>
                            </View>
                            <View>
                                <Text style={{ color: '#fff', textAlign: 'center' }}>
                                    Nghe nhạc không quảng cáo - Tải xuống để nghe khi không cóa mạng - Phát nhạc theo thứ tự bất kỳ-
                                    Chất lượng âm thanh vượt trội - Hủy bất cứ lúc nào
                                </Text>
                            </View>
                        </LinearGradient>
                    </View>
                    <View style={{ height: 50 }} />
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}
const arrPremium = [
    { txt1: 'Có quảng cáo', txt2: 'Nghe nhạc không quảng cáo' ,id:1},
    { txt1: 'Phát ở chế độ ngẫu nhiên', txt2: 'Phát theo thứ tự bất kỳ',id:2 },
    { txt1: 'Chất lượng ấm thanh cơ bản', txt2: 'Chất lượng ấm thanh vượt trội' ,id:3},
    { txt1: 'Chỉ nghe trực tuyến', txt2: 'Nghe nhạc không cần mạng',id:4 },

]