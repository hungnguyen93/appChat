import React, { Component } from 'react';
import {
    View, Text, StyleSheet, TextInput,
    TouchableOpacity, FlatList, Image
} from 'react-native';

import { width, height } from 'react-native-dimension';

import firebaseApp from '../components/FireBaseConfig';
import icSent from '../media/icSent.png';
import iconback from '../media/iconback.png';
import ThemeLogin from '../styles/GiaoDien_LogIn';
import { Actions, Scene, Router } from 'react-native-router-flux';

const FIREBASE_REF_MESSAGES = firebaseApp.database().ref('TinNhan')
const FIREBASE_REF_MESSAGES_LIMIT = 20


export default class Chat1 extends Component {
    constructor(props) {
        super(props);
        this.itemRef = firebaseApp.database();
        this.renderItem = ({ item }) => {
            return <Text>{item.message}</Text>
        }
        this.state = {
            txtMe: '', dataMS: []
        };

    }
    //set ghi de
    setDB() {
        this.itemRef.set({
            IOS: 'appchat',
            React: 'abcd123',
        })
    }
    //push them ko ghi de
    pushDB() {
        firebaseApp.database().ref('KhoaHoc').child('Hungnguyen').push({
            IOS: 'appchat',
            React: 'abcd123',
        })
    }
    _nhapDL() {
        let currentUser = firebaseApp.auth().currentUser
        let createdAt = new Date().getTime()
        let chatMessage = {
            text: this.state.txtMe,
            createdAt: createdAt,
            user: {
                id: 'currentUser.uid',
                email: 'sads'
            }
        }
        firebaseApp.database().ref('TinNhan').push().set(chatMessage, (error) => {
            if (error) {
                console.log(error.message)
            } else {
                console.log('suc vat')
            }
        });
        this.setState({
            txtMe: ''
        });
    }

    componentWillMount() {
        FIREBASE_REF_MESSAGES.limitToLast(FIREBASE_REF_MESSAGES_LIMIT).on('value', (snapshot) => {
            let arrTemp = []
            Object.keys(snapshot.val()).map(item => {
                console.log(snapshot.val()[item])
                let itemTemp = {
                    keys: snapshot.val()[item].createdAt || 'yyy',
                    message: snapshot.val()[item].mes || snapshot.val()[item].text
                }
                arrTemp.push(itemTemp)
            })
            this.setState({ dataMS: arrTemp })
        }, (errorObject) => {
            console.log(errorObject.message)
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{ width: width(5) }} onPress={() => Actions.pop()}>
                    <Image source={iconback} style={ThemeLogin.iconBack} />
                </TouchableOpacity>
                <FlatList
                    data={this.state.dataMS}
                    renderItem={this.renderItem}
                    style={styles.chat}
                >
                </FlatList>
                <View style={{width:width(100), height:height(0.1), backgroundColor:'gray'}}/>
                <View style={styles.chat1}>
                    <TextInput style={styles.textInput}
                        onChangeText={(text) => this.setState({ txtMe: text })}
                        value={this.state.txtMe}
                    />
                    <TouchableOpacity
                        onPress={() => this._nhapDL()}>
                        <Image
                            source={icSent}
                            style={styles.icSent}
                        />

                    </TouchableOpacity>
                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'flex-end',
        // alignItems: 'center',
       marginTop: 30,
    },
    textInput: {
        fontSize:15,
        width: width(90),
        height: height(6),
        paddingHorizontal: 10,
        // borderRadius: 10,
        // borderColor: '#CFCFCF',
        // borderWidth: 1
    },
    ViewChat: {
        width: width(100), height: height(80), width: width(80)
    },
    chat: {
        backgroundColor: 'white',
        width: width(100),
       // marginTop:30
       paddingVertical:10,
       
    },
    chat1: {
        marginTop: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        


    },
    icSent: {
        width: width(10),
        height: height(6),
    }
});