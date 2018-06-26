import React, { Component } from 'react';
import {
    Text,
    View, Image, TouchableOpacity, TextInput, Alert
} from 'react-native';
import iconback from '../media/iconback.png';
import ThemeLogin from '../styles/GiaoDien_LogIn';
import ThemeRGT from '../styles/GiaoDien_DangKy';
import { width, height } from 'react-native-dimension';
import icUpImage from '../media/icup_picture.png';
import icpass from '../media/icpass.png';
import icuser from '../media/icuser.png';
import icEmail from '../media/icEmail.png';
import { Actions } from 'react-native-router-flux';
import firebaseApp from '../components/FireBaseConfig';
export default class Risgister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    _Resgister() {
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                Alert.alert(
                    'Notification',
                    'Resgister Done:' + this.state.email,
                    [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'OK', onPress: () => Actions.Chat1()},
                    ],
                    { cancelable: false }
                )
                this.setState({
                    email: '', password: ''
                })

            })
            .catch(function (error) {
                Alert.alert(
                    'Notification',
                    'Resgister Failed:',
                    [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false }
                )
            });
    };
    render() {
        const { email, password } = this.state;
        return (
            <View style={ThemeRGT.container}>
                <TouchableOpacity style={{ width: width(5) }} onPress={() => Actions.pop()}>
                    <Image source={iconback} style={ThemeLogin.iconBack} ></Image>
                </TouchableOpacity>
                <View style={ThemeRGT.viewIcon}>
                    <Text style={ThemeRGT.Login}>New Account</Text>
                </View>
                <View style={ThemeRGT.uploadImage}>
                    <Image source={icUpImage} style={ThemeRGT.logoImageUpImage}></Image>
                    <TouchableOpacity style={ThemeRGT.touchUpload}>
                        <Text>Upload a profile picture (Optional)</Text>
                    </TouchableOpacity>
                </View>
                <View style={ThemeRGT.viewicUPE}>
                    <Image source={icuser} style={ThemeRGT.icUPE}></Image>
                    <TextInput style={ThemeRGT.textInput} placeholder={'User Name'}></TextInput>
                </View>
                <View style={ThemeRGT.viewicUPE}>
                    <Image source={icpass} style={ThemeRGT.icUPE}></Image>
                    <TextInput style={ThemeRGT.textInput}
                        placeholder={'Password'}
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password })}
                        value={password}
                    ></TextInput>
                </View>
                <View style={ThemeRGT.viewicUPE}>
                    <Image source={icEmail} style={ThemeRGT.icUPE}></Image>
                    <TextInput style={ThemeRGT.textInput}
                        placeholder={'E-mail adress'}
                        onChangeText={(email) => this.setState({ email })}
                        value={email}

                    ></TextInput>
                </View>
                <TouchableOpacity style={ThemeRGT.btnLogin}
                    onPress={() =>this._Resgister()}
                >
                    <Text style={{ fontSize: 40, color: '#F5F7F7', fontFamily: 'Helvetica' }}>Next</Text>
                </TouchableOpacity>
                <View style={ThemeRGT.viewEnd}>
                    <Text>Not the first time here?</Text>
                    <TouchableOpacity style={ThemeRGT.btnTextLogin} onPress={() => Actions.pop()}>
                        <Text style={{ fontFamily: 'Helvetica', color: '#CA2A1D' }}> Log In</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}