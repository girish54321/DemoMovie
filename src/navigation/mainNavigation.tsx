import React, { FC } from 'react';
import {
    NavigationContainer,
} from '@react-navigation/native'
import HomeScreenStack from './HomeStack/HomeStack';
import { setTopLevelNavigator } from './NavigationService';
import { AppBottomTab } from './AppNavigation';

export const Navigation: FC = () => {
    return (
        <NavigationContainer
            ref={(navigatorRef: any) => {
                setTopLevelNavigator(navigatorRef);
            }}
        >
            <AppBottomTab />
        </NavigationContainer>
    );
}