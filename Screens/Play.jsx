import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback ,Dimensions  } from 'react-native';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
    const Play = () => {
    // Khai báo và khởi tạo trạng thái Language và Index sử dụng useState.
    // Language lưu trữ ngôn ngữ hiện tại, mặc định là 'en' (tiếng Anh).
    // Index lưu trữ chỉ mục của từ vựng hiện tại trong danh sách, mặc định là 0.
    const [Language, setLanguage] = useState('en');
    const [Index, setIndex] = useState(0);

    // Sử dụng hook useNavigation để có quyền truy cập đối tượng điều hướng.
    const navigation = useNavigation();

    // Hàm handleSetting được gọi khi người dùng chạm vào nút "Setting" để điều hướng đến màn hình "Setting".
    const handleSetting = () => {
    navigation.navigate('Setting');
    }

    // Mảng Data chứa các từ vựng bilingue (tiếng Anh và tiếng Việt).
    const Data = [ 
    { en: "Hello", vi: "xin chào" },
    { en: "Apple", vi: "Táo" },
    { en: "Table", vi: "Bàn" }
    ]

    // Khai báo và khởi tạo các trạng thái khác.
    // languageDate lưu trữ danh sách từ vựng, ban đầu được khởi tạo từ mảng Data.
    const [languageDate, setLanguageDate] = useState(Data);

    // currentData lưu trữ từ vựng hiện tại được hiển thị trên giao diện, ban đầu là từ vựng đầu tiên trong danh sách.
    const [currentData, setCurrentData] = useState(languageDate[0]);

    // Hàm toggleLanguage chuyển đổi giữa ngôn ngữ hiện tại (tiếng Anh và tiếng Việt).
    const toggleLanguage = () => {
    if (Language === 'en') {
        setLanguage('vi'); // Nếu đang là tiếng Anh, chuyển sang tiếng Việt.
    } else {
        setLanguage('en'); // Ngược lại, chuyển sang tiếng Anh.
    }
    };

    // Hàm nextItem được gọi khi người dùng chạm vào nút "Next" để hiển thị từ vựng tiếp theo trong danh sách.
    const nextItem = () => {
    // Tăng chỉ mục Index và chuyển sang từ vựng tiếp theo trong danh sách (lặp lại khi đạt cuối danh sách).
    setIndex((Index) => (Index + 1) % languageDate.length);
    setCurrentData(languageDate[Index]);
    };

    // Hàm previousItem được gọi khi người dùng chạm vào nút "Previous" để hiển thị từ vựng trước đó trong danh sách.
    const previousItem = () => {
    // Giảm chỉ mục Index và chuyển sang từ vựng trước đó trong danh sách (lặp lại khi đạt đầu danh sách).
    setIndex((Index) => (Index - 1 + languageDate.length) % languageDate.length);
    setCurrentData(languageDate[Index]);
    };

    // Hàm handleRemove được gọi khi người dùng chạm vào nút "Remove From Deck" để xóa từ vựng hiện tại khỏi danh sách.
    const handleRemove = () => {
    const newData = [...languageDate];
    if (newData.length > 0) {
        newData.splice(Index, 1); // Xóa từ vựng tại chỉ mục Index khỏi newData.
        setLanguageDate(newData); // Cập nhật danh sách từ vựng.

        if (newData.length === 0) {
        setCurrentData({}); // Nếu danh sách rỗng, đặt lại currentData thành trống.
        setIndex(0); // Đặt lại chỉ mục Index về 0.
        } else if (Index >= newData.length) {
        setIndex(newData.length - 1); // Đặt lại Index nếu nó lớn hơn hoặc bằng độ dài mới của danh sách.
        setCurrentData(newData[newData.length - 1]); // Đặt lại currentData thành phần cuối cùng của danh sách mới.
        } else {
        setCurrentData(newData[Index]); // Đặt lại currentData thành phần hiện tại.
        }
    }
    };

    // Hàm handReset được gọi khi người dùng chạm vào nút "Reset Deck" để đặt lại danh sách từ vựng ban đầu.
    const handReset = () => {
    setLanguageDate(Data); // Đặt lại danh sách từ vựng thành Data ban đầu.
    setIndex(0); // Đặt lại chỉ mục Index về 0.
    setCurrentData(Data[0]); // Đặt lại currentData thành phần đầu tiên của Data.
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