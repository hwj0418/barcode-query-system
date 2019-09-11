import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
} from 'react-native';

var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;

const loginView = (props) => {
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
        </View>
    );
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
    }
});

module.exports = loginView;