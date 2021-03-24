import React from 'react';
import {
  Dimensions,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Colors, View, Text, Avatar, Button, Image} from 'react-native-ui-lib';
import {useTheme} from '@react-navigation/native';
import {images, COLORS} from '../../../constants';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SCREENS} from '../../../constants';

const SplashScreen = props => {
  const {navigation} = props;
  const {colors} = useTheme ();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" translucent={true} />
      <View padding-15>
        <View style={{height: 80}}>
          <Image
            style={styles.logo}
            source={images.logo}
            resizeMode="contain"
          />
        </View>
        <View center paddingT-50>
          <Text text50BL color={COLORS.primary}>
            {' '}Bienvenue sur Outta !
          </Text>
          <View
            width="100%"
            height={425}
            center
            marginT-15
            marginB-15
            style={{borderWidth: 1, borderColor: COLORS.primary}}
          >
            <Text color={COLORS.primary}>Carousel promotionnel</Text>
          </View>
          <View width="100%">
            <Button
              backgroundColor={COLORS.primary}
              borderRadius={5}
              onPress={() => navigation.navigate (SCREENS.REGISTER)}
            >
              <Text text70H color={COLORS.white}>Créer un compte</Text>
            </Button>

            <Button
              backgroundColor={COLORS.white}
              marginT-5
              onPress={() => navigation.navigate (SCREENS.LOGIN)}
            >
              <Text text70 color={COLORS.primary}>Se connecter</Text>
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  userRecucer: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators ({}, dispatch);

export default connect (mapStateToProps, mapDispatchToProps) (SplashScreen);

const {height} = Dimensions.get ('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
