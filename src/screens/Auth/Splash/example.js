import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, View, Text, Avatar, Button, Image} from 'react-native-ui-lib';
import {useTheme} from '@react-navigation/native';
import {images, COLORS} from '../../../constants';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SCREENS} from '../../../constants';

const SplashScreen = props => {
  const {navigation} = props;
  const [currentStep, setCurrentStep] = useState (0);
  const [steps, setSteps] = useState ([
    {
      image: require ('../../../../assets/images/splash/search.jpg'),
      title: 'Easy To Search',
      description: 'Maecenas elementum est ut nulla blandit ultrices. Nunc quis ipsum urna. Aenean euismod sollicitudin nunc, ut rutrum magna ultricies eget',
    },
    {
      image: require ('../../../../assets/images/splash/access.jpg'),
      title: 'Easy To Access',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat elementum laoreet. Nunc id quam et eros molestie finibus',
    },
    {
      image: require ('../../../../assets/images/splash/manage.jpg'),
      title: 'Easy To Manage',
      description: 'Mauris vulputate interdum nibh vel tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas',
    },
  ]);
  const nextStep = () => {
    setCurrentStep (currentStep >= 2 ? 2 : currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep (currentStep <= 0 ? 0 : currentStep - 1);
  };
  return (
    <View style={styles.container}>
      <Image
        source={steps[currentStep].image}
        style={styles.stepImage}
        resizeMode="cover"
      />
      <View style={styles.stepIndicatorView}>
        {steps.map ((step, index) => {
          return (
            <View
              style={{
                ...styles.stepIndicator,
                width: currentStep === index ? 40 : 30,
                backgroundColor: currentStep === index
                  ? COLORS.primary
                  : 'gray',
              }}
            />
          );
        })}
      </View>
      <Text style={styles.title}>{steps[currentStep].title}</Text>
      <Text style={styles.description}>{steps[currentStep].description}</Text>
      <View style={styles.navigationView}>
        {currentStep > 0
          ? <TouchableOpacity
              onPress={() => prevStep ()}
              style={{
                ...styles.navigationBtn,
                borderTopEndRadius: 20,
                borderBottomEndRadius: 20,
              }}
            >
              <Text style={styles.navigationBtnTxt}>Back</Text>
            </TouchableOpacity>
          : <View />}

        <TouchableOpacity
          onPress={() => nextStep ()}
          style={{
            ...styles.navigationBtn,
            borderTopStartRadius: 20,
            borderBottomStartRadius: 20,
          }}
        >
          <Text style={styles.navigationBtnTxt}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  userRecucer: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators ({}, dispatch);

export default connect (mapStateToProps, mapDispatchToProps) (SplashScreen);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepImage: {
    width: '90%',
    height: '50%',
    marginVertical: 30,
  },
  stepIndicatorView: {
    flexDirection: 'row',
  },
  stepIndicator: {
    height: 10,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 20,
  },
  description: {
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  navigationView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  navigationBtn: {
    backgroundColor: COLORS.primary,
    height: 40,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationBtnTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
});
