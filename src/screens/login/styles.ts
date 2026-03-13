import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  topBackground: {
    flex: 1,
    backgroundColor: "#2567E8",
  },
  bottomBackground: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    width: 334,
    alignItems: "center",
    gap: 16,
    marginBottom: 36,
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    color: "white",
    textAlign: "center",
    fontWeight: "400",
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 20,
    color: "white",
    textAlign: "center",
    fontWeight: "300",
  },
  card: {
    width: 334,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 50,
    gap: 20,
    borderColor: "#BDBDBD",
    borderWidth: 1,
  },
  field: {
    gap: 4,
  },
  label: {
    fontSize: 14,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 37,
    borderColor: "#BDBDBD",
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  button: {
    backgroundColor: "#2567E8",
    height: 37,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 4,
    height: 37
  },
  hide: {
    flex: 1,
    height: 37,
    paddingHorizontal: 12
  },
  icon: {
    position: "absolute",
    right: 5,
  },
  inputError: {
    borderColor: "#E53935"
  },
  credentialError: {
    color: "#E53935",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 14
  },
  errorContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 2
  },
  errorText: {
    color: "#E53935",
    fontSize: 12
  },
});