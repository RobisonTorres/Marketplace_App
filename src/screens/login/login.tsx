import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from 'react-redux';
import { setUser } from "../../store/slices/user_slice";
import { styles } from "./styles";

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [credentialError, setCredentialError] = useState(false);

  function checkCredential() {
    return email === 'host' && password === '123';
  }

  function loginHome() {
    setErrorEmail(false);
    setErrorPassword(false);
    setCredentialError(false);

    if (!email) setErrorEmail(true);
    if (!password) setErrorPassword(true);
    if (!email || !password) return;

    if (checkCredential()) {
      dispatch(setUser({ name: 'Host User', email: email }));

      setEmail('');
      setPassword('');

      router.replace('/(tabs)');
    } else {
      setCredentialError(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <View style={styles.topBackground} />
        <View style={styles.bottomBackground} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Welcome Back!</Text>
          <Text style={styles.subtitle}>
            Enter your information to access your account.
          </Text>
        </View>
        <View style={styles.card}>
          {credentialError && (
            <Text style={styles.credentialError}>
              Invalid username or password
            </Text>
          )}
          <View style={styles.field}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={[styles.input, errorEmail && styles.inputError]}
              onChangeText={setEmail}
              value={email}
              autoCapitalize="none"
            />
            {errorEmail && (
              <View style={styles.errorContainer}>
                <Ionicons name="alert-circle-outline" size={14} color="#E53935" />
                <Text style={styles.errorText}>Required field</Text>
              </View>
            )}
          </View>
          <View style={styles.field}>
            <Text style={styles.label}>Password</Text>
            <View style={[
              styles.inputContainer,
              errorPassword && styles.inputError
            ]}>
              <TextInput
                style={styles.hide}
                onChangeText={setPassword}
                value={password}
                secureTextEntry
              />
              <Ionicons
                name="eye-off-outline"
                size={15}
                color="#777"
                style={styles.icon}
              />
            </View>
            {errorPassword && (
              <View style={styles.errorContainer}>
                <Ionicons name="alert-circle-outline" size={14} color="#E53935" />
                <Text style={styles.errorText}>Required field</Text>
              </View>
            )}
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={loginHome}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};