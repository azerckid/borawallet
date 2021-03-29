import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Clipboard } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { FontAwesome } from "@expo/vector-icons";
import { instance } from "../api";

const fetchUrl = "/users";

export default ({ navigation }) => {
  const [address, setAddress] = useState("");
  const [copiedText, setCopiedText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(fetchUrl, {
        params: {
          ID: 12345,
          password: 12345,
        },
      });
      console.log(request.data);
      setAddress("0x9C2D26b8889348ca869D9e9F6298D11bbA88876B");
    };
    fetchData();
  }, [address]);

  const copyToClipboard = async () => {
    await Clipboard.setString(address);
    alert(address);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
    alert(copiedText);
  };

  useEffect(() => {}, []);

  return (
    <View
      style={{
        backgroundColor: "#ededed",
        padding: 10,
        justifyContent: "flex-start",
      }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 5,
          paddingVertical: 10,
          marginBottom: 0,
          backgroundColor: "white",
          borderRadius: 10,
        }}>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 18 }}>거래내역</Text>
          <Text style={{ fontSize: 13, paddingLeft: 5, paddingTop: 5 }}>
            {address}
          </Text>
          <Text style={{ fontSize: 15, paddingLeft: 5 }}>잔액 :</Text>
          <Text style={{ fontSize: 15, paddingLeft: 5 }}>잔액 :</Text>
          <Text style={{ fontSize: 15, paddingLeft: 5 }}>잔액 :</Text>
          <Text style={{ fontSize: 13, paddingLeft: 5, paddingTop: 5 }}>
            {address}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin",
  },
  titleText: {
    color: "#2b92ff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
