import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const Play = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [deck, setDeck] = useState(['あ','a', 'い', 'う', 'え', 'お']); // Initialize the deck

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
    const updatedDeck = [...deck];
    updatedDeck.splice(currentIndex, 1);
    setDeck(updatedDeck); // Update the deck state
  };

  const handleReset = () => {
    setCurrentIndex(0);
  };

  return (
    <View>
      <View style={styles.viewplay}>
        <Text style={styles.textplay}>Play ({deck.length} Cards)</Text>
      </View>
      <View style={styles.viewbackground}>
        <View style={styles.viewsquare}>
          <Text style={styles.texttext}>{deck[currentIndex]}</Text>
        </View>
        <View style={styles.viewbutton}>
          <TouchableOpacity style={styles.button} onPress={handlePrevious}>
            <Text style={styles.buttonText}>Previous</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingBottom: 10 }}>
          <TouchableOpacity style={styles.button1} onPress={handleRemoveFromDeck}>
            <Text style={styles.buttonText1}>Remove From Deck</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button1}>
            <Text style={styles.buttonText1} onPress={handleReset}>Reset Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};



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
      }
})
export default Play;