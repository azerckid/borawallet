import React, { useState } from "react";
import { TouchableOpacity, TextInput, View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import QRCode from "react-native-qrcode-svg";
import firebase from "../firebase/fire";

const QRgen = ({ navigation }) => {
  const [text, setText] = useState("");

  const [error, setError] = useState("");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
      }}>
      <TextInput
        style={{ height: 40, marginBottom: 20 }}
        placeholder="Type Address!"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />

      {text ? <QRCode value={text} size={200}></QRCode> : null}
    </View>
  );
};

export default QRgen;
