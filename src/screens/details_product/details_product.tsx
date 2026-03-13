import React from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector } from "react-redux";
import { styles } from './styles';

export const ProductDetails = () => {

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