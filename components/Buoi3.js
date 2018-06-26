import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { width, height } from 'react-native-dimension';
import Button from '../shared/Button';
import Input from '../shared/Input';
export default class Buoi3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Buoi3</Text>
                <Button title="CLick here" onPress={()=> alert(123)} 
                type="success"
                style={{backgroundColor:'red'}}
                />
                <Button title="Remove" onPress={()=> alert(123)} type="danger" loading={true}/>
                <Button title="Update" onPress={()=> alert(123)} type="warning"/>
                <Button title="Show" onPress={()=> alert(123)} type="success" loading/>
                <Input placeholder="Enter your email here." />
                <Input
                    placeholder="Enter your password here."
                    secureTextEntry
                />
            </View>        
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BFB6D3'
    },
    textInput: {
        width:width(80),
        height: height(5),
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: '#CFCFCF',
        borderWidth: 1
    }
});