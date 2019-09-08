import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';

// Import constants
import Colors from '../constants/colors';
import Texts from '../constants/texts-en.js';

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

export default class loginView extends  Component {
    render() {
        return (
            <View style={styles.container}>
                {/*{default icon}*/}
                <Image source={require('../media/login_icon.png')} style={styles.iconStyle}/>
                {/*ask users for username and password*/}
                <TextInput placeholder={'username'}
                           style={styles.textInputStyle}
                />
                <TextInput placeholder={'password'}
                           style={styles.textInputStyle}
                           password={true}
                />
                {/*login button*/}
                <View style={styles.loginBtnStyle}>
                    <Text style={{color:'white'}}>Login</Text>
                </View>
                {/*other buttons*/}
                <View style={styles.settingStyle}>
                    <Text>Forget password</Text>
                    <Text>New user</Text>
                </View>
                {/*第三方登录方式*/}
                <View style={styles.otherLoginStyle}>
                    <Text>Login with...</Text>
                    <Image source={require('../media/login_icon.png')} style={styles.otherImageStyle}></Image>
                    <Image source={require('../media/login_icon.png')} style={styles.otherImageStyle}></Image>
                    <Image source={require('../media/login_icon.png')} style={styles.otherImageStyle}></Image>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    iconStyle:{
        width:80,
        height:80,
        marginTop:50,
        borderRadius:40,
        borderWidth:2,
        borderColor:'orange',
        marginBottom:30,
    },
    textInputStyle:{
        backgroundColor:'white',
        width:width,
        height:40,
        marginBottom:1,
        textAlign:'center',
        paddingLeft:15,
    },
    loginBtnStyle:{
        height:40,
        width:width*0.8,
        backgroundColor:'blue',
        marginTop:30,
        marginBottom:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
    },
    settingStyle:{
        flexDirection:'row',
        width:width*0.8,
        justifyContent:'space-between',
    },
    otherLoginStyle: {
        flexDirection:'row',
        alignItems:'center',
        position:'absolute',
        bottom:10,
        left:20
    },
    otherImageStyle:{
        width:50,
        height:50,
        borderRadius:25,
        marginLeft:10,
    },
});

module.exports = loginView;