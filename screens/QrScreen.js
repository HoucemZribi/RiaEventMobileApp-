import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "react-native-axios";

export default function QrScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    // setScanned(true);
    if (data) {
      axios({
        url: "http://192.168.43.149/graphql",
        method: "post",
        data: {
          query: `mutation   checkGuest($qrData:String!) {

   checkGuest(qrData:$qrData)
  }
    
    `,
          variables: {
            qrData: data,
          },
        },
      })
        .then((result) => {
          console.log(result.data.data.checkGuest);
          if (result.data.data.checkGuest === "Invited") {
            alert("Guest invited");
          } else {
            alert("Guest not Invited");
          }
        })
        .catch((err) => console.error(err));

      setScanned(true);
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
