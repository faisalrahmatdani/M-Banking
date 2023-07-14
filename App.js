import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Wrapper from "./src";

export default function App() {
  return <Wrapper />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
