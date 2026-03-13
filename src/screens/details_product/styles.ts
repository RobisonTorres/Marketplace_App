import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  imageArea: {
    width: "100%",
    height: 235,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DADADA33"
  },
  image: {
    width: "70%",
    height: "70%",
    resizeMode: "contain"
  },
  infoArea: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 8
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000"
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E53935"
  },
  oldPrice: {
    fontSize: 16,
    color: "#888",
    textDecorationLine: "line-through"
  },
  description: {
    fontSize: 15,
    color: "#555",
    lineHeight: 20
  }
});