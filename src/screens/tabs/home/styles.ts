import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#fff"
  },
  buttonOptions: {
    flexDirection: "row",
    width: "100%",
    height: 50
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "transparent"
  },
  activeButton: {
    borderBottomColor: "#2567E8"
  },
  text: {
    fontSize: 16
  },
  productsArea: {
    flex: 1,
    width: "100%"
  },
  productsContainer: {
    paddingBottom: 75,
    paddingTop: 40,
    paddingHorizontal: 10
  },
  productCard: {
    flex: 1,
    margin: 8,
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#8f8f8f"
  },
  topImage: {
    width: "100%",
    height: 120,
    borderBottomWidth: 1,
    borderColor: "#8f8f8f",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  productImage: {
    width: "80%",
    height: 90,
    resizeMode: "contain"
  },
  infoProducts: {
    padding: 10
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10
  },
  description: {
    fontSize: 12,
    color: "#4e4c4c",
    marginBottom: 8
  },
  price: {
    fontSize: 16,
    fontWeight: "bold"
  },
  buttonExit: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    width: "80%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E63535",
    borderRadius: 8
  },
  buttonExitText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600"
  },
  info: {
    marginTop: 200,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  fab: {
  position: "absolute",
  right: 20,
  bottom: 90,
  width: 55,
  height: 55,
  borderRadius: 30,
  backgroundColor: "#2567E8",
  justifyContent: "center",
  alignItems: "center",
  elevation: 5
  }
});