import React from 'react';
import {Text, View, StyleSheet, Image, Button} from 'react-native';
import CommonStyles from '../styles/CommonStyles'

const ToolBar = props => {

    return(
        <View style={styles.ToolBar}>
            <Image source={require('../images/notifIcon.png')} style = {styles.icons}/> 
            <Image source={require('../images/homeIcon.png')} style = {styles.icons} /> 
            <Image source={require('../images/settingsIcon.png')} style = {styles.icons} /> 
        </View>
    );
}

const styles = StyleSheet.create({
    ToolBar: {
        backgroundColor: '#8AC0DE',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // position: 'absolute',
        // bottom: 0
    },
    icons: {
        width: 35,
        height: 35,
        padding: 20,
        marginHorizontal: 50
    }
})

export default ToolBar;
