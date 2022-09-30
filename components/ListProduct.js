import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
const data = [
  {
    name: "Ca nấu lẩu, nấu mì mi mini",
    producer: "Devang",
    imgLink: require("../assets/ca_nau_lau.png"),
  },
  {
    name: "1KG KHÔ GÀ BƠ TỎI",
    producer: "Devang",
    imgLink: require("../assets/ga_bo_toi.png"),
  },
  {
    name: "Xe cần cẩu đa năng",
    producer: "Devang",
    imgLink: require("../assets/xa_can_cau.png"),
  },
  {
    name: "Đồ chơi dạng mô hình",
    producer: "Thế giới đồ chơi",
    imgLink: require("../assets/do_choi_dang_mo_hinh.png"),
  },
  {
    name: "Lãnh đạo giản đơn",
    producer: "Minh Long Book",
    imgLink: require("../assets/lanh_dao_gian_don.png"),
  },
  {
    name: "Hiểu lòng con trẻ",
    producer: "Minh Long Book",
    imgLink: require("../assets/hieu_long_con_tre.png"),
  },
  
];
export default function ListProduct()  {
  return (
    
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <View style={styles.view}>
          <Image style={styles.image} source={item.imgLink}/>
          <View >
            <Text style ={{}}>{item.name}</Text>
            <Text style={{color:'gray'}}>
              Shop
              <Text> {item.producer}</Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.button} >
            <Text style ={{color:'white'}}>Chat</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
    view:{
        display: "flex",
            flexDirection: "row",
            width: "100%",
            padding: 12,
            paddingTop:5,
            paddingVertical: 3,
            borderBottomWidth: 1,
            borderColor: "gray",
            borderStyle: "solid",
            justifyContent: "space-between",
        
    },
    image:{
        width:70,
        height:70
    },
    button:{
        backgroundColor:"red",
        height:40,
        width:70,
        alignItems: "center",
        alignSelf: 'center',
        justifyContent:"center",
        
    },
  });
  
