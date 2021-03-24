import React, { useState } from "react";
import { TouchableOpacity, TextInput, View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import QRCode from "react-native-qrcode";
import firebase from "../firebase/fire";

const QRgen = ({ navigation }) => {
  const [text, setText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  return (
    <View>
      <TextInput
        style={{ height: 40 }}
        placeholder="Type Address!"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      <Button title="QR code generator" onPress={() => generateQrCode()} />
      {imageUrl ? <QRCode value={text} size={200}></QRCode> : null}
      {/* {imageUrl ? (
        <a href={imageUrl} download>
          <img src={imageUrl} alt="img" />
        </a>
      ) : null} */}
    </View>
  );
};

export default QRgen;
