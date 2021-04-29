import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Alert,
} from 'react-native';
import {Colors, View, Image, Text, Avatar, Button} from 'react-native-ui-lib';
import {COLORS, images, SCREENS} from '../../../constants';
import {login} from '../../../redux/user/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const LoginScreen = props => {
  const {navigation, login, userReducer} = props;
  const [email, setEmail] = useState ('zygof@test.fr');
  const [password, setPassword] = useState ('test123');
  useEffect (() => {
    (async function defaultValue () {});
  }, []);

  const loginHandle = async () => {
    login (email, password);
    console.log (userReducer);
    if (userReducer.errors) Alert.alert ('Utilisateur non trouvée');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View center padding-30 height={250}>
        <Image style={styles.logo} source={images.logo} resizeMode="contain" />
      </View>

      <View padding-30>
        <TextInput
          placeholder="adresse email"
          placeholderTextColor={Colors.dark50}
          textContentType="emailAddress"
          onChangeText={val => setEmail (val)}
          style={{
            fontFamily: 'Montserrat-Bold',
            borderBottomWidth: 2.5,
            paddingBottom: 5,
            fontSize: 18,
            borderBottomColor: Colors.grey50,
            marginBottom: 20,
            color: COLORS.primary,
          }}
        >
          {email}
        </TextInput>
        <TextInput
          placeholder="mot de passe"
          placeholderTextColor={Colors.dark50}
          secureTextEntry
          onChangeText={val => setPassword (val)}
          style={{
            fontFamily: 'Montserrat-Bold',
            borderBottomWidth: 2.5,
            paddingBottom: 5,
            fontSize: 18,
            borderBottomColor: Colors.grey50,
            color: COLORS.primary,
          }}
        >
          {password}
        </TextInput>
        <View right marginT-15>
          <TouchableOpacity
            onPress={() => console.log ('Mot de passe oublié ?')}
          >
            <Text text80M color={COLORS.primary}>Mot de passe oublié ?</Text>
          </TouchableOpacity>
        </View>

        <View marginT-100>
          <TouchableOpacity
            style={{alignItems: 'center'}}
            onPress={() => navigation.navigate (SCREENS.REGISTER)}
          >
            <Text
              text70M
              color={COLORS.primary}
              style={{fontFamily: 'Montserrat-Bold'}}
            >
              Créer un compte
            </Text>
          </TouchableOpacity>
          <Button
            marginT-50
            backgroundColor={COLORS.primary}
            onPress={() => loginHandle ()}
          >
            <Text text70 color={COLORS.white}>Se connecter</Text>
          </Button>
        </View>
      </View>

    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  userReducer: state.userReducer,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators (
    {
      login: (email, password) => dispatch (login (email, password)),
    },
    dispatch
  );

export default connect (mapStateToProps, mapDispatchToProps) (LoginScreen);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
});
