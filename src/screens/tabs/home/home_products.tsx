import { router } from 'expo-router';
import { useState } from 'react';
import { FlatList, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../../store/slices/product_details_slice";
import { clearUser } from "../../../store/slices/user_slice";
import { styles } from "./styles";

export const Home = () => {

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
    router.push('./(stacks)');
  }

  function logout() {
    dispatch(clearUser());
    router.replace("./(auth)");
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