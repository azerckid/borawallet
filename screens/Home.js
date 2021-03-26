import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white", padding: 10 }}>
      <Text style={styles.titleText}>WELCOME DDS</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
        }}>
        <Image style={styles.logo} source={require("../assets/ddmcoin.png")} />
      </View>
      <Text>
        And so，as this century draws to a close，we are justified in concluding
        that international organization has helped tilt the balance toward the
        domain within which the power of reason prevails. A second attribute
        that the project of international organization shares with science is
        the experimental method. Indeed，international organization is an
        experiment. It is an experiment in human cooperation on a planetary
        scale.
      </Text>
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
    marginBottom: 70,
  },
});
