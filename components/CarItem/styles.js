import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  carContainer: {
    width: "100%",
    height: "100%",
  },
  titles: {
    // marginBottom: "10%",
    marginTop: "40%",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  title: { fontSize: 40, fontWeight: "700" },
  subTitle: {
    color: "#5c5e62",
  },
  btn1Container: {
    // flexDirection: "column",
    position: "absolute",
    top: "115%",
    width: "100%",
  },
  btn2Container: {
    // flexDirection: "column",
    position: "absolute",
    top: "122%",
    width: "100%",
  },
});

export default styles;
