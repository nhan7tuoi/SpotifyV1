import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import SignUpSc_a from "../screens/SignUpSc_a";
import SignUpSc_b from "../screens/SignUpSc_b";
import SignUpSc_c from '../screens/SignUpSc_c';
import SignUpSc_d from '../screens/SignUpSc_d';

const Stack = createNativeStackNavigator();

const SignUpNavigation = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName="SignUpSc_a" screenOptions={{
            headerShown: true,
            headerStyle: {
                backgroundColor: "#040306",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        }}>
            <Stack.Screen
                name="SignUpSc_a"
                component={SignUpSc_a}
                options={
                    {
                        title: "Đăng ký",
                        headerLeft: () => (
                            <Pressable
                                style={{ marginLeft: 15 }}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <AntDesign name="left" size={24} color="white" />
                            </Pressable>
                        ),
                    }
                }
            />
            <Stack.Screen
                name="SignUpSc_b"
                component={SignUpSc_b}
                options={
                    {
                        title: "Đăng ký",
                        headerLeft: () => (
                            <Pressable
                                style={{ marginLeft: 15 }}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <AntDesign name="left" size={24} color="white" />
                            </Pressable>
                        ),
                    }
                }
            />
            <Stack.Screen
                name="SignUpSc_c"
                component={SignUpSc_c}
                options={
                    {
                        title: "Đăng ký",
                        headerLeft: () => (
                            <Pressable
                                style={{ marginLeft: 15 }}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <AntDesign name="left" size={24} color="white" />
                            </Pressable>
                        ),
                    }
                }
            />
            <Stack.Screen
                name="SignUpSc_d"
                component={SignUpSc_d}
                options={
                    {
                        title: "Đăng ký",
                        headerLeft: () => (
                            <Pressable
                                style={{ marginLeft: 15 }}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <AntDesign name="left" size={24} color="white" />
                            </Pressable>
                        ),
                    }
                }
            />
        </Stack.Navigator>
    );
}

export default SignUpNavigation;
