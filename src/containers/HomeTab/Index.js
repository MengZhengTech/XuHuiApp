/**
 * Created by Huai on 17/11/6.
 */

'use strict';
import React, { Component } from 'react';
import { View, Text, } from 'react-native';

class Home extends Component{
    static navigationOptions = ({navigation}) => {
        const {setParams} = navigation;
        return ({
            headerTitle: (
                <Text>biaoti</Text>
            )
        });
    }
    constructor(props){
        super(props)
        this.state = {};
    }

    render(){
        return (
            <View><Text>index</Text></View>
        );
    }
}

export default Home;
