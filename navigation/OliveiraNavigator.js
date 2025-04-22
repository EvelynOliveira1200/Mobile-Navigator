import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Oliveira from "../screens/Oliveira";
import HomeOliveira from "../screens/HomeOliveira";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Oliveira" screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Oliveira" component={Oliveira}/>
         <Stack.Screen name="HomeOliveira" component={HomeOliveira}/>
        </Stack.Navigator>
    );   
};