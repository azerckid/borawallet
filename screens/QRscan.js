import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";

function QRscan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`${data}`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").height,
          margin: -80,
        }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}></BarCodeScanner>
        {scanned && (
          <TouchableOpacity
            onPress={() => setScanned(false)}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={styles.button}>Tap to Scan Again</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  barCodeView: {
    width: "100%",
    height: "100%",
    marginBottom: 40,
  },
  button: {
    marginTop: 400,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    width: 300,
    backgroundColor: "#ff8ac2",
    color: "#ffffff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default QRscan;
