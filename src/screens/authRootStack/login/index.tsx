import React, { memo, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Background from "@components/Background";
import Logo from "@components/Logo";
import Header from "@components/Header";
import Button from "@components/Button";
import TextInput from "@components/TextInput";
import BackButton from "@components/BackButton";
import { theme } from "@config/core/theme";
import { emailValidator, passwordValidator } from "@config/core/utils";
import { Navigation } from "@models";
import { userMethod } from "@redux/user/actions";
import { reductionMethod } from "../../../redux/reduction/actions";
import { Reduction, Article, Franchise } from "../../../models";
import Toast from "@components/Toast";

type Props = {
  navigation: Navigation;
};

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const _onLoginPressed = async () => {
    if (loading) return;

    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setLoading(true);

    const article: Article = {
      id: 1,
      libelle: "Coca",
      categorie: { id: 1, libelle: "Boisson" },
      prix: 9.99,
      image: "@assets/BitConnect.png",
      createdDate: new Date(),
    };

    const franchise: Franchise = {
      id: 1,
      libelle: "Mc Donald",
      categorie: { id: 1, libelle: "FAST FOOD" },
      Restaurants: null,
      image: "@assets/BitConnect.png",
      createdDate: new Date(),
    };

    const reduction: Reduction = {
      id: 1,
      pourcentageReduction: 50,
      prixAvecReduction: 4.99,
      startDate: new Date(),
      endDate: new Date(),
      createdDate: new Date(),
      jourRestant: 28,
      article: article,
      franchise: franchise,
    };

    await userMethod.signIn(email.value, password.value);
    //await reductionMethod.insert(reduction);
    //await reductionMethod.getAll();
    /*
    if (response.error) {
      setError(response.error);
    }
    */

    setLoading(false);
    navigation.navigate("Dashboard");
  };

  return (
    <View>
      <BackButton goBack={() => navigation.navigate("HomeScreen")} />

      <Logo />

      <Header>Welcome back.</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        autoCapitalize="none"
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPasswordScreen")}
        >
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button loading={loading} mode="contained" onPress={_onLoginPressed}>
        Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <Toast message={error} onDismiss={() => setError("")} />
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

export default memo(LoginScreen);
