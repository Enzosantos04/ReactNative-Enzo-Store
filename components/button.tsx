import { StyleSheet, Text, Pressable } from 'react-native';

// props for button

type PropsBtn = {
    title: string,
    onPress: () => void,
}


// component for button it will display on index.tsx
// this function will have the button with style applied 
export const Button = ({title, onPress}: PropsBtn) => {
return (
      <Pressable style={styles.indexBtn} onPress={onPress}><Text style={styles.btnText}>{title}</Text></Pressable>
)
}

const styles = StyleSheet.create({
   
    indexBtn: {
     
      backgroundColor: '#206bb9',
      borderRadius: 10,
      marginTop: 10,
      paddingHorizontal: 25,
      paddingVertical: 15,
    },
  
    btnText:{
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    
    }
  });