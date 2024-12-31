import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Tabs} from 'expo-router';

// all tabs to access the pages
export default function TabLayout(){
    return(
<Tabs screenOptions={{tabBarActiveTintColor:'#206bb9'}}>
    <Tabs.Screen name="home" options={{title:"Products", tabBarIcon: ({color})=><FontAwesome size={28} name='home' color={color}/>}}/>
    <Tabs.Screen name="categories" options={{ headerShown: false,title:"Categories", tabBarIcon: ({color})=><FontAwesome size={28} name='archive' color={color}/>}}/>
</Tabs>
    )
}