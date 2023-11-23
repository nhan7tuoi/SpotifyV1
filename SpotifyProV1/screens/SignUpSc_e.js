import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, TextInput, Pressable, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const SignUpSc_e = ({navigation}) => {
    const [data, setData] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    const handlePress = (index) => {
      // Kiểm tra xem đã chọn trước đó chưa
      if (selectedItems.includes(index)) {
        // Nếu đã chọn, loại bỏ khỏi mảng selectedItems
        setSelectedItems(selectedItems.filter((item) => item !== index));
      } else {
        // Nếu chưa chọn, thêm vào mảng selectedItems
        setSelectedItems([...selectedItems, index]);
      }
    };
    useEffect(() => {
        fetch('https://650663f03a38daf4803e724d.mockapi.io/phamducnhan/Sign_Up')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
    }, []);
    return (
        <LinearGradient style={{ flex: 1 }} colors={["#040306", "#131624"]}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ padding: 20, width: '100%', height: "15%" }}>
                    <TextInput style={{ width: '100%', height: 50, backgroundColor: '#fff', marginBottom: 10, fontSize: 20 }} placeholder='Tìm kiếm...' />
                </View>
                <View style={{ height: '75%', width: '100%', padding: 20 }}>
                    <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        {
                            data.map((item, index) => (
                                <Pressable key={index} style={{
                                    width: '30%', justifyContent: 'center', alignItems: 'center', marginVertical: 10,
                                    backgroundColor: selectedItems.includes(index) ? '#1ed760' : 'transparent',
                                }}
                                onPress={()=>{
                                    handlePress(index);
                                }}>
                                    <Image source={{ uri: item.img }} style={{ width: 100, height: 100, borderRadius: 50 }} />

                                    <Text style={{ color: '#fff', fontWeight: 'bold',fontSize:12 }}>{item.name}</Text>
                                </Pressable>
                            ))
                        }
                    </ScrollView>
                </View>
                <View style={{ height: '10%', width: '100%', padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable onPress={()=>{
                        navigation.navigate('Login');
                    }}
                    style={{ width: 120, height: 50, backgroundColor: '#474444', justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 20 }}>Done</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

export default SignUpSc_e;
