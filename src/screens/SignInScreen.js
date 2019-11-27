import React, { useState } from 'react';
import { connect } from 'react-redux'
import { signIn } from '../actions/authActions';

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function SignInScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccessful, setLogedIn] = useState(false);

  _signInAsync = async () => {
    await props.signIn(email, password, () => { props.navigation.navigate('App') });
  };


  return (
    <View style={styles.container}>
      {props.badLogin && <Text>Nombre de usuario o contraseña incorrectos</Text>}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        blurOnSubmit={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button title="Ingresar" onPress={this._signInAsync} />
    </View>
  );
}

SignInScreen.navigationOptions = {
  title: 'Iniciar Sesión'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  token: state.auth.token,
  badLogin: state.auth.badLogin
});

export default connect(mapStateToProps, { signIn })(SignInScreen);