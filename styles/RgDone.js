import {
    Platform,
    StyleSheet,
    Text,
    View, Image, TouchableOpacity, TextInput
} from 'react-native';
import { width, height } from 'react-native-dimension'
const styles = StyleSheet.create({
    container:{
        margin:40, flex:1, 
    },
    text:{
        color: '#1E1F20',
        fontFamily: 'Courier',
        fontSize: 50, marginTop:width(8)
        
    },
    viewIcon: {
        width: width(60),
        height: height(20),
       // justifyContent: 'space-between'
    },
    
    btnLogin: {
        width: width(65), height: height(10), backgroundColor: 'white',
        alignSelf: 'center', marginTop:height(25), borderRadius: height(5),
        backgroundColor: '#1E1F20', justifyContent: 'center', alignItems: 'center',
    },
    btnText:{
        fontSize: 40, color: '#F5F7F7', fontFamily: 'Helvetica'
    },
});
export default styles;