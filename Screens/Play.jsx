import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback ,Dimensions  } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
const Play = () => {
     const [Language, setLanguage] = useState('en');
     const [Index, setIndex] = useState(0);
     const navigation = useNavigation()
     const handleSetting = () =>{
        navigation.navigate('Setting');
        }
    const Data = [ 
        { en: "Hello", vi: "xin chào0" },
        { en: "Apple", vi: "Táo" },
        { en: "Table", vi: "Bàn" }
    ]
                
        const [languageDate, setLanguageDate] = useState(Data);
        const [currentData, setCurrentData] = useState(languageDate[0]);

        const toggleLanguage = () => {
            if (Language === 'en') {
                setLanguage('vi');
            } else {
               setLanguage('en');
         }
            };
            
            
        const nextItem = () => {
            setIndex((Index) => (Index + 1) % languageDate.length);
            setCurrentData(languageDate[Index]);
            };
            
            
        const previousItem = () => {
            setIndex((Index)=> (Index -1 + languageDate.length) % languageDate.length);
            setCurrentData(languageDate[Index]);
        };
            
        const handleRemove = () => {
        const newData = [...languageDate];
            if (newData.length > 0) {
                newData.splice(Index, 1);
                setLanguageDate(newData);
            
            if (newData.length === 0) {
                setCurrentData({});
                setIndex(0);
            } else if (Index >= newData.length) {
                setIndex(newData.length - 1);
                setCurrentData(newData[newData.length - 1]);
            } else {
                setCurrentData(newData[Index]);
                }
            }
                };
                
            const handReset = () => {
            setLanguageDate(Data);
            setIndex(0); // Đặt lại chỉ mục về 0
            setCurrentData(Data[0]); // Đặt lại currentData thành phần đầu tiên của Data
            };
                
    return(
        <View style={{ paddingBottom:20 }}>
            <View style={styles.viewplay}>
                 <Text style={{ textAlign:'center' ,fontSize:21}}>Play (3 Cards)</Text>
            </View>
            <View style={styles.viewbackground}>
                <TouchableWithoutFeedback onPress={toggleLanguage}>
                    <View style={styles.viewsquare}>
                        <Text style={styles.texttext}>{currentData[Language]}</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.viewbutton}>
                    <TouchableOpacity style={styles.button} onPress={previousItem}>
                        <Text style={styles.buttonText}>Previous</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={nextItem}>
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ paddingBottom: 10 }}>
                    <TouchableOpacity style={styles.button1} onPress={handleRemove} >
                        <Text style={styles.buttonText1}>Remove From Deck</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.buttonText1}  onPress={handReset}>Reset Deck</Text>
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