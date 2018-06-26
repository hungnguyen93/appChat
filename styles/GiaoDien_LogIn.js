import {
    Platform,
    StyleSheet,
    Text,
    View, Image, TouchableOpacity, TextInput
} from 'react-native';
import { width, height } from 'react-native-dimension'
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewIcon: {
        margin: 40,
        width: width(60),
        height: height(20),
        justifyContent: 'space-between'

    },
    viewTextLogin: {

        backgroundColor: 'green',
        justifyContent: 'space-between'

    },
    textInput: {
        height: height(4), width: width(60), marginTop: 5,
        borderBottomWidth: 1, fontSize: 18,
        color: 'black',
    },
    iconBack: {


        width: width(4),
        height: height(4),


    },
    Login: {
        color: '#1E1F20',
        fontFamily: 'Courier',
        fontSize: 60,


    },
    icUserPass: {
        width: width(10), height: height(5),
    },
    view_Icuser_Icpass: {
        height: height(5), width: width(80), flexDirection: 'row',
        marginTop: 30, alignSelf: 'center'
    },
    view_Icuser_Icpass2: {
        height: height(5), width: width(80), flexDirection: 'row',
        marginTop: 30, alignSelf: 'center', marginTop: height(5)
        //marginBottom:10,
        // backgroundColor: 'blue'
    },
    btnIncorrec: {
        width: width(32), marginTop: 10, alignSelf: 'center'
    },
    btnLogin: {
        width: width(65), height: height(10), backgroundColor: 'white',
        alignSelf: 'center', marginTop: 50, borderRadius: height(5),
        backgroundColor: '#1E1F20', justifyContent: 'center', alignItems: 'center',
    },
    viewEnd:{
        width:width(41), flexDirection:'row', 
        marginTop:width(9), alignSelf:'center',
    },
    textSignup:{
        color:'#CA2A1D',fontFamily: 'Helvetica'
    },
    ViewFb_GG:{
     flexDirection:'row', alignSelf:'center', width:width(40),
        justifyContent:'space-between', marginTop:width(5)
    },
    icFb_GG:{
       height:height(8), width:width(14),resizeMode: 'contain'
    },
    textWith:{
        fontFamily: 'Helvetica', alignSelf:'center', marginTop:width(3)
    },

});
export default styles;  