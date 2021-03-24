import React from 'react';
import {
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {View, Text, Card} from 'react-native-ui-lib';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {COLORS, SCREENS} from '../../../constants';
import {
  FacebookSocialButton,
  GoogleSocialButton,
  EmailButton,
} from 'react-native-social-buttons';

const RegisterScreen = props => {
  const {navigation} = props;

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
      <View centerH padding-10 paddingT-20 height="80%">
        <FacebookSocialButton
          buttonText="Continuer avec Facebook"
          buttonViewStyle={{width: '100%', marginBottom: 10}}
          onPress={() => {}}
        />
        <GoogleSocialButton
          buttonText="Continuer avec Google"
          buttonViewStyle={{width: '100%'}}
          onPress={() => {}}
        />
        <View row center paddingT-30 paddingB-30>
          <View
            width="40%"
            style={{borderBottomWidth: 2, borderBottomColor: COLORS.darkgray}}
          />
          <Text center text60BO style={{width: '20%'}} color={COLORS.darkgray}>
            ou
          </Text>
          <View
            width="40%"
            style={{borderBottomWidth: 2, borderBottomColor: COLORS.darkgray}}
          />
        </View>

        <EmailButton
          buttonText="Continuer avec un email"
          buttonViewStyle={{width: '100%'}}
          onPress={() => navigation.navigate (SCREENS.REGISTER_EMAIL)}
        />
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
      </View>
      <View center height="10%">
        <Text
          color={COLORS.primary}
          text70M
          onPress={() => navigation.navigate (SCREENS.LOGIN)}
        >
          J'ai déjà un compte
        </Text>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators ({}, dispatch);

export default connect (mapStateToProps, mapDispatchToProps) (RegisterScreen);

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
});
