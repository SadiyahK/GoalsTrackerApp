import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CommonStyles from './../styles/CommonStyles'

const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={CommonStyles.textTitle}>Goals</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 40,
        backgroundColor: '#8AC0DE',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Header;