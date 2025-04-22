import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Evelyn from "../screens/Evelyn";
import HomeEvelyn from "../screens/HomeEvelyn";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Evelyn" screenOptions={{ headerShown: false }}>
         <Stack.Screen name="Evelyn" component={Evelyn}/>
         <Stack.Screen name="HomeEvelyn" component={HomeEvelyn}/>
        </Stack.Navigator>
    );   
};