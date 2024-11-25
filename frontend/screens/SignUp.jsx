import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { colors, defaultStyle, formheading, inputOptions, formStyles, defaultImg } from '../styles/styles';
import { Avatar, Button, TextInput } from 'react-native-paper';
import Footer from '../components/Footer';


const SignUp = ({navigation}) => {
    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [pinCode, setPinCode] = useState('');

    const loading = false;

    const disableBtn = !name || !email || !password || !address || !city || !country || !pinCode;

    const submitHandler = ()=> {
        alert ('Nice');
        // remove this in future
        navigation.navigate('verify');
    };
    

    return (
        <>
        <View style={{...defaultStyle, backgroundColor:colors.color2}}>
            <View style={{ marginBottom: 20 }}>
                <Text style={formheading}>Sign Up</Text>
            </View>
            
            <ScrollView showsVerticalScrollIndicator={false} style={{
                padding: 20,
                elevation: 10,
                borderRadius: 10,
                backgroundColor: colors.color3,
            }}>
            <View style={{ minHeight: 850 }}>

                <Avatar.Image 
                style={{
                    alignSelf: 'center',
                    backgroundColor: colors.color1,
                }} 
                size={80}
                source={{
                    uri: avatar?avatar:defaultImg,
                }}
                />
                <TouchableOpacity onPress={()=>navigation.navigate('camera')}>
                    <Button textColor={colors.color1}>Upload Image</Button>
                </TouchableOpacity>

                <TextInput {...inputOptions} 
                placeholder='Name'
                keyboardType='default'
                value={name}
                onChangeText={setName}
                />


                <TextInput {...inputOptions} 
                placeholder='Email'
                keyboardType='email-address'
                value={email}
                onChangeText={setEmail}
                />

                <TextInput {...inputOptions} 
                placeholder='Password'
                keyboardType='visible-password'
                secureTextEntry= {true}
                value={password}
                onChangeText={setPassword}
                />

                <TextInput {...inputOptions} 
                placeholder='Address'
                keyboardType='default'
                value={address}
                onChangeText={setAddress}
                />

                <TextInput {...inputOptions} 
                placeholder='City'
                keyboardType='default'
                value={city}
                onChangeText={setCity}
                />

                <TextInput {...inputOptions} 
                placeholder='Country'
                keyboardType='default'
                value={country}
                onChangeText={setCountry}
                />

                <TextInput {...inputOptions} 
                placeholder='Pin Code'
                keyboardType='number-pad'
                value={pinCode}
                onChangeText={setPinCode}
                />

                <Button 
                loading={loading}
                textColor={colors.color2} 
                disabled={disableBtn} 
                style={formStyles.btn}
                onPress={submitHandler}
                >
                    Submit
                    </Button>
                <Text style={formStyles.or}>OR</Text>
                <TouchableOpacity
                activeOpacity={0.8}
                onPress={()=>navigation.navigate('login')}
                >
                    <Text style={formStyles.link}>Login In</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
            
        
        </View>
        <Footer activeRoute='profile'/>
        
        
        </>
    );
};


export default SignUp;