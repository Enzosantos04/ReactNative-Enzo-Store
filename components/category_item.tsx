import { Pressable, Text, StyleSheet, Image, View } from "react-native"
import { Category } from "../types/category"
import {  router } from 'expo-router';
// ${template literals}

// component for category it will get from types/category and it will display on list.tsx
type Props = {
data: Category
}
export const CategoryItem=({data}:Props) =>{
    const handleClick = () => {
       router.push(`/categories/${data.id}`)
    }
    return (
        <Pressable onPress={handleClick} style={styles.container}>
          <Image source={{uri: data.cover}} style={styles.coverImage} resizeMode="cover" />

          <View style={styles.bg}></View>
          <View style={styles.box}>
            <Text style={styles.boxTitle}> {data.title}</Text>
          </View>

        </Pressable>

    )

}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  marginBottom: 10,
   backgroundColor: '#333333',
   borderRadius: 10,
  },

  coverImage: {
    width: 400,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  bg:{ // it will be create a 'backgroud to the image' using marginTop: -150 will bring the view over the image
    height: 150,
    marginTop: -150,
    backgroundColor: '#000000',
    opacity: 0.5,
    borderRadius: 10,
  },

  // this box will bring the view over the image
  box:{
    height: 150,
    marginTop: -150,
    justifyContent:'center',
    alignItems: 'center',
  },

  // this text will be display on the box.
  boxTitle:{
    fontSize: 24,
    color: '#ffffff',
  }

});