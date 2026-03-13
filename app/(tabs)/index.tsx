import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../src/store/slices/product_details_slice";

const Home = () => {

  const [selected, setSelected] = useState("");
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  async function getProducts(category, type) {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();
      setProducts(data);
      setSelected(type);
    } catch (error) {
      console.log(error);
    }
  }

  function handleProduct(product) {
    dispatch(setSelectedProduct(product));
    router.push("/product_details");
  }

  function logout() {
    router.replace('../');
  }

  const renderProduct = ({ item }) => (
    <Pressable
      style={styles.productCard}
      onPress={() => handleProduct(item)}
    >
      <View>
        <View style={styles.topImage}>
          <Image
            source={{ uri: item.image }}
            style={styles.productImage}
          />
        </View>
        <View style={styles.infoProducts}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.description} numberOfLines={4}>
            {item.description}
          </Text>
          <Text style={styles.price}>
            ${item.price}
          </Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.mainView}>
      <View style={styles.buttonOptions}>
        <TouchableOpacity
          style={[
            styles.button,
            selected === "men" && styles.activeButton
          ]}
          onPress={() => getProducts("men%27s%20clothing", "men")}
        >
          <Text style={styles.text}>Men's Products</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selected === "women" && styles.activeButton
          ]}
          onPress={() => getProducts("women%27s%20clothing", "women")}
        >
          <Text style={styles.text}>Women's Products</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productsArea}>
        {products.length > 0 ? (
          <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.productsContainer}
          />
        ) : (
          <Text style={styles.info}>Press a button to see the products.</Text>
        )}
        <Pressable style={styles.fab}>
          <Text style={{color:"#fff", fontSize:24}}>+</Text>
        </Pressable>
        <TouchableOpacity 
          style={styles.buttonExit}
          onPress={logout}
        >
          <Text style={styles.buttonExitText}>Exit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
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