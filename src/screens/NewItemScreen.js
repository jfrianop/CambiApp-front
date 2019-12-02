import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { postItem } from '../actions/itemActions';

import axios from 'axios';

function NewItemScreen(props) {
  const [cameraPermission, setCameraPermission] = useState('denied');
  const [images, setImages] = useState(null);
  const [link, setLink] = useState("");
  const [location, setLocation] = useState([0, 0]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const imgur = axios.create({
    baseURL: 'https://api.imgur.com/3/',
    timeout: 1000,
    headers: {
      'Authorization': 'Client-ID e926bb63577f1e2',
      'Accept': "application/json",
      'Content-Type': "multipart/form-data",
    },
  })

  const getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    let location = await Location.getCurrentPositionAsync({});
    setLocation([location.coords.latitude, location.coords.longitude]);
  };


  const createFormData = async (uri) => {
    const data = new FormData();

    const file = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
    data.append('image', file);

    return data;
  }

  handleUploadPhoto = async (image) => {
    const form = await createFormData(image.uri, {});
    console.log(form);
    fetch('https://api.imgur.com/3/upload', {
      body: form,
      method: 'POST',
      headers: {
        'Authorization': 'Client-ID e926bb63577f1e2',
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      }
    })
      .then(response => response.json())
      .then((response) => {
        console.log("upload succes", response);
        setLink(response.data.link);
        alert("Upload success!");
      })
      .catch(error => {
        console.log({ error });
        alert("Upload failed!");
      });
  };

  useEffect(() => {
    Permissions.askAsync(Permissions.CAMERA_ROLL)
      .then(({ status }) => setCameraPermission(status));
  }, []);

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });
    result.key = result.uri;
    setImages(result);
    handleUploadPhoto(result);
  };

  takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });
    result.key = result.uri;
    setImages(result);
    handleUploadPhoto(result);
  }

  if (cameraPermission === 'denied') return (
    <View style={styles.container}>
      <Text>No tienes permisos</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        selectionColor={"#428AF8"}
        placeholder={"Nombre"}
        style={styles.textInput}
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        selectionColor={"#428AF8"}
        placeholder={"Descripción"}
        style={styles.textInput}
        onChangeText={text => setDescription(text)}
        value={description}
      />
      <Button
        title="Agregar Imagen"
        onPress={pickImage}
      />
      <Button
        title="Tomar Foto"
        onPress={takePicture}
      />
      <View style={styles.imageList}>
        {
          images && (
            <Image
              style={{ height: 100, width: 100 }}
              source={{ uri: images.uri }}
            />
          )
        }
      </View>
      <Button
        title="Agregar Item"
        onPress={() => { props.postItem(props.token, { name, description, location, pictures: [link] }) }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },
  imageList: {
    flex: 4,
  },
  textInput: {
    height: 40,
    paddingLeft: 6
  }
});


NewItemScreen.navigationOptions = {
  title: 'Agregar un Item',
};

const mapStateToProps = state => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, { postItem })(NewItemScreen);