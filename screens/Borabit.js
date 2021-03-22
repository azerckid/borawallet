import React from "react";
import { View, Text, StyleSheet } from "react-native";

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

export default ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <Text>Borabit</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Text
          onPress={() => navigation.navigate("Search")}
          style={styles.titleText}
        >
          Search
        </Text>
      </View>
    </View>
  );
};
