import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button title="Go to Details" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default Home;
