import React, { useState } from "react";
import { TouchableOpacity, TextInput, View, Text } from "react-native";
import { Button, Input } from "react-native-elements";
import QRCode from "react-native-qrcode-svg";
import firebase from "../firebase/fire";

const QRgen = ({ navigation }) => {
  const [text, setText] = useState();
  const [error, setError] = useState("");
  const address = "0x9C2D26b8889348ca869D9e9F6298D11bbA88876B"
  
  console.log(text)
  console.log(typeof text)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 50,
      }}>
      <Text style={{marginTop:150}}>전송받을 코인의 갯수</Text>
      <TextInput
        style={{ height: 40, marginTop: 0, marginBottom: 20 }}
        placeholder="전송받을 코인 갯수"
        keyboardType = 'numeric'
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />
      
      {text ? <QRCode value={address + "|" + text} size={200}></QRCode> : null}
      <Text style={{marginTop:10}}>전송받을 코인의 갯수가 {text}개 맞습니까?</Text>
      <Text style={{marginTop:10}}>전송받을 주소는</Text>
      <Text style={{marginTop:0}}>[{address}]</Text>
    </View>
  );
};

export default QRgen;
