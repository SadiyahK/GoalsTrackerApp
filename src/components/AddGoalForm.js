import React from 'react';
import { StyleSheet, View, Button, TextInput, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';


const goalSchema = yup.object({
    title: yup.string()
    .required()
    .min(5),
    body: yup.string()
    .required()
    .min(8),
    deadline: yup.string()
    .required()
    //TODO: Add more validation for the date
})

export default function AddGoalForm( { addGoal } ){

    return(
        <View>
            <Formik 
                initialValues={{ title:'', body:'', deadline:''}}
                validationSchema={goalSchema}
                onSubmit={(values, actions) => { 
                    actions.resetForm();
                    addGoal(values)
                }}
            >
                {props => (
                    <View>
                        <TextInput
                            style={styles.inputBox}
                            placeholder='Goal Title'
                            onChangeText={props.handleChange('title')}
                            onBlur={props.handleBlur('title')}
                            value={props.values.title}
                        />
                        <Text> { props.touched.title && props.errors.title } </Text>

                        <TextInput
                            style={styles.inputBox}
                            placeholder='Goal Description'
                            onChangeText={props.handleChange('body')}
                            onBlur={props.handleBlur('body')}
                            value={props.values.body}
                        />
                        <Text> { props.touched.body && props.errors.body } </Text>

                        <Button title='Add Milestone' />
                        
                        <TextInput
                            style={styles.inputBox}
                            placeholder='Goal Deadline'
                            onChangeText={props.handleChange('deadline')}
                            value={props.values.deadline}
                            onBlur={props.handleBlur('deadline')}
                            keyboardType='numeric'
                        />
                        <Text> { props.touched.deadline && props.errors.deadline } </Text>

                        {/* TODO: Format the deadline properly */}

                        <Button title='Add Goal' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    inputBox:{
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6
    }
})