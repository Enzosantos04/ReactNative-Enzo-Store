import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {  router, useLocalSearchParams, Stack } from 'expo-router';
import {getCategoryById} from '../../../services/category';
import {ProductItem} from '../../../components/product_item';
import { getProductsByCategory } from '../../../services/product';


// id page With flat list - it will get the product by its id
// Component ProductItem from component/product_item
// function getAllProducts is coming from '../../services/product';
// to get the id i need use import {useLocalSearchparams} from 'expo-router' and const {id} = useLocalSearchparams();
// using the function getProductsByCategory feeded by idCategory will return only the products with correct id 
export default function ScreenHome() {
   const {id} = useLocalSearchParams();
   const idCategory = parseInt(id as string); // parseInt will make id be a string and 'as string' wiill reinforce it 
  const category = getCategoryById(idCategory);
  //!category means if not find the category, if not find category will return router.back 
  if (!category) {
    return router.back();
  }
// this const products use the function getProductsByCategory feeding idCategory as parameter
  const products = getProductsByCategory (idCategory);
  return (
    
    <View style={styles.container}>
        <Stack.Screen options={{title: category.title}} />
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
