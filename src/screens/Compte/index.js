import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {Colors, View, Text, Avatar, Button} from 'react-native-ui-lib';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {images, FONTS, SIZES, COLORS, icons} from '../../constants';
import RNTextInput from '@freakycoder/react-native-text-input';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {ListItem} from 'react-native-elements';
import {logout} from '../../redux/user/actions';

const user = {
  prenom: 'Prénom',
  nom: 'NOM',
  telephone: '0202020202',
  adresseEmail: 'example@example.com',
  location: '89 Quai des Chartrons, 33300 Bordeaux',
  password: '123456789',
  avatar: images.avatar_4,
  screen: 'SCREENS.PROFIL',
};

const Compte = props => {
  const {navigation, logout} = props;
  const [value, onChangeText] = React.useState ('Useless Placeholder');
  return (
    <SafeAreaView>
      <View
        center
        padding-15
        style={{borderBottomColor: COLORS.primary, borderBottomWidth: 0.2}}
      >
        <Avatar source={user.avatar} size={60} />
        <View center paddingL-5 paddingT-5>
          <Text text60M>
            {user.prenom} {user.nom}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate ('Profil')}>
            <Text marginT-5 color={COLORS.primary}>
              Mon Profil
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View>
          <ListItem
            containerStyle={{
              backgroundColor: COLORS.white,
            }}
            onPress={() => navigation.navigate ('Compte')}
          >
            <ListItem.Content style={{marginLeft: 10}}>
              <View row center>
                <MaterialCommunityIcons
                  name="ticket-confirmation"
                  size={30}
                  color={COLORS.primary}
                />
                <Text text70M marginL-10>
                  Mes commandes
                </Text>
              </View>
            </ListItem.Content>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={COLORS.primary}
            />
          </ListItem>
          <ListItem
            topDivider
            containerStyle={{
              backgroundColor: COLORS.white,
            }}
            onPress={() => navigation.navigate ('Compte')}
          >
            <ListItem.Content style={{marginLeft: 10}}>
              <View row center>
                <MaterialCommunityIcons
                  name="account-star"
                  size={30}
                  color={COLORS.primary}
                />
                <Text text70M marginL-10>
                  Mes points de fidélité
                </Text>
              </View>
            </ListItem.Content>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={COLORS.primary}
            />
          </ListItem>
          <ListItem
            topDivider
            containerStyle={{
              backgroundColor: COLORS.white,
            }}
            onPress={() => navigation.navigate ('Compte')}
          >
            <ListItem.Content style={{marginLeft: 10}}>
              <View row center>
                <MaterialCommunityIcons
                  name="account-multiple"
                  size={30}
                  color={COLORS.primary}
                />
                <Text text70M marginL-10>
                  Parrainage
                </Text>
              </View>
            </ListItem.Content>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={COLORS.primary}
            />
          </ListItem>

          <ListItem
            topDivider
            containerStyle={{
              backgroundColor: COLORS.white,
            }}
            onPress={() => navigation.navigate ('Compte')}
          >
            <ListItem.Content style={{marginLeft: 10}}>
              <View row center>
                <MaterialCommunityIcons
                  name="help"
                  size={30}
                  color={COLORS.primary}
                />
                <Text text70M marginL-10>
                  Aide
                </Text>
              </View>
            </ListItem.Content>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={COLORS.primary}
            />
          </ListItem>

          <ListItem
            topDivider
            containerStyle={{
              backgroundColor: COLORS.white,
            }}
            onPress={() => navigation.navigate ('Compte')}
          >
            <ListItem.Content style={{marginLeft: 10}}>
              <View row center>
                <MaterialCommunityIcons
                  name="hand"
                  size={30}
                  color={COLORS.primary}
                />
                <Text text70M marginL-10>
                  SAV
                </Text>
              </View>
            </ListItem.Content>
            <MaterialCommunityIcons
              name="chevron-right"
              size={30}
              color={COLORS.primary}
            />
          </ListItem>
          <View center>
            <Text
              text70M
              margin-30
              color={COLORS.primary}
              onPress={() => logout ()}
            >
              Déconnecter
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  userReducer: state.userReducer,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators ({logout: () => dispatch (logout ())}, dispatch);

export default connect (mapStateToProps, mapDispatchToProps) (Compte);
