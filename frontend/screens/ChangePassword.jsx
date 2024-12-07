import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { colors, defaultStyle, formheading, inputOptions, formStyles } from '../styles/styles';
import { Button, TextInput } from 'react-native-paper';
import Header from '../components/Header';
import { useDispatch } from "react-redux";
import { updatePassword } from "../redux/actions/otherAction";
import { useMessageAndErrorOther } from "../utils/hooks";

const ChangePassword = () => {

    const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const dispatch = useDispatch();
  const loading = useMessageAndErrorOther(dispatch);

    const submitHandler = () => {
        dispatch(updatePassword(oldPassword, newPassword));
        setOldPassword("");
        setNewPassword("");
      };


    return (
        <View style={defaultStyle}>
            <Header back={true} />
            <View style={{ marginBottom: 20, paddingTop: 70 }}>
                <Text style={formheading}>Change Password</Text>
            </View>

            <View style={formStyles.container}>
                <TextInput {...inputOptions}
                    placeholder='Old Password'
                    secureTextEntry={true}
                    value={oldPassword}
                    onChangeText={setOldPassword}

                />
                <TextInput {...inputOptions}
                    placeholder='New Password'
                    secureTextEntry={true}
                    value={newPassword}
                    onChangeText={setNewPassword}
                />

                <Button
                    loading={loading}
                    textColor={colors.color2}
                    disabled={oldPassword === '' || newPassword === ''}
                    style={formStyles.btn}
                    onPress={submitHandler}
                >
                    Submit
                </Button>
            </View>
        </View>
    );
};

export default ChangePassword;