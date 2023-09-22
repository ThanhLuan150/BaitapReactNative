import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
const Play = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [deck, setDeck] = useState(['あ','a', 'い', 'う', 'え', 'お']); // Initialize the deck
    const navigation = useNavigation()
    const handleSetting = () =>{
        navigation.navigate('Setting');
    }
    const handlePrevious = () => {
        if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < deck.length - 1) {
        setCurrentIndex(currentIndex + 1);
        }
    };

    const handleRemoveFromDeck = () => {
        const updatedDeck = [...deck];// tạo ra bản sao  bằng cách sử dụng toán tử spread (...). ta hông thay đổi trực tiếp mảng deck, mà thay vào đó làm việc trên một bản sao của nó.
        updatedDeck.splice(currentIndex, 1);// Loại bỏ phần tử tại vị trí hiện tại khỏi mảng hiện tại 
        setDeck(updatedDeck); // Update the deck state
    };
    const handleTouchNext = () => {
        handleNext(); // Gọi hàm handleNext khi chạm vào màn hình
    };
    const handleTouchPrevious =()=>{
        handlePrevious();
    }

    const handleReset = () => {
        setCurrentIndex(0);
    };
    return(
        <View>
            <View style={styles.viewplay}>
                 <Text style={styles.textplay}>Play (46 Cards)</Text>
            </View>
            <View style={styles.viewbackground}>
                <TouchableOpacity style={styles.viewsquare} onPress={handleTouchNext}>
                    <Text style={styles.texttext}>{deck[currentIndex]}</Text>
                </TouchableOpacity>
                <View style={styles.viewbutton}>
                    <TouchableOpacity style={styles.button} onPress={handlePrevious}>
                        <Text style={styles.buttonText}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleNext}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingBottom: 10 }}>
                    <TouchableOpacity style={styles.button1} onPress={handleRemoveFromDeck} >
                        <Text style={styles.buttonText1}>Remove From Deck</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.buttonText1} onPress={handleReset}>Reset Deck</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.viewnavigator}>
                <Text>Play</Text>
                <Text onPress={handleSetting}>Setting</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    viewplay:{
        backgroundColor:"#fff",
        paddingTop:70,
        paddingBottom:10
    },
    textplay:{
        textAlign:"center",
        fontSize:21
    },
    viewbackground:{
        backgroundColor:'#F8F8FF',
        paddingTop:30,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:30
    },
    viewsquare: {
        backgroundColor: '#F08080', 
        borderRadius:15,
        width: '100%',
        height: 400, 
        justifyContent: 'center',
        alignItems: 'center',
      },
      texttext: {
        fontSize:60, 
        textAlign: 'center',
        color:'white'
      },
      viewbutton:{ 
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:20,
        paddingBottom:20
      },
      button:{
        borderWidth:1,
        borderColor:'#F08080',
        borderRadius:5,
        paddingLeft:30,
        paddingRight:30,
        paddingTop:7,
        paddingBottom:7
      },
      buttonText:{
         fontSize:16,
         color:'#F08080'
      },
      button1:{
        width:'100%',
        borderWidth:1,
        borderColor:'#FFF',
        backgroundColor:'#fff',
        borderRadius:5,
        paddingTop:15,
        paddingBottom:15
      },
      buttonText1:{
        textAlign:'center',
        fontSize:20,
        color:'#F08080'
      },
      viewnavigator:{
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
       
      }
})
export default Play;