import React from 'react';
import {Text, View, StatusBar} from 'react-native';

export default class LGTScreen extends React.Component{
    render(){
        return(
            <View>
                <StatusBar barStyle="dark-content" />
                <Text>LTG</Text>
            </View>
        );
    }
}
