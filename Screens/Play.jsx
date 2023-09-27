import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback ,Dimensions  } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
const Play = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [deck, setDeck] = useState(['Hello','Xin chào','apple', 'táo', 'banana', 'chuối']); // Initialize the deck
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

    // Xác định vị trí chạm và xử lý dựa trên vị trí đó
    const handleTouch = (event) => {
        const { locationX } = event.nativeEvent; // Lấy vị trí ngang của điểm chạm
        const screenWidth = Dimensions.get('window').width; // Lấy chiều rộng của màn hình

        // Kiểm tra xem điểm chạm nằm ở bên trái hay bên phải màn hình
        if (locationX < screenWidth / 2) {
        // Chạm vào bên trái màn hình
        handlePrevious(); // Gọi hàm xử lý khi chạm vào bên trái
        } else {
        // Chạm vào bên phải màn hình
        handleNext(); // Gọi hàm xử lý khi chạm vào bên phải
        }
    };

    const handleReset = () => {
        setCurrentIndex(0);
    };
    
    return(
        <View style={{ paddingBottom:20 }}>
            <View style={styles.viewplay}>
                 <Text style={{ textAlign:'center' ,fontSize:21}}>Play (46 Cards)</Text>
            </View>
            <View style={styles.viewbackground}>
                <TouchableWithoutFeedback onPress={handleTouch}>
                    <View style={styles.viewsquare}>
                        <Text style={styles.texttext}>{deck[currentIndex]}</Text>
                    </View>
                </TouchableWithoutFeedback>
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
                <View style={{ flexDirection:'column',justifyContent:'center',alignContent:'center' }} >
                    <Icon name="home" size={30} color="#F08080" />
                    <Text style={styles.textplay}>Play</Text>
                </View>
                <View style={{ flexDirection:'column',justifyContent:'center',alignContent:'center' }} >
                    <Icon name='settings' size={30} color={'gray'} style={{ position:'relative',left:5 }} onPress={handleSetting}/>
                    <Text style={styles.textsetting} >Setting</Text>
                </View>
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
    viewbackground:{
        backgroundColor:'#F8F8FF',
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20
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
        paddingTop:10,
        paddingBottom:10
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
        paddingLeft:100,
        paddingBottom:20,
        paddingRight:100,
        height:100,
        borderTopWidth:1,
        borderTopColor:'#F8F8FF',
   
      },
      textplay:{
        marginLeft:2,
        color:'#F08080'
      },
      
})
export default Play;