import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Fallback = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../../assets/no_data_image.png")}
        style={{ height: 300, width: 300 }}
      />
      <Text>Start Adding Your Tasks</Text>
    </View>
  );
};

export default Fallback;

const styles = StyleSheet.create({});
