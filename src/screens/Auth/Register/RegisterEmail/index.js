import React from 'react';
import {
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {View, Text, Button, Incubator, Colors} from 'react-native-ui-lib';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {COLORS, SCREENS} from '../../../../constants';

const {TextField} = Incubator;

const RegisterEmailScreen = props => {
  const {navigation} = props;

  const [data, setData] = React.useState ({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = val => {
    if (val.length !== 0) {
      setData ({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setData ({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const emailInputChange = email => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    const isEmailAdress = expression.test (String (email).toLowerCase ());

    if (isEmailAdress) {
      setData ({
        ...data,
        username: email,
        check_textInputChange: true,
      });
    } else {
      setData ({
        ...data,
        username: email,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = val => {
    setData ({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = val => {
    setData ({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData ({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData ({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" translucent={true} />
      <View
        row
        centerV
        padding-5
        style={{borderBottomColor: COLORS.primary, borderBottomWidth: 0.5}}
      >
        <View>
          <MaterialCommunityIcons
            name="chevron-left"
            onPress={() => navigation.goBack ()}
            size={30}
            color={COLORS.primary}
          />
        </View>
        <View flex paddingR-30>
          <Text center text70H color={COLORS.primary}>
            Créer un compte
          </Text>
        </View>
      </View>
      <ScrollView>
        <Text text60R>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Votre adresse email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => emailInputChange (val)}
          />
          {data.check_textInputChange
            ? <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            : null}
        </View>

        <Text text60R> Mot de passe </Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Votre mot de passe"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => handlePasswordChange (val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry
              ? <Feather name="eye-off" color="grey" size={20} />
              : <Feather name="eye" color="grey" size={20} />}
          </TouchableOpacity>
        </View>

        <Text
          style={[
            styles.text_footer,
            {
              marginTop: 35,
            },
          ]}
        >
          Confirmation mot de passe
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Confirmation mot de passe"
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={val => handleConfirmPasswordChange (val)}
          />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.secureTextEntry
              ? <Feather name="eye-off" color="grey" size={20} />
              : <Feather name="eye" color="grey" size={20} />}
          </TouchableOpacity>
        </View>
        <View paddingT-30>
          <View row>
            <Text text80 color={COLORS.darkgray}>
              En vous inscrivant, vous acceptez notre
            </Text>
            <Text text80M>
              {' '}
              Conditions
            </Text>
          </View>

          <View row>
            <Text text80M>
              d'utilisation
            </Text>
            <Text text80 color={COLORS.darkgray}> et notre</Text>
            <Text text80M>
              {' '}
              Politique de confidentialité
            </Text>
          </View>

        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn} onPress={() => {}} />

          <TouchableOpacity
            onPress={() => navigation.navigate (SCREENS.LOGIN)}
            style={[
              styles.signIn,
              {
                backgroundColor: COLORS.primary,
                marginTop: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: COLORS.white,
                },
              ]}
            >
              Se connecter
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators ({}, dispatch);

export default connect (mapStateToProps, mapDispatchToProps) (
  RegisterEmailScreen
);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
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
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
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
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
  withUnderline: {
    borderBottomWidth: 1,
    borderColor: Colors.grey40,
    paddingBottom: 4,
  },
  withFrame: {
    borderWidth: 1,
    borderColor: Colors.grey40,
    padding: 4,
    borderRadius: 2,
  },
});
