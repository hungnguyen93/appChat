import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { width, height } from 'react-native-dimension';
export default class Button extends Component {
    getStyleByType() {
        const { type } = this.props;
        if (type === 'success') return { backgroundColor: '#3AB902', borderColor: '#339136' };
        if (type === 'danger') return { backgroundColor: '#F82D2F', borderColor: '#BC0001' };
        if (type === 'warning') return { backgroundColor: '#FFBF37', borderColor: '#FD4824' };
        return { backgroundColor: '#229CFF', borderColor: '#174FE9' };
    }

    render() {
        const { title, style, loading } = this.props;
        const styleByType = this.getStyleByType();
        return (
            <TouchableOpacity {...this.props} style={[styles.buttonContainer, styleByType, style]} >
                {loading ? <ActivityIndicator /> : <Text style={styles.buttonText}>{title}</Text>}
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({

    buttonContainer: {
        padding: 10,
        margin: 10,
        backgroundColor: '#3AB902',
        borderRadius: 5,
        borderColor: '#339136',
        borderWidth: 1
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },

});