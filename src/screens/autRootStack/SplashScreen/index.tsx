import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Button,
    Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-svg";
import Icons from "react-native-vector-icons";
import { useTheme } from "@react-navigation/native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

interface Props { }

const SplashScreen = (props: Props) => {
    const { navigation } = props;
    const { colors } = useTheme();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#7349BD" barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duraton="1500"
                    source={require("@assets/adaptive-icon.png")}
                    style={styles.logo}
                    resizeMode="stretch"
                />
            </View>
            <Animatable.View
                style={[
                    styles.footer,
                    {
                        backgroundColor: colors.background,
                    },
                ]}
                animation="fadeInUpBig"
            >
                <Text
                    style={[
                        styles.title,
                        {
                            color: colors.text,
                        },
                    ]}
                >
                    Bienvenue sur Outta
        </Text>
                <Text style={styles.text}>Se connecter avec un compte</Text>
                <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignInScreen")}
                        style={[
                            styles.signIn,
                            {
                                borderColor: "#7349BD",
                                borderWidth: 1,
                                justifyContent: "center",
                                alignItems: "center",
                            },
                        ]}>
                        <Text
                            style={[styles.textSign, { color: "#7349BD" }]}>
                            Connexion
                    </Text>
                    </TouchableOpacity>
                </View>

            </Animatable.View>
        </View>
    );
};
/*
const mapStateToProps = (state: any) => ({
  user: state.user,
  userToken: state.userToken,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
*/

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7349BD",
    },
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    logo: {
        width: height_logo,
        height: height_logo,
    },
    title: {
        color: "#05375a",
        fontSize: 30,
        fontWeight: "bold",
    },
    text: {
        color: "grey",
        marginTop: 5,
    },
    button: {
        alignItems: "flex-end",
        marginTop: 30,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        flexDirection: "row",
    },
    textSign: {
        color: "white",
        fontWeight: "bold",
    },
});