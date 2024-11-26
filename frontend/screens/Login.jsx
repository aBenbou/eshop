import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { colors, defaultStyle, formheading, inputOptions, formStyles } from '../styles/styles';
import { Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer';

const Login = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loading = false;

    const submitHandler = ()=> {
        alert ('Nice');
    };
    

    return (
        <>
        <View style={{...defaultStyle, backgroundColor:colors.color2}}>
            <View style={{ marginBottom: 20 }}>
                <Text style={formheading}>Login</Text>
            </View>
            
            <View style={formStyles.container}>
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
                    <Text style={formStyles.forget}>Forgot Password?</Text>
                </TouchableOpacity>
                <Button 
                loading={loading}
                textColor={colors.color2} 
                disabled={email === '' || password === ''} 
                style={formStyles.btn}
                onPress={submitHandler}
                >
                    Log In
                    </Button>
                <Text style={formStyles.or}>OR</Text>
                <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=>navigation.navigate('signup')}
                >
                    <Text style={formStyles.link}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            
        
        </View>
        <Footer activeRoute='profile'/>
        
        
        </>
    );
};

export default Login;