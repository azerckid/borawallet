import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  TextInput,
  View,
  Text,
  StyleSheet,
  Platform,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import axios from "../api";

const fetchUrl = "/users";

const QRgen = ({ navigation }) => {
  const [address, setAddress] = useState("");
  const [text, setText] = useState();
  const [error, setError] = useState("");
  //const address = "0x9C2D26b8889348ca869D9e9F6298D11bbA88876B"

  console.log(text);
  console.log(typeof text);
  console.log(address);

  useEffect(() => {
    const fetchData = async () => {
      console.log("action");
      const request = await axios.get(fetchUrl, {
        params: {
          ID: 12345,
          password: 12345,
        },
      });

      // alert(JSON.stringify(request.data.data[0].avatar))
      console.log(request.data);
      setAddress("0x9C2D26b8889348ca869D9e9F6298D11bbA88876B");
    };
    fetchData();
  }, [text]);

  let keyboardName =
    Platform.OS === "android" ? "numeric" : "numbers-and-punctuation";
  console.log(Platform.OS);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
      }}>
      <Text style={{ marginTop: 30, marginBottom: 10 }}>
        전송받을 코인의 갯수를 입력하세요.
      </Text>
      <TextInput
        style={styles.coinInput}
        placeholder="전송받을 코인 갯수"
        keyboardType={keyboardName}
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      />

      {address ? (
        <QRCode value={address + "|" + text} size={200}></QRCode>
      ) : null}
      <Text style={{ marginTop: 10 }}>
        전송받을 코인의 갯수가 {text}개 입니다.
      </Text>
      {/* <Text style={{marginTop:10}}>전송받을 주소는</Text>
      <Text style={{marginTop:0}}>[{address}]</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  coinInput: {
    height: 40,
    marginTop: 0,
    marginBottom: 50,
    fontSize: 18,
    backgroundColor: "#efe8ff",
    borderRadius: 30,
    paddingHorizontal: 20,
  },
});

export default QRgen;
