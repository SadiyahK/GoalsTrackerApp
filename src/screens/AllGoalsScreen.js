import React, {useState} from 'react';
import {Text, View, StatusBar, Modal, Keyboard, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  
import AddGoalForm from '../components/AddGoalForm';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function GoalsScreen({ navigation }) {  
    const [modalVisible, setModalVisible] = useState(false);
   const [goals, setGoals] = useState([]);

    // const addGoal = (goal) =>{
    //     goal.key = Math.random(); //DOES THE KEY HAVE TO BE A STRING?
    //     setGoals((currentGoals) =>{
    //         return [goal, ...currentGoals]
    //     })
    //     setModalVisible(false);
    // }

    return(
        <View>
            <StatusBar barStyle="dark-content" />

            <Modal visible={modalVisible} animationType='slide'>
                {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
                    <View>
                    <Icon name="ios-close" size={25} onPress={() => setModalVisible(false)}/> 
                    <AddGoalForm  />
                    </View>
                {/* </TouchableWithoutFeedback> */}
            </Modal>

            <Icon name="ios-add" size={25} onPress={() => setModalVisible(true)}/> 
            <Text>STG</Text>
        </View>
    );
}

