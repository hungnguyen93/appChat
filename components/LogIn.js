import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, Image, TouchableOpacity, TextInput, Alert
} from 'react-native';
import { width, height } from 'react-native-dimension';
import iconback from '../media/iconback.png';
import icFb from '../media/icFb.png';
import icGG from '../media/icGG.png';
import icpass from '../media/icpass.png';
import icuser from '../media/icuser.png';
import ThemeLogin from '../styles/GiaoDien_LogIn';
import { Actions } from 'react-native-router-flux';
import firebaseApp from '../components/FireBaseConfig';

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  _Login() {
    var self = this
    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        Alert.alert(
          'Notification',
          'Login Ok:',
          [
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'Ok', onPress: () => Actions.Chat1({email : this.state.email }) }, //emai truyen prop qua comonent Chat1
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
          'Login Failed: Email or password Incorrect ',
          [
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false }
        )
        self.setState({
          password:''
        })
      });
  };
  render() {
    const screens = [
      { key: "1", actions: () => Actions.Resgister()},
      { key: "2", actions: () => Actions.Chat1()},

    ]
    const { email, password } = this.state;
    return (
      <View style={ThemeLogin.container}>
        <View style={ThemeLogin.viewIcon} >
          <TouchableOpacity style={{ width: width(5) }}>
            <Image source={iconback} style={ThemeLogin.iconBack} ></Image>
          </TouchableOpacity>
          <Text style={ThemeLogin.Login}>Log In</Text>
        </View>
        <View>
          <View style={ThemeLogin.view_Icuser_Icpass}>
            <Image source={icuser} style={ThemeLogin.icUserPass}></Image>
            <TextInput style={ThemeLogin.textInput}
              placeholder={'Email'}
              onChangeText={(email) => this.setState({ email })}
              value={email}
            ></TextInput>
          </View>
          <View style={ThemeLogin.view_Icuser_Icpass2}>
            <Image source={icpass} style={ThemeLogin.icUserPass}></Image>
            <TextInput style={ThemeLogin.textInput}
              placeholder={'Password'}
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
              value={password}
            ></TextInput>
          </View>
          <TouchableOpacity style={ThemeLogin.btnIncorrec} >
            <Text style={{ fontFamily: 'Helvetica', color: '#CA2A1D' }}>Incorrect Password</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={ThemeLogin.btnLogin}
          onPress={() => this._Login()}
        >
          <Text style={{ fontSize: 40, color: '#F5F7F7', fontFamily: 'Helvetica' }}>Log in</Text>
        </TouchableOpacity>
        <Text style={ThemeLogin.textWith}>Or sign up with</Text>
        <View style={ThemeLogin.ViewFb_GG}>
          <TouchableOpacity>
            <Image source={icFb} style={ThemeLogin.icFb_GG}></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={icGG} style={ThemeLogin.icFb_GG}  ></Image>
          </TouchableOpacity>
        </View>
        <View style={ThemeLogin.viewEnd}>
          <Text style={{ fontFamily: 'Helvetica' }}>First time here?</Text>
          <TouchableOpacity onPress={() => Actions.Resgister()} >
            <Text style={ThemeLogin.textSignup}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

