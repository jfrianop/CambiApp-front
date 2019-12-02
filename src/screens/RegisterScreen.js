import React, { useState } from 'react';
import { connect } from 'react-redux'
import { register } from '../actions/authActions';

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function RegisterScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  _signInAsync = async () => {
    await props.register(email, password, () => { props.navigation.navigate('App') });
  };


  return (
    <View style={styles.container}>
      {props.badRegister && <Text>Error registrando el usuario</Text>}
      <TextInput
        selectionColor={"#428AF8"}
        placeholder={"Usuario"}
        style={styles.textInput}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        selectionColor={"#428AF8"}
        placeholder={"Contraseña"}
        style={styles.textInput}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button title="Registrarse" onPress={this._signInAsync} />
    </View>
  );
}

RegisterScreen.navigationOptions = {
  title: 'Registrarse'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    height: 40,
    paddingLeft: 6
  }
});

const mapStateToProps = state => ({
  badRegister: state.auth.badRegister
});

export default connect(mapStateToProps, { register })(RegisterScreen);