import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import {Clipboard} from 'react-native';
import QRCode from "react-native-qrcode-svg";
import { FontAwesome } from '@expo/vector-icons';
import axios from "../api"

const fetchUrl = "/users"

export default ({ navigation }) => {
  const [address, setAddress] = useState("")
  const [copiedText, setCopiedText] = useState("")

  const copyToClipboard = async() => {
    await Clipboard.setString(address);
    alert(address)
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    setCopiedText(text);
    alert(copiedText)
    
  };

  useEffect(()=>{
    const fetchData=async()=>{
      const request = await axios.get(fetchUrl,{
        params:{
          ID: 12345,
          password : 12345,
        }
      })
      alert(JSON.stringify(request.data.data[0].avatar))
      console.log(request.data)
      setAddress("0x9C2D26b8889348ca869D9e9F6298D11bbA88876B")
    }
    fetchData()
  },[address]);

  return (
    <View style={{ backgroundColor: "white", padding: 10, flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
        }}>
        {/* <Image style={styles.logo} source={require("../assets/ddmcoin.png")} />       */}
      </View>
      <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center", paddingHorizontal: 80, marginBottom: 20}}>
        <Text style={{flex:0.7, fontSize:14, marginRight: 30}}>
          {address}
        </Text>
        <TouchableOpacity onPress={fetchCopiedText} style={{flex:0.3}}>
          <Text style={{marginBottom: 5}}>copy</Text>
          <FontAwesome name="copy" size={32} color="black" />
        </TouchableOpacity> 
      </View>  
       

      <View style={{alignItems:"center"}}>
        {address ? <QRCode value={address} size={200}></QRCode> : null}
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
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
});
