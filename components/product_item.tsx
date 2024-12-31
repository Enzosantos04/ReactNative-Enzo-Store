import { StyleSheet, Text, Pressable, Image, View } from 'react-native';
import { Product } from '../types/product';
import { Link } from 'expo-router';

 // to fixed round the number
// type Props getting data: Products from folder types
// ${template literals}

// component for product it will get from types/product and it will display on home.tsx
type Props = {
data: Product,
}


// function to display products using props 
export const ProductItem = ({data}: Props) => {
    return (
        <View style={styles.containerGeral}>
        <Link href={`/product/${data.id}`} asChild> 
        <Pressable style={styles.container}>
            <Image source={{uri: data.image}} style={styles.image} />
            <View style={styles.info}>
                    <Text style={styles.title}>{data.title}</Text>
                    <Text style={styles.description}>{data.description}</Text>
                    <Text style={styles.price}>${data.price.toFixed(2)}</Text>
                </View>
               
        </Pressable>
        </Link>
        </View>
    )
}


const styles = StyleSheet.create({
   
     container: {
       
         padding: 10,
         marginTop: 10,
         borderRadius: 10,
         flexDirection: 'row',
         width: '100%',

     },
     containerGeral: {
      
         borderRadius: 10,
         flexDirection: 'row',
         width: '100%',

     },
   
     image:{
        height: 100,
        width: 100,
        borderRadius: 5,
        backgroundColor: '#CCCCCC'
     },


     info:{
       marginLeft: 10,
        width: '70%',
        flex: 1
     },

     title:{
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
     },
     description:{
     
        fontSize:16,
        color: '#6E6E6E',
     },
     price:{
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 8,
        color: 'black',
        marginBottom: 10,
        padding: 5,
        textAlign: 'right',

     },

 });
