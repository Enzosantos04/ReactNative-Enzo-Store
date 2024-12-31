import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {  router } from 'expo-router';
import {getAllProducts} from '../../services/product';
import {ProductItem} from '../../components/product_item';

// HOME PAGE With flat list
// Component ProductItem from component/product_item
// function getAllProducts is coming from '../../services/product';
export default function ScreenHome() {
  const products = getAllProducts();
  return (
    <View style={styles.container}>
       <FlatList 
     data={products}
     renderItem={({item}) => (
      <ProductItem data={item} />
    )}
    keyExtractor={(item) => item.id.toString()}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
