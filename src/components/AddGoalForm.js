import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { Formik } from 'formik';

export default function AddGoalForm(){

    return(
        <View>
            <Formik 
                initialValues={{ title:'', body:'', deadline:''}}
                onSubmit={(values) => { console.log(values)}}
            >
                {formikProps => (
                    <View>
                        <TextInput
                            style={styles.inputBox}
                            placeholder='Goal Title'
                            onChangeText={formikProps.handleChange('title')}
                            value={formikProps.values.title}
                        />

                        <TextInput
                            style={styles.inputBox}
                            placeholder='Goal Description'
                            onChangeText={formikProps.handleChange('body')}
                            value={formikProps.values.body}
                        />

                        <Button title='Add Milestone' />
                        
                        <TextInput
                            style={styles.inputBox}
                            placeholder='Goal Deadline'
                            onChangeText={formikProps.handleChange('deadline')}
                            value={formikProps.values.deadline}
                            keyboardType='numeric'
                        />

                        <Button title='Add Goal' onPress={formikProps.handleSubmit} />
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