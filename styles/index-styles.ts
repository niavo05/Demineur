import { StyleSheet } from "react-native";

export const indexStyles = StyleSheet.create({
  horizontalView: {
    display: "flex",
    flexDirection: "row",
  },
  bouton: {
    paddingBlock: 10,
    width: 200,
    backgroundColor: "#00a2ffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 2,
  },
  boutonText: {
    color: "white",
  },
  textContainer: {
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
