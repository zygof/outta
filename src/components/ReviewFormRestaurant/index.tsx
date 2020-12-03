import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import Input from 'react-native-input-style';
import { globalStyles } from '../../theme/styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../Button';
import RNPickerSelect from 'react-native-picker-select';
import { Franchise } from '../../models'
import { franchiseMethod } from '../../redux/franchise/actions'

interface Props {
  route: any
}

/*
const reviewSchema = yup.object({
  title: yup.string()
    .required()
    .min(4),
  body: yup.string()
    .required()
    .min(8),
  rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});
*/
export default function ReviewFormRestaurant(props: Props) {

  const { route } = props;
  const franchise: Franchise = route.params.franchise;

  const [isLoading, setLoading] = useState<boolean>(true);
  const [dataAllFranchise, setDataFranchises] = useState<[]>([]);

  // Get our data
  useEffect(() => {
    (async function getListRestaurant() {
      setDataFranchises(await franchiseMethod.getByUID("ok"));

    })().finally(() => setLoading(false));
  }, []);

  return (

    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        //validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          //addReview(values);
        }}
      >
        {props => (
          <View>
            <RNPickerSelect
              value={() => (franchise) ? franchise : ""}
              onValueChange={(value) => console.log(value)}
              items={dataAllFranchise}
            />

            <Input
              id="adressePostal"
              label="Adresse postal"
              keyboardType="default"
              required
              contain=" "
              autoCapitalize="sentences"
              errorText="Veuillez saisir une adresse valide"
              onInputChange={props.handleChange('opé')}
              initialValue=""
              outlined
              borderColor="#7349BD"
            />

            <TextInput
              style={globalStyles.input}
              placeholder='Code postal'
              onChangeText={props.handleChange('')}
              onBlur={props.handleBlur('')}
              keyboardType='numeric'
            />

            <Input
              id="rue"
              label="rue"
              keyboardType="default"
              required
              contain=" "
              autoCapitalize="sentences"
              onInputChange={props.handleChange('')}
              initialValue=""
              outlined
              borderColor="#7349BD"
            />

            <Input
              id="ville"
              label="ville"
              keyboardType="default"
              required
              contain=" "
              autoCapitalize="sentences"
              onInputChange={props.handleChange('')}
              initialValue=""

              outlined
              borderColor="#7349BD"
            />

            <TextInput
              style={globalStyles.input}
              placeholder='Review title'
              onChangeText={props.handleChange('title')}
              onBlur={props.handleBlur('title')}
              value={props.values.title}
            />

            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

            <TextInput
              style={globalStyles.input}
              multiline minHeight={60}
              placeholder='Review details'
              onChangeText={props.handleChange('body')}
              onBlur={props.handleBlur('body')}
              value={props.values.body}
            />
            <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

            <FlatButton onPress={props.handleSubmit} text='envoyer' />
          </View>
        )}
      </Formik>
    </View>

  );
}