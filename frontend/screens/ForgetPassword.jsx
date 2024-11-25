import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { colors, defaultStyle, formheading, inputOptions, formStyles } from '../styles/styles';
import { Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer';

const ForgetPassword = ({navigation}) => {

    const [email, setEmail] = useState('');

    const loading = false;

    const submitHandler = ()=> {
        alert ('Nice');
        // remove this in future
        navigation.navigate('verify');
    };
    

    return (
        <>
        <View style={{...defaultStyle, backgroundColor:colors.color2}}>
            <View style={{ marginBottom: 20 }}>
                <Text style={formheading}>Forget Password</Text>
            </View>
            
            <View style={formStyles.container}>
                <TextInput {...inputOptions} 
                placeholder='Email'
                keyboardType='email-address'
                value={email}
                onChangeText={setEmail}
                />
                <Button 
                loading={loading}
                textColor={colors.color2} 
                disabled={email === '' } 
                style={formStyles.btn}
                onPress={submitHandler}
                >
                    Send OTP
                    </Button>
                <Text style={formStyles.or}>OR</Text>
                <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=>navigation.navigate('login')}
                >
                    <Text style={formStyles.link}>Login In</Text>
                </TouchableOpacity>
            </View>
            
        
        </View>
        <Footer activeRoute='profile'/>
        
        
        </>
    );
};


export default ForgetPassword;