import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Clipboard } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { FontAwesome } from "@expo/vector-icons";
import { instance } from "../../api";
import * as React from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Slide from "../../components/Movies/Slide";
import { ScrollView } from "react-native";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horiziontal";
import ScrollContainer from "../../components/ScrollContainer";
import Transaction from "../../components/Transaction";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 5px;
`;

const Container = styled.View``;

const fetchUrl = "/users";

export default ({ refreshFn, loading,navigation }) => {
  const [address, setAddress] = useState("");
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = async () => {
    await Clipboard.setString(address);
    alert(address);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
    alert(copiedText);
  };

  useEffect(() => {
    const fetchData = async () => {
      const request = await instance.get(fetchUrl, {
        params: {
          ID: 12345,
          password: 12345,
        },
      });
      alert(JSON.stringify(request.data.data[0].avatar));
      // console.log(request.data);
      setAddress("0x9C2D26b8889348ca869D9e9F6298D11bbA88876B");
    };
    fetchData();
  }, [address]);

  return (
    <ScrollContainer
    refreshFn={refreshFn}
    vertical
    style={{
      backgroundColor: "#3e4a85",
    }}
    contentContainerStyle={{
      justifyContent: loading ? "center" : "flex-start",
    }}>
        {loading ? (
        <ActivityIndicator />
      ) : (        
        <Container>            
            <View
            style={{
                backgroundColor: "#ededed",
                padding: 10,
                justifyContent: "flex-start",
            }}>
                <View
                    style={{
                    flexDirection: "column",
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    marginBottom: 10,
                    backgroundColor: "#3e4a85",
                    borderRadius: 10,
                    }}>
                    <Text
                    style={{
                        fontSize: 18,
                        color: "white",
                        textAlign: "center",
                        marginTop: 15,
                    }}>
                        Your Wallet Account
                    </Text>
                    <View style={{ justifyContent: "flex-start", marginVertical: 20 }}>
                        <Text style={{ fontSize: 15, paddingLeft: 5, color: "white" }}>
                            Total amount :
                        </Text>
                        <Text style={{ fontSize: 15, paddingLeft: 5, color: "white" }}>
                            Order amount :
                        </Text>
                        <Text style={{ fontSize: 15, paddingLeft: 5, color: "white" }}>
                            Withdraw amout :
                        </Text>
                        <Text style={{ fontSize: 15, paddingLeft: 5, color: "white" }}>
                            LockUp amout :
                        </Text>
                    </View>
                    <TouchableOpacity
                    onPress={fetchCopiedText}
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        marginBottom: 15,
                    }}>
                        <Text style={{ fontSize: 12, paddingTop: 5, color: "white" }}>
                            {address}
                        </Text>
                        <FontAwesome name="copy" size={18} color="white" />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: 10,
                    paddingVertical: 50,
                    marginBottom: 10,
                    }}>
                    {address ? (
                    <QRCode value={address} size={200} color="#3e4a85"></QRCode>
                    ) : null}
                </View>
                <View
                    style={{
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: 10,
                    paddingVertical: 50,
                    marginBottom: 10,
                    }}>
                    {address ? (
                    <QRCode value={address} size={200} color="#3e4a85"></QRCode>
                    ) : null}
                </View>
            </View>            
        </Container>     
      )}      
    </ScrollContainer>
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
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
});