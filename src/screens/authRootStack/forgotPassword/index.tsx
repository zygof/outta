import React, { memo, useState } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { emailValidator } from "@config/core/utils";
import Background from "@components/Background";
import BackButton from "@components/BackButton";
import Logo from "@components/Logo";
import Header from "@components/Header";
import TextInput from "@components/TextInput";
import { theme } from "@config/core/theme";
import Button from "@components/Button";
import { Navigation } from "@models";
import { sendEmailWithPassword } from "@services/api/auth-api";
import Toast from "@components/Toast";

type Props = {
  navigation: Navigation;
};

const ForgotPasswordScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ value: "", type: "" });

  const _onSendPressed = async () => {
    if (loading) return;

    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }

    setLoading(true);

    const response = await sendEmailWithPassword(email.value);

    if (response.error) {
      setToast({ type: "error", value: response.error });
    } else {
      setToast({
        type: "success",
        value: "Email with password has been sent."
      });
    }

    setLoading(false);
  };

  return (
    <View>
      <BackButton goBack={() => navigation.navigate("LoginScreen")} />

      <Logo />

      <Header>Restore Password</Header>

      <TextInput
        label="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Button
        loading={loading}
        mode="contained"
        onPress={_onSendPressed}
        style={styles.button}
      >
        Send Reset Instructions
      </Button>

      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.label}>← Back to login</Text>
      </TouchableOpacity>

      <Toast
        type={toast.type}
        message={toast.value}
        onDismiss={() => setToast({ value: "", type: "" })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    width: "100%",
    marginTop: 12
  },
  button: {
    marginTop: 12
  },
  label: {
    color: theme.colors.secondary,
    width: "100%"
  }
});

export default memo(ForgotPasswordScreen);
