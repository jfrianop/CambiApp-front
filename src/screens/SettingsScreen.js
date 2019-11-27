import React from 'react';
import {
  AsyncStorage,
  Button,
  StyleSheet,
  View,
} from 'react-native';


export default function SettingsScreen(props) {

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };

  return (
    <View style={styles.container}>
      <Button title="Cerrar Sesión" onPress={_signOutAsync} />
    </View>
  );
}

SettingsScreen.navigationOptions = {
  title: 'Opciones',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});