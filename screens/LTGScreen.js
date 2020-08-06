import React, {useState} from 'react';
import {Text, View, StatusBar, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  

export default function LTGScreen({ navigation }) {  
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View>
            <StatusBar barStyle="dark-content" />

            <Modal visible={modalVisible} animationType='slide'>
            <View>
            <Icon name="ios-close" size={25} onPress={() => setModalVisible(false)}/> 
            <Text>Hello from the modal</Text>
            </View>
        </Modal>

        <Icon name="ios-add" size={25} onPress={() => setModalVisible(true)}/> 

            <Text>LTG</Text>
        </View>
    );
}
