import React, { View, Text, StyleSheet, Pressable } from "react-native";
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Setting = () => {
    const navigation = useNavigation()
    const handlePlay = () =>{
        navigation.navigate('Play');
    }

    return (
        <View style={styles.CtnBottom}>
            <Pressable>
              <Icon style={styles.Iconbtn} name="play" size={20} color="#FE2E54" onPress={handlePlay} />
              <Text style={styles.CtnBottom_text}>Play</Text>
            </Pressable>
            <Pressable>
            <Icon style={styles.Iconbtn} name="gear" size={20} color="#FE2E54"  />
              <Text style={styles.CtnBottom_text}>Settings</Text>
            </Pressable>
        </View>
    );
  }
  
const styles = StyleSheet.create({

    BottomBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        padding:'auto'
    },
    BottomBtn_Tap:{
        width: '90%',
        marginVertical: 5,
        paddingVertical: 20,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        borderRadius:3
    },
    BottomBtn_Text:{
        color: '#FE2E54',
        fontSize:18
    },
    CtnBottom:{
      flex:1,
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center",
      marginTop:10,
      backgroundColor:"#FFFFFF"
    },
    CtnBottom_text:{
      color: '#FE2E54'
    },
    Iconbtn:{
      textAlign:"center"
    }

  })

  export default Setting;