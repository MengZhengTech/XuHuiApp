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

import Home from './HomeTab/Index';
import Flow from './FlowTab/Index';
import Project from './ProjectTab/Index';
import Setting from './SettingTab/Index';

const BottomTab = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions:{
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor,focused}) => (
                <Ionicons
                    name={focused? 'ios-home':'ios-home-outline'}
                    selectedIconName='ios-home' size={tabIconSize}
                    style={{color:tintColor}}
                />
            ),
        }
    },
    Flow:{
        screen: Flow,
        navigationOptions:{
            tabBarLabel: '审批中心',
            tabBarIcon: ({tintColor,focused}) => (
                <Ionicons
                    name={focused? 'ios-paper':'ios-paper-outline'}
                    selectedIconName='ios-paper' size={tabIconSize}
                    style={{color:tintColor}}
                />
            ),
        }
    },
    Project:{
        screen: Project,
        navigationOptions:{
            tabBarLabel: '项目',
            tabBarIcon: ({tintColor,focused}) => (
                <Ionicons
                    name={focused? 'ios-apps':'ios-apps-outline'}
                    selectedIconName='ios-apps' size={tabIconSize}
                    style={{color:tintColor}}
                />
            ),
        }
    },
    Setting:{
        screen: Setting,
        navigationOptions:{
            tabBarLabel: '设置',
            tabBarIcon: ({tintColor,focused}) => (
                <Ionicons
                    name={focused? 'ios-settings':'ios-settings-outline'}
                    selectedIconName='ios-settings' size={tabIconSize}
                    style={{color:tintColor}}
                />
            ),
        }
    }
},{
    animationEnabled: false, //切换页面时 不显示动画
    tabBarPosition: 'bottom', //显示在底端,android 默认显示在顶端
    swipeEnabled: false, //禁止左右滑动
    backBehavior: 'none', //按back 键是否跳转到第一个Tab none 为不跳转
    tabBarOptions: {
        activeTintColor: color.activeColor, //文字和图片选中颜色
        inactiveTintColor: color.inactiveColor,//文字和图片默认颜色
        showIcon: true, //android 默认不显示icon 需要设置为true
        indicatorStyle: { height: 0 }, //android 中TabBar 下面会显示一条线,高度为0 后就不显示
        style:{
            backgroundColor: color.bottomTabBarBgColor, //TabBar 颜色
            height: screen.bottomTabHeight,
            borderTopWidth: 1,
            borderColor: color.borderColor,
        },
        labelStyle: {
            fontSize: 12,
            paddingBottom: 6,
        }
    }
});

const XHRouter = StackNavigator({
    Home: { screen: BottomTab },

},{
    initialRouteName: 'Home', // 初始化的页面一般是登陆页面
    mode: 'modal', //页面切换模式 card, modal
    headerMode: 'screen', //导航栏显示模式, screen 渐变透明, float: 无透明效果 none, 隐藏导航栏
});

export default XHRouter;