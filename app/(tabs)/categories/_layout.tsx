import { Stack } from "expo-router";


// stack for categories page 
export default function CategoryLayout(){
    return (
        <Stack screenOptions={{headerShown: true}}>
            <Stack.Screen name="list" options={{title: 'Categories'}} />
            <Stack.Screen name="(tabs)"/>
        </Stack>
    )
}