import { router, Stack, useLocalSearchParams } from "expo-router";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/button";
import { getProductsById } from "../../services/product";


// product/[id] is the same as category/[id] but getting only the products by id 
export default function Screen() {
    const { id } = useLocalSearchParams();
    const idProduct = parseInt(id as string); // parseInt will make id be a string and 'as string' wiill reinforce it 
// to get the id i need use import {useLocalSearchparams} from 'expo-router' and const {id} = useLocalSearchparams();
    const product = getProductsById(idProduct);
    if (!product) return router.back();

    const handleBuyButton = () => {
        alert("Successfully Added to cart." + id );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: product.title }} />
            <ScrollView style={styles.area}>
                <Image
                    style={styles.img}
                    source={{ uri: product.image }}
                    resizeMode="contain"
                />
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <View style={styles.priceArea}>
                    <Text style={styles.price}>$ {product.price.toFixed(2)}</Text>
                </View>
            </ScrollView>
            <View style={styles.buttonArea}>
                <Button
                    title="Buy Now"
                    onPress={handleBuyButton}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 40
    },
    area: {
        flex: 1,
        padding: 10
    },
    buttonArea: {
        padding: 10
    },
    img: {
        
        alignItems: 'center',
        height: 350,
        borderRadius: 10,
        marginBottom: 20
    },
    title: {
        fontSize: 27,
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 15,
        color: '#555555',
        marginBottom: 20
    },
    priceArea: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#CCCCCC'
    },
    price: {
        fontSize: 22,
        textAlign: 'center'
    }
});