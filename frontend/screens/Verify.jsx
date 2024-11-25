import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { colors, defaultStyle, formheading, inputOptions, formStyles } from '../styles/styles';
import { Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer';

const Verify = ({navigation}) => {

    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');

    const loading = false;

    const submitHandler = ()=> {
        alert ('Nice');
        // remove this in future
        navigation.navigate('login');
    };
    

    return (
        <>
        <View style={{...defaultStyle, backgroundColor:colors.color2}}>
            <View style={{ marginBottom: 20 }}>
                <Text style={formheading}>Reset Password</Text>
            </View>
            
            <View style={formStyles.container}>
                <TextInput {...inputOptions} 
                placeholder='OTP'
                keyboardType='number-pad'
                value={otp}
                onChangeText={setOtp}
                />
                <TextInput {...inputOptions} 
                placeholder='New Password'
                secureTextEntry= {true}
                value={password}
                onChangeText={setPassword}
                />
                <Button 
                loading={loading}
                textColor={colors.color2} 
                disabled={otp === '' || password === '' } 
                style={formStyles.btn}
                onPress={submitHandler}
                >
                    Reset Password
                    </Button>
                <Text style={formStyles.or}>OR</Text>
                <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=>navigation.navigate('forgetpassword')}
                >
                    <Text style={formStyles.link}>Resend OTP</Text>
                </TouchableOpacity>
            </View>
            
        
        </View>
        <Footer activeRoute='profile'/>
        
        
        </>
    );
};


export default Verify;