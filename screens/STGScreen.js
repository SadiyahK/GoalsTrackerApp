import React from 'react';
import {Text, View, StatusBar} from 'react-native';

export default class STGScreen extends React.Component{
    render(){
        return(
            <View>
                <StatusBar barStyle="dark-content" />
                <Text>STG</Text>
            </View>
        );
    }
}

