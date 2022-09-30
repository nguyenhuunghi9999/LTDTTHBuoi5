import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React from "react";
import ListProduct from "./components/ListProduct";
export default function App() {
  return (
   <View >
      <View style ={{paddingTop:40}}>
        <Text style = {{borderBottomWidth:1,borderTopWidth:1, padding:20}}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop</Text>
      </View>
      <ListProduct />
   </View>
  );
}
 