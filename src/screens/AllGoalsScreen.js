import React, {useState} from 'react';
import {Text, View, StatusBar, Modal, Keyboard, TouchableOpacity, TouchableWithoutFeedback, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  

import AddGoalForm from '../components/AddGoalForm';
import Card from '../components/Card';

export default function GoalsScreen({ navigation }) {  
    const [modalVisible, setModalVisible] = useState(false);
    const [goals, setGoals] = useState([
        {title: 'drink milk', body: 'Drink 1 glass of milk today', deadline:'02/09/2020', key:'1'}, //DOES DEADLINE HAVE TO BE A STRING?
    ]);

    const addGoal = (goal) => {
        goal.key = Math.random().toString();
        setGoals((currentGoals) => {
            return [goal, ...currentGoals]
        });
        setModalVisible(false);
    }

    return(
        <View>
            <StatusBar barStyle="dark-content" />

            <Modal visible={modalVisible} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                    <Icon name="ios-close" size={25} onPress={() => setModalVisible(false)}/> 
                    <AddGoalForm  addGoal={ addGoal }/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <Icon name="ios-add" size={25} onPress={() => setModalVisible(true)}/> 
            
            <FlatList data={goals} renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('GoalScreen', item)}>
                    <Card>
                        <Text> { item.title }</Text>
                    </Card>
                </TouchableOpacity>
            )}/>
        </View>
    );
}

