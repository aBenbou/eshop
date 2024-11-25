import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { colors, defaultStyle, inputStyling } from '../styles/styles';
import { Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer';

const Login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const inputOptions = {
        style: inputStyling,
        mode: 'outlined',
        activeOutlineColor: colors.color1
    };
    const loading = false;

    const submitHandler = ()=> {
        alert ('Nice');
    };
    

    return (
        <>
        <View style={{...defaultStyle, backgroundColor:colors.color2}}>
            <View style={{ marginBottom: 20 }}>
                <Text style={styles.heading}>Login</Text>
            </View>
            
            <View style={styles.container}>
                <TextInput {...inputOptions} 
                placeholder='Email'
                keyboardType='email-address'
                value={email}
                onChangeText={setEmail}
                />
                <TextInput {...inputOptions} 
                placeholder='Password'
                secureTextEntry= {true}
                value={password}
                onChangeText={setPassword}
                />

                <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('forgetpassword')}>
                    <Text style={styles.forget}>Forgot Password?</Text>
                </TouchableOpacity>
                <Button 
                loading={loading}
                textColor={colors.color2} 
                disabled={email === '' || password === ''} 
                style={styles.btn}
                onPress={submitHandler}
                >
                    Log In
                    </Button>
                <Text style={styles.or}>OR</Text>
                <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=>navigation.navigate('signup')}
                >
                    <Text style={styles.link}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            
        
        </View>
        <Footer activeRoute='profile'/>
        
        
        </>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: '500',
        textAlign: 'center',
        backgroundColor: colors.color3,
        color: colors.color2,
        padding: 5,
        borderRadius: 5,
    },
    container: {
        backgroundColor: colors.color3,
        padding: 20,
        borderRadius: 10,
        marginVertical: 20,
        flex: 1,
        justifyContent: 'center',
        elevation: 10,
    },
    forget: {
        color: colors.color2,
        marginVertical: 10,
        marginHorizontal: 20,
        alignSelf: 'flex-end',
        fontWeight: '100',
    },
    btn: {
        backgroundColor: colors.color1,
        margin:20,
        padding:6,
    },
    or: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: '100',
        color: colors.color2,
    },
    link: {
        alignSelf: 'center',
        fontSize: 18,
        textTransform: 'uppercase',
        color: colors.color2,
        marginVertical: 10,
        marginHorizontal: 20,
    },
});

export default Login;