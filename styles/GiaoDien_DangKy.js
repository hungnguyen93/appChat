import {
    Platform,
    StyleSheet,
    Text,
    View, Image, TouchableOpacity, TextInput
} from 'react-native';
import { width, height } from 'react-native-dimension';
const styles = StyleSheet.create({
    container:{
        margin:40, flex:1, 
    },
    viewIcon: {
        width: width(60),
        height: height(20),
       // justifyContent: 'space-between'
    },
    Login: {
        color: '#1E1F20',
        fontFamily: 'Courier',
        fontSize: 50, marginTop:width(8)
    },
    uploadImage:{
        flexDirection:'row', alignItems: 'center', marginTop:height(1), 
    },
    logoImageUpImage:{
        width:width(25), height:height(15),resizeMode: 'contain'
       // width:width(25), height:height(12)
    },
    touchUpload:{
        justifyContent: 'center',
        width:width(45), height:height(6), marginLeft:width(7)
    },
    icUPE: {
        width: width(8), height: height(4), 
        //alignSelf:'center'
    },
    textInput: {
        height: height(4), width: width(64), 
        borderBottomWidth: 1, fontSize: 15, 
        color: 'black', marginLeft:height(1)
        
    },
    viewicUPE:{
       // alignItems:'center',
        flexDirection:'row',
        //justifyContent:'center',
       //alignSelf:'center',
        marginTop:height(3),
        
    },
    viewEnd:{
        flexDirection:'row', alignSelf:'center', 
        alignItems:'center',justifyContent:'center',
        marginTop:height(5)
       
    },
    btnTextLogin: {
        alignSelf: 'center'
    },
    btnLogin: {
        width: width(65), height: height(10), backgroundColor: 'white',
        alignSelf: 'center', marginTop:height(5), borderRadius: height(5),
        backgroundColor: '#1E1F20', justifyContent: 'center', alignItems: 'center',
    },
});
export default styles;