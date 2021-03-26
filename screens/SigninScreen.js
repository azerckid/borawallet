import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Image } from "react-native";
import { Input, Text } from "react-native-elements";
import firebase from "../firebase/fire";

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signIn = async () => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      navigation.navigate("Tabs");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/ddmcoin.png")} />
      <Input
        // label="Email"
        value={email}
        placeholder="email"
        onChangeText={setEmail}
        // inputContainerStyle={{ borderBottomWidth: 0 }}
        style={{
          // backgroundColor: "#e3e3e3",
          // borderRadius: 30,
          paddingLeft: 10,
        }}
      />
      <Input
        // label="Password"
        value={password}
        placeholder="password"
        onChangeText={setPassword}
        style={{
          // backgroundColor: "#e3e3e3",
          // borderRadius: 30,
          paddingLeft: 10,
        }}
        secureTextEntry
      />

      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}

      <TouchableOpacity onPress={() => signIn()}>
        <Text style={styles.button}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.message}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: 300,
    backgroundColor: "#ff8ac2",
    color: "#ffffff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  message: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: 300,
    backgroundColor: "#e3e3e3",
    color: "#b0b0b0",
    textAlign: "center",
    fontSize: 14,
    marginBottom: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 70,
  },
});

export default SigninScreen;
