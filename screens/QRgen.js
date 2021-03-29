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
import { instance } from "../api";

const fetchUrl = "/users";

const QRgen = ({ navigation }) => {
  const [address, setAddress] = useState("");
  const [text, setText] = useState("0");
  const [error, setError] = useState("");
  //const address = "0x9C2D26b8889348ca869D9e9F6298D11bbA88876B"

  console.log(text);
  console.log(typeof text);
  console.log(address);

  useEffect(() => {
    const fetchData = async () => {
      console.log("action");
      const request = await instance.get(fetchUrl, {
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

  let requestedPrice;
  const Numberfy = parseInt(text);
  requestedPrice = Numberfy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  console.log("requestedPrice", requestedPrice);

  console.log(typeof requestedPrice);

  let keyboardName =
    Platform.OS === "android" ? "numeric" : "numbers-and-punctuation";
  console.log(Platform.OS);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#ededed",
      }}>
      <View
        style={{
          flexDirection: "column",
          paddingHorizontal: 30,
          paddingVertical: 10,
          marginTop: 10,
          marginBottom: 20,
          backgroundColor: "#3e4a85",
          borderRadius: 10,
        }}>
        <Text
          style={{
            marginTop: 10,
            marginBottom: 10,
            color: "white",
            fontSize: 18,
            textAlign: "center",
          }}>
          Request Amount
        </Text>
        <TextInput
          style={styles.coinInput}
          placeholder="Please enter the requested amount"
          keyboardType={keyboardName}
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
      </View>
      <View
        style={{
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 10,
          paddingVertical: 40,
          paddingHorizontal: 65,
          marginBottom: 10,
        }}>
        <Text style={{ marginTop: -20, fontSize: 22, textAlign: "center" }}>
          Requested Coin
        </Text>
        <Text style={{ marginBottom: 15, fontSize: 18 }}>
          {requestedPrice} coin
        </Text>
        {address ? (
          <QRCode
            value={address + "|" + text}
            size={200}
            color="#3e4a85"></QRCode>
        ) : null}
      </View>

      {/* <Text style={{marginTop:10}}>전송받을 주소는</Text>
      <Text style={{marginTop:0}}>[{address}]</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  coinInput: {
    height: 40,
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#efe8ff",
    borderRadius: 5,
    paddingHorizontal: 10,
    textAlign: "center",
  },
});

export default QRgen;
