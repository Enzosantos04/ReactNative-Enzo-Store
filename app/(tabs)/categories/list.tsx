import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {  router } from 'expo-router';
import { getAllCategories } from '../../../services/category';
import { CategoryItem } from '../../../components/category_item';

// function getAllCategories is coming from '../../services/category';
export default function ScreenList() {
 const categories = getAllCategories();
  return (
    <View style={styles.container}>
       <FlatList 
     data={categories}
     renderItem={({item}) => (
      <CategoryItem data={item} />
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
