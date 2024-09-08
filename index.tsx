import { setStatusBarBackgroundColor } from "expo-status-bar";
import React,{useState, useEffect} from "react";
import {
 StatusBar, 
 View, 
 StyleSheet, 
 Text, 
 TouchableOpacity, 
 Image, 
 Platform, 
 KeyboardAvoidingView,
 useWindowDimensions,
 TextInput} from 'react-native';

const App =()=>{

const{width, height} = useWindowDimensions();
const isPortrait = height > width;


 
  const imgWidth = isPortrait ? width*0.8 : width*0.4;
  const imgHeight = imgWidth * 0.5;

const statusBarStyle: "light-content" | "dark-content"= Platform.select({
  ios: isPortrait ? "dark-content" : "light-content",android: isPortrait ? "light-content" : "dark-content"
}) || "dark-content";

const statusbarBackgroundColor = Platform.select({
  ios: isPortrait ? "#f1debc" : "#4c2113",
  android: isPortrait ? "#4c2113" : "#f1debc"
})

return(
  <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}
  keyboardVerticalOffset={70}>
    <StatusBar barStyle={statusBarStyle} animated={true} backgroundColor={statusbarBackgroundColor}></StatusBar>
  <Text style={styles.title}>VoLyMinhThu_2124801030213</Text>
  <Image source={{uri:'https://img4.thuthuatphanmem.vn/uploads/2019/11/06/hinh-anh-chieu-hoang-hon-tim_025748796.jpg'}} style={[styles.img,{height:imgHeight, width:imgWidth}]}></Image>
  <TextInput style={styles.input} placeholder="Nhap thong tin vao day" placeholderTextColor="#8e7a6b"></TextInput>
  <View style={[styles.btnContainer, {flexDirection: isPortrait ? 'column':'row'}]}>
  <TouchableOpacity style={[styles.btn,{width: isPortrait ? width*0.8 : width*0.45}]}>
  <Text style={styles.btnText}>Click 1</Text>
  </TouchableOpacity>
  <TouchableOpacity style={[styles.btn,{width: isPortrait ? width*0.8 : width*0.45}]}>
  <Text style={styles.btnText}>Click 2</Text>
  </TouchableOpacity>
  </View>
</KeyboardAvoidingView>
);
};
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#f1debc',
    padding:Platform.select({ios:30, android:20}),
  },
  title:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    width:'auto',
    color:'#4c2113',
    top:50,
    position:'absolute',
  },
  btn:{
    justifyContent:'center',
    alignItems:'center',
    height:50,
    backgroundColor:'#b38b60',
    borderColor:'#a45c23',
    borderWidth:1,
    padding:Platform.select({ios:20, android:10}),

  },
  btnText:{
    color:'#4c2113',
    fontSize:18,
    fontWeight:'bold',
  },
  btnContainer:{
    width:'auto',
    flexDirection:'row',
    alignItems:'center',
  },
  img:{
    marginBottom:30,
  },
  input:{
height:40,
width: "80%",
borderColor:"#b38b60",
borderWidth:1,
marginBottom:20,
borderRadius:5,
backgroundColor:"#ffff",
padding:Platform.select({ios:10, android:8}),

  },
})


export default App;