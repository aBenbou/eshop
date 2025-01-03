import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { colors, defaultStyle, formheading, inputOptions, formStyles, defaultImg } from '../styles/styles';
import { Button, TextInput } from 'react-native-paper';
import Header from '../components/Header';
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/actions/otherAction";
import { useMessageAndErrorOther } from "../utils/hooks";


const UpdateProfile = ({ navigation }) => {

    const { user } = useSelector((state) => state.user);
    

    const [name, setName] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);
    const [address, setAddress] = useState(user?.address);
    const [city, setCity] = useState(user?.city);
    const [country, setCountry] = useState(user?.country);
    const [pinCode, setPinCode] = useState(user?.pinCode.toString());

    const dispatch = useDispatch();

    const loading = useMessageAndErrorOther(dispatch, navigation, "profile");

    const submitHandler = () => {
        // alert('Nice');
        dispatch(updateProfile(name, email, address, city, country, pinCode));
    };


    return (
        <View style={defaultStyle}>
            <Header back={true} />
            
            {/* Heading */}
            <View style={{ marginBottom: 20, paddingTop: 70 }}>
                <Text style={formheading}>Edit Profile</Text>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={{
                padding: 20,
                elevation: 10,
                borderRadius: 10,
                backgroundColor: colors.color3,
            }}>
                <View>
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
                        style={formStyles.btn}
                        onPress={submitHandler}
                    >
                        Update
                    </Button>
                </View>
            </ScrollView>
        </View>

    );
};


export default UpdateProfile;