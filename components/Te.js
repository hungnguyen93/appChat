import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView } from 'react-native';
import { width, height } from 'react-native-dimension';
import firebaseApp from '../components/FireBaseConfig';
export default class Chat1 extends Component {
    constructor(props) {
        super(props);
        this.itemRef = firebaseApp.database();
        this.state = {
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        };
    }
    listenForItems(itemRef) {
        const items = [];
        this.itemRef.ref('TrungTam').child('TinNhan').on('child_added', (dataSnapshot) => {
            items.push({
                name: dataSnapshot.val(),
                key: dataSnapshot.key
            })
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(items)
            });
        });
    }
    render() {
        return (
            <View style={{flex:1}}>
                
            </View>

        );
    }
    componentDidMount() {
        this.listenForItems(this.itemRef)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //    justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#BFB6D3'
    },
    textInput: {
        width: 300,
        height: 40,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 5,
        borderColor: '#CFCFCF',
        borderWidth: 1
    },
    btnSent: {
        padding: 10, width: width(32),
        margin: 10,
        backgroundColor: '#3AB902',
        borderRadius: 5,
        borderColor: '#339136',
        borderWidth: 1
    },
    ViewChat: {
        width: width(100), height: height(80),

    },
});