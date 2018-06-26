import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Image
} from 'react-native'
import RgDone from '../styles/RgDone';
import icDone from '../media/icDone.png';
import ThemeRGT from '../styles/GiaoDien_DangKy';
import { Actions } from 'react-native-router-flux';

export default class ResgisterDone extends Component {
    render() {
        return (
            <View style={RgDone.container}>
                <Image source={icDone} ></Image>
                <Text style={RgDone.text}>Start your adventure</Text>
                <TouchableOpacity style={RgDone.btnLogin} onPress={()=> Actions.popTo('Login')}>
                    <Text style={RgDone.btnText}>Log in</Text>
                </TouchableOpacity>
                <View style={ThemeRGT.viewEnd}>
                    <Text>You dont have an account?</Text>
                    <TouchableOpacity style={ThemeRGT.btnTextLogin} 
                        onPress={()=> Actions.popTo('Resgister')}
                    >
                        <Text style={{ fontFamily: 'Helvetica', color: '#CA2A1D' }}> Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}