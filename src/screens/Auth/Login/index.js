import React, {useEffect} from 'react';
import {
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Image,
  Alert,
} from 'react-native';
import {Colors, View, Text, Avatar, Button} from 'react-native-ui-lib';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {useTheme} from 'react-native-paper';
import {COLORS, images, SCREENS} from '../../../constants';

import {login} from '../../../redux/user/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {storeManager} from '../../../utils';

const LoginScreen = props => {
  const {navigation, login, userReducer} = props;
  const [data, setData] = React.useState ({
    username: 'test@test.fr',
    password: 'aaaaaaaa',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  useEffect (() => {
    (async function defaultValue () {
      if (data.username && data.password) {
        console.log ('salut');
        textInputChange (data.username);
        handlePasswordChange (data.password);
      }
    });
  }, []);

  const {colors} = useTheme ();

  const textInputChange = email => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    const isEmailAdress = expression.test (String (email).toLowerCase ());

    if (isEmailAdress) {
      setData ({
        ...data,
        username: email,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData ({
        ...data,
        username: email,
        check_textInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim ().length >= 8) {
      setData ({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData ({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData ({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const loginHandle = async (email, password) => {
    if (data.isValidUser && data.isValidPassword) {
      login (email, password);
      if (userReducer.isLoggedIn == null)
        Alert.alert ('Utilisateur non trouvée');
    } else {
      Alert.alert ('Saisi incorrect!', 'Email ou le mot de passe incorrecte.', [
        {text: 'Ok'},
      ]);
    }

    if (data.username.length == 0 || data.password.length == 0) {
      Alert.alert (
        'Saisi incorrect!',
        'Email ou le mot de passe ne peut pas être vide.',
        [{text: 'Ok'}]
      );
      return;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <View style={styles.header}>
        <Image source={images.logo} style={styles.logo} />
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
      >
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
            },
          ]}
        >
          Email
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Adresse email"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={val => textInputChange (val)}
            //onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          >
            {data.username}
          </TextInput>
          {data.check_textInputChange
            ? <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            : null}
        </View>
        {data.isValidUser
          ? null
          : <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Veillez saisir un email valide.
              </Text>
            </Animatable.View>}

        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              marginTop: 35,
            },
          ]}
        >
          Mot de passe
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color={colors.text} size={20} />
          <TextInput
            placeholder="*******"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange (val)}
          >
            {data.password}
          </TextInput>
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry
              ? <Feather name="eye-off" color="grey" size={20} />
              : <Feather name="eye" color="grey" size={20} />}
          </TouchableOpacity>
        </View>
        {data.isValidPassword
          ? null
          : <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Le mot de passe doit contenir 8 caractères.
              </Text>
            </Animatable.View>}

        <TouchableOpacity>
          <Text style={{color: COLORS.primary, marginTop: 15}}>
            Mot de passe oublié?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => loginHandle (data.username, data.password)}
          style={[
            styles.signIn,
            {
              backgroundColor: COLORS.primary,
              marginTop: 45,
            },
          ]}
        >
          <Text
            style={[
              styles.textSign,
              {
                color: 'white',
              },
            ]}
          >
            Se connecter
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate (SCREENS.REGISTER)}
          style={[
            styles.signIn,
            {
              borderColor: COLORS.primary,
              borderWidth: 1,
              marginTop: 15,
            },
          ]}
        >
          <Text
            style={[
              styles.textSign,
              {
                color: COLORS.primary,
              },
            ]}
          >
            Créer un compte
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
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
    backgroundColor: COLORS.primary,
  },
  header: {
    width: '100%',
  },
  logo: {
    height: 150,
    width: 300,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
