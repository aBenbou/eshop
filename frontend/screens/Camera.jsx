import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Camera, CameraView, useCameraPermissions } from "expo-camera";
import { Avatar } from "react-native-paper";
import { colors, defaultStyle } from "../styles/styles";
import * as ImagePicker from "expo-image-picker";

const CameraComponent = ({ navigation, route }) => {
  const [facing, setFacing] = useState('back');
  const [camera, setCamera] = useState(null);
  const [permission, requestPermission] = useCameraPermissions();

  const openImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false)
      return alert("Permission to access gallery is required");

    const data = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      //aspect: [1, 1],
      quality: 1,
    });

    if (route.params?.newProduct)
      return navigation.navigate("newproduct", {
        image: data.assets[0].uri,
      });

    if (route.params?.updateProduct)
      return navigation.navigate("productimages", {
        image: data.assets[0].uri,
      });
    if (route.params?.updateProfile)
      return navigation.navigate("profile", {
        image: data.assets[0].uri,
      });
    else
      return navigation.navigate("signup", {
        image: data.assets[0].uri,
      });
  };

  const clickPicture = async () => {
    if (camera) {
      try {
        const data = await camera.takePictureAsync();

        if (route.params?.newProduct)
          return navigation.navigate("newproduct", {
            image: data.uri,
          });

        if (route.params?.updateProduct)
          return navigation.navigate("productimages", {
            image: data.uri,
          });
        if (route.params?.updateProfile)
          return navigation.navigate("profile", {
            image: data.uri,
          });
        else
          return navigation.navigate("signup", {
            image: data.uri,
          });
      } catch (error) {
        console.error("Error taking picture:", error);
      }
    }
  };

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={defaultStyle}>
        <Text>We need your permission to show the camera</Text>
        <TouchableOpacity style={styles.button} onPress={requestPermission}>
          <Text>Grant permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <CameraView
        style={{
          flex: 1,
          aspectRatio: 1,
        }}
        ref={(ref) => setCamera(ref)}
        facing={facing}
      />

      <View
        style={{
          flexDirection: "row",
          bottom: 10,
          width: "100%",
          justifyContent: "space-evenly",
          position: "absolute",
        }}
      >
        <MyIcon icon="image" handler={openImagePicker} />
        <MyIcon icon="camera" handler={clickPicture} />
        <MyIcon
          icon="camera-flip"
          handler={() => {
            setFacing(current => (current === 'back' ? 'front' : 'back'));
          }}
        />
      </View>
    </View>
  );
};

const MyIcon = ({ icon, handler }) => (
  <TouchableOpacity onPress={handler}>
    <Avatar.Icon
      icon={icon}
      size={40}
      color={colors.color2}
      style={{
        backgroundColor: colors.color1,
      }}
    />
  </TouchableOpacity>
);

export default CameraComponent;