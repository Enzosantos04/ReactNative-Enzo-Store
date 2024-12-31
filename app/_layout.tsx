import { Stack } from "expo-router";


// stack for index page 
export default function RootLayout(){
    return (
        <Stack screenOptions={{headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(tabs)" options={{ title: 'Products'}} />
            <Stack.Screen name="product/[id]" options={{ headerShown: true }} />
        </Stack>
    )
}