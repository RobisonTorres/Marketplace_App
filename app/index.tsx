import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Home() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorEmail, setErrorEmail] = useState(false)
  const [errorPassword, setErrorPassword] = useState(false)
  const [credentialError, setCredentialError] = useState(false)

  function checkCredential() {  
    return email === 'host' && password === '123'
  }

  function loginHome() {

    setErrorEmail(false)
    setErrorPassword(false)
    setCredentialError(false)

    if (!email) {
      setErrorEmail(true)
    }

    if (!password) {
      setErrorPassword(true)
    }

    if (!email || !password) return

    if (checkCredential()) {
      setEmail('')
      setPassword('')
      router.push('./(tabs)')
    } else {
      setCredentialError(true)
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  topBackground: {
    flex: 1,
    backgroundColor: "#2567E8",
  },
  bottomBackground: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    width: 334,
    alignItems: "center",
    gap: 16,
    marginBottom: 36,
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    color: "white",
    textAlign: "center",
    fontWeight: "400",
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "300",
  },
  card: {
    width: 334,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 50,
    gap: 20,
    borderColor: "#BDBDBD",
    borderWidth: 1,
  },
  field: {
    gap: 4,
  },
  label: {
    fontSize: 14,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 37,
    borderColor: "#BDBDBD",
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  button: {
    backgroundColor: "#2567E8",
    height: 37,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 4,
    height: 37
  },
  hide: {
    flex: 1,
    height: 37,
    paddingHorizontal: 12
  },
  icon: {
    position: "absolute",
    right: 5,
  },
  inputError: {
    borderColor: "#E53935"
  },
  credentialError: {
    color: "#E53935",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 14
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 2
  },
  errorText: {
    color: "#E53935",
    fontSize: 12
  },
});