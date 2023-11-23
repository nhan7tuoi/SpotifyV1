import React from 'react';
import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const SignUpSc_c = ({navigation}) => {
    return (
        <LinearGradient style={{ flex: 1 }} colors={["#040306", "#131624"]}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ padding: 20, width: '100%' }}>
                   <Text style={{color:'#fff',fontSize:20,fontWeight:'bold',marginBottom:10}}>What’s your gender?</Text>
                   <TextInput  style={{width:'100%',height:50,backgroundColor:'#474444',marginBottom:10,fontSize:20}}/>
                  
                </View>
                <View style={{justifyContent:'center',alignItems:'center',width:'100%'}}>
                    <Pressable onPress={()=>{navigation.navigate('SignUpSc_d')}}
                    style={{backgroundColor:'#474444',height:50,width:100,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>Next</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

export default SignUpSc_c;
