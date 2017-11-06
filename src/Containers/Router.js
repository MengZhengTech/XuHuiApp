/**
 * Created by Huai on 17/11/6.
 */

'use strict';
import React, { Component } from 'react';
import { StackNavigator, TabNavigator, } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import screen from '../utils/screen';
import color from '../utils/color';

const { tabIconSize, headerHeight, bottomTabHeight, } = screen;

const BottomTab = TabNavigator({
    Home: {
        screen: Home,
    }
});
