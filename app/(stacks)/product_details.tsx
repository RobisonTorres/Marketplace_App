import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSelector } from "react-redux";

const ProductDetails = () => {

  const product = useSelector(
    (state) => state.products.selectedProduct
  );

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>No product selected</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageArea}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
        />
      </View>
      <View style={styles.infoArea}>
        <Text style={styles.title}>
          {product.title}
        </Text>
        <View style={styles.priceRow}>
          <Text style={styles.price}>
            ${product.price}
          </Text>
          <Text style={styles.oldPrice}>
            $50.00
          </Text>
        </View>
        <Text style={styles.description} numberOfLines={12}>
          {product.description}
        </Text>
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({

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