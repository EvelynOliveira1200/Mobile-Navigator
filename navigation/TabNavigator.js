import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { Image } from "react-native";

import EvelyNavigator from "../navigation/EvelynNavigator"
import OliveiraNavigator from "../navigation/OliveiraNavigator"

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Evelyn"
            screenOptions={{
                headerShown: true,
                headerTitle: () => (
                    <Image 
                        source={require('../assets/logo_img.png')} 
                        style={{ width: 150, height: 45 }} 
                    />
                ),
                headerStyle: {
                    backgroundColor: '#ffffff', 
                },
                headerTintColor: '#333', 
                tabBarStyle: {
                    backgroundColor: 'rgba(0, 0, 0, 0.9)', 
                    borderTopWidth: 0, 
                    height: 80,
                    marginHorizontal: '5%',
                    marginBottom: 30,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarActiveTintColor: '#ffffff',
                tabBarIconStyle: {
                    marginTop: 15
                },
            }}
        >
            <Tab.Screen 
                name="Evelyn" 
                component={EvelyNavigator} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen 
                name="Oliveira" 
                component={OliveiraNavigator} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="document" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}