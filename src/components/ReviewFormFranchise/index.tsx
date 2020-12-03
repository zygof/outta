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
export default function ReviewFormFranchise(props: Props) {

  const [isLoading, setLoading] = useState<boolean>(true);
  const [dataAllCategorieFranchise, setDataCategorieFranchise] = useState<[]>([]);

  // Get our data
  useEffect(() => {
    (async function getListCategorieFranchise() {

    })().finally(() => setLoading(false));
  }, []);

  return (

    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        //validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
        }}
      >
        {props => (
          <View>
            <Input
              id="libelle"
              label="libelle"
              keyboardType="default"
              required
              contain=" "
              autoCapitalize="sentences"
              onInputChange={props.handleChange('opé')}
              initialValue=""
              outlined
              borderColor="#7349BD"
            />
            <Input
              id="categorie"
              label="categorie"
              keyboardType="default"
              required
              contain=" "
              autoCapitalize="sentences"
              onInputChange={props.handleChange('opé')}
              initialValue=""
              outlined
              borderColor="#7349BD"
            />

            <FlatButton onPress={props.handleSubmit} text='envoyer' />
          </View>
        )}
      </Formik>
    </View>

  );
}