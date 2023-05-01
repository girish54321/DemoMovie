import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Route } from '../constants/Route';
import HomeScreenStack from './HomeStack/HomeStack';
import FavScreenStack from './FavraiteStack/FavraiteStack';

const Tab = createBottomTabNavigator();

export const AppBottomTab = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name={Route.APPSTACK} component={HomeScreenStack}
                options={{
                    tabBarLabel: "Home",
                    // tabBarIcon: ({ color, size }) => {
                    //     return <Ionicons name="home" size={size} color={color} />;
                    // },
                }}
            />
            <Tab.Screen name={Route.FAV_STACK} component={FavScreenStack}
                options={{
                    tabBarLabel: "Fav",
                    // tabBarIcon: ({ color, size }) => {
                    //     return <Ionicons name="home" size={size} color={color} />;
                    // },
                }}

            />
            <Tab.Screen name={Route.SETTINGS} component={HomeScreenStack}
                options={{
                    tabBarLabel: "Home",
                    // tabBarIcon: ({ color, size }) => {
                    //     return <Ionicons name="home" size={size} color={color} />;
                    // },
                }}

            />
        </Tab.Navigator>
    )
}